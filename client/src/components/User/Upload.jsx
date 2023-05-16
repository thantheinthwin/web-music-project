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
      <div className='grid grid-flow-col grid-cols-7 gap-4 col-span-full'>
        <form method='POST' className='grid justify-center grid-flow-row grid-cols-4 col-span-4 gap-4 px-4 py-8 space-y-3 border rounded-lg h-2/3'>
          <div className='w-full col-span-full'>
            <div className='relative'>
              <input id="title" name='title' type='text' placeholder='Title' className='w-full h-10 text-gray-900 placeholder-transparent border-0 border-b-2 border-gray-300 focus:rounded-md focus:ring-2 focus:border-0 focus:ring-blue-300 peer focus:ring-inset'></input>
              <label className='absolute text-sm text-gray-600 transition-all -top-3 left-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-2 peer-placeholder-shown:left-2 peer-focus:-top-4 peer-focus:left-2 peer-focus:text-sm peer-focus:text-blue-300 peer-focus:bg-white peer-focus:p-1'>Song Title</label>
            </div>
          </div>
        </form>
        <SongContainer song={allSongs} artist={artist}/>
      </div>
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