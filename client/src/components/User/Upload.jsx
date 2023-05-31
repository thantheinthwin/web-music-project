import React, { useEffect, useState } from 'react'

import { useStateValue } from '../../context/StateProvider'
import { actionType } from '../../context/reducer';

import { getAllSongs } from '../../api';

import { SongCard } from '../Cards';

const Upload = () => {
  const[{user, allSongs}, dispatch] = useStateValue();

  const [totalSongs, setTotalSongs] = useState(null);

  let artist = user.user.name;

  useEffect(() => {
    if(allSongs){
      getAllSongs().then((data) => {
        dispatch({
          type: actionType.SET_ALL_SONGS,
          allSongs: data.song
        })
      })

      setTotalSongs(allSongs.filter(song => song.artist === artist).length)
    }
  },[allSongs])

  return (
    <div className='grid w-full grid-flow-row grid-cols-8 gap-4 p-4'>
      <div className='p-2 text-sm font-semibold text-gray-400 border rounded-lg col-span-full'>
        You have uploaded {totalSongs} songs.
      </div>
      <div className='p-2 col-span-full'>Upload section</div>
    </div>
  )
}

export const SongContainer = ({song, artist}) => {
  return (
    <div className='grid items-center grid-cols-4 col-span-3 gap-4 p-4 overflow-y-scroll border rounded-lg h-[44rem]'>
      { song && song.filter(song => song.artist === artist).map((song, i) =>
        <SongCard key={song._id} data={song} index={i} />
      ) }
    </div>
  );
};

export default Upload