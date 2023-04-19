import React, { useState } from 'react'

import { motion } from 'framer-motion'

import { BsTrash } from 'react-icons/bs';
import { removeSong } from '../api';
import { actionType } from '../context/reducer';
import { useStateValue } from '../context/StateProvider';

const SongCard = ({data, index}) => {
  const [isDeleteConfirm, setDeleteConfirm] = useState(false);
  const [{allSongs}, dispatch] = useStateValue();

  const deleteSong = (songId) => {
    removeSong(songId).then((res) => {
      if(res) {
        dispatch({
          type: actionType.SET_ALL_SONGS,
          allSongs: data.data,
        })
      }
    })
  }
  
  return (
    <motion.div className="relative flex flex-col items-center w-40 gap-2 p-2 bg-white rounded-md shadow-md cursor-pointer">
      <div className="relative w-full overflow-hidden rounded-md drop-shadow-lg">
        <motion.img
          src={data.imageURL}
          alt=""
          className="object-cover w-full h-full rounded-md"
          whileHover={{ scale: 1.05 }}
        />
      </div>
      <p className="text-base font-semibold text-center">
        {data.name.length > 15 ? `${data.name.slice(0, 15)}...` : data.name}
        <span className="block text-sm text-gray-400">
          {data.artist.length > 15
            ? `${data.artist.slice(0, 15)}...`
            : data.artist}
        </span>
      </p>
      <div className="relative flex items-center justify-between w-full">
        <motion.i
          whileHover={{ scale: 1.15 }}
          className="p-1 text-xl text-red-500 rounded-md hover:bg-rose-50"
          onClick={() => {setDeleteConfirm(!isDeleteConfirm)}}
        >
          <BsTrash />
        </motion.i>
        {isDeleteConfirm && (
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { ease: "easeInOut", duration: 0.75 },
                }}
                exit={{
                  opacity: 0,
                  y: -25,
                  transition: { ease: "easeInOut", duration: 1 },
                }}
                className="absolute z-10 grid items-center justify-center grid-cols-2 grid-rows-2 px-4 pt-2 bg-white border-2 rounded-lg shadow-md top-8 gap-x-2"
              >
                <p className="col-span-2 row-span-1 text-center">
                  Are you sure you want to delete?
                </p>
                <span
                  className="col-span-1 row-span-1 p-2 text-center text-white transition-all duration-200 ease-in-out bg-green-500 rounded-lg hover:bg-green-600 hover:shadow-md"
                  onClick={() => {deleteSong(data._id)}}
                >
                  Yes
                </span>
                <span
                  className="col-span-1 row-span-1 p-2 text-center text-white transition-all duration-200 ease-in-out bg-red-500 rounded-lg hover:bg-red-600 hover:shadow-md"
                  onClick={() => setDeleteConfirm(false)}
                >
                  No
                </span>
              </motion.div>
            )}
      </div>
    </motion.div>
  );
}

export default SongCard;