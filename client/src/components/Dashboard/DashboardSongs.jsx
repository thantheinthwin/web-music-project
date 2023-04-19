import React, { useEffect, useState } from 'react'

import { AiOutlineSearch } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';

import { useStateValue } from '../../context/StateProvider';
import { getAllSongs } from '../../api';
import { actionType } from '../../context/reducer';
import SongCard from '../SongCard';

const DashboardSongs = () => {
  const [songFilter, setSongFilter] = useState("");

  const [{allSongs}, dispatch] = useStateValue();

  useEffect(() => {
    if(!allSongs){
      getAllSongs().then((data => {
        dispatch({
          type: actionType.SET_ALL_SONGS,
          allSongs: data.data
        })
      }))
    }
  },[])

  return (
    <div className="grid items-center justify-center grid-cols-4 gap-3 p-4 col-span-full lg:grid-cols-8">
      {/* Search bar */}
      <div className="relative grid grid-flow-col grid-cols-8 col-span-full lg:col-span-4 lg:col-start-3">
        <div className="relative grid grid-flow-col col-span-7">
          <div className="absolute items-center text-lg text-gray-500 pointer-events-none left-4 top-3">
            <AiOutlineSearch />
          </div>
          <input
            type="text"
            value={songFilter}
            onChange={(e) => setSongFilter(e.target.value)}
            placeholder="Search for songs"
            className="pl-10 border-gray-200 rounded-l-lg focus:border-gray-300 focus:ring-0"
          ></input>
        </div>
        <button
          className="flex items-center justify-center bg-gray-100 rounded-r-lg hover:bg-gray-200"
          onClick={() => setSongFilter("")}
        >
          <RxCross1 />
        </button>
      </div>

      {/* Main Container */}
      <div className="grid items-center justify-center grid-cols-4 gap-2 border border-gray-300 rounded-md col-span-full lg:grid-cols-8">
        <div className="p-2 text-sm text-gray-400 col-span-full">
          You have {allSongs?.length} songs in the database.
        </div>
        <SongContainer data={allSongs} />
      </div>
    </div>
  );
}

export const SongContainer = ({data}) => {
  return (
    <div className='flex flex-wrap items-center p-2 col-span-full justify-evenly'>
      { data && data.map((song, i) =>
        <SongCard key={song._id} data={song} index={i} />
      ) }
    </div>
  );
};

export default DashboardSongs