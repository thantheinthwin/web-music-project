import React, { useState } from 'react'

import { AnimatePresence, motion } from 'framer-motion'

import { BsTrash } from 'react-icons/bs';
import { removeSong } from '../api';
import { actionType } from '../context/reducer';
import { useStateValue } from '../context/StateProvider';

const SongCard = ({data, index}) => {
  const [isDeleteConfirm, setDeleteConfirm] = useState(false);
  const [{allSongs}, dispatch] = useStateValue();
  const [isDashboardBranch, setDashboardBranch] = useState(window.location.pathname.split("/").some(path => path === "dashboard"));

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
    <AnimatePresence>
      <motion.div className="relative flex flex-col items-center col-span-1 gap-2 p-2 rounded-md shadow-md cursor-pointer bg-neutral-900">
        <div className="relative w-full overflow-hidden rounded-md drop-shadow-lg">
          <motion.img
            src={data.imageURL}
            alt=""
            className="object-cover w-full h-full rounded-md"
            referrerPolicy="no-referrer"
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
        <div className="relative flex items-center justify-center w-full">
          <motion.i
            whileHover={{ scale: 1.15 }}
            className="p-1 text-xl text-red-500 rounded-md hover:bg-rose-50"
            onClick={() => {
              setDeleteConfirm(!isDeleteConfirm);
            }}
          >
            <BsTrash />
          </motion.i>
          <AnimatePresence>
            {(isDeleteConfirm && isDashboardBranch) && (
              <motion.div
                initial={{ opacity: 0, y: -25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -25 }}
                transition={{ type: 'spring', duration: 0.5 }}
                className="absolute z-10 grid items-center justify-center grid-cols-2 grid-rows-2 p-2 px-4 border-2 rounded-lg shadow-md bg-neutral-800 gap-x-2 top-7"
              >
                <p className="col-span-2 row-span-1 text-center">
                  Are you sure you want to delete?
                </p>
                <span
                  className="col-span-1 row-span-1 p-2 text-center text-white transition-all duration-200 ease-in-out bg-green-500 rounded-lg hover:bg-green-600 hover:shadow-md"
                  onClick={() => {
                    deleteSong(data._id);
                  }}
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
          </AnimatePresence>
        </div>
        <AnimatePresence>
          {(isDeleteConfirm && !isDashboardBranch) && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ ease: "easeInOut", duration: 1 }}
                className="absolute z-10 grid items-center justify-center h-full grid-cols-2 grid-rows-2 px-4 pt-2 rounded-lg shadow-md bg-neutral-800"
              >
                <p className="col-span-2 row-span-1 text-center">
                  Are you sure you want to delete?
                </p>
                <div className='grid grid-flow-row col-span-2 grid-rows-2 row-span-1 gap-2'>
                  <span
                    className="row-span-1 p-2 text-center text-white transition-all duration-200 ease-in-out bg-green-500 rounded-lg hover:bg-green-600 hover:shadow-md"
                    onClick={() => {
                      deleteSong(data._id);
                    }}
                  >
                    Yes
                  </span>
                  <span
                    className="row-span-1 p-2 text-center text-white transition-all duration-200 ease-in-out bg-red-500 rounded-lg hover:bg-red-600 hover:shadow-md"
                    onClick={() => setDeleteConfirm(false)}
                  >
                    No
                  </span>
                </div>
              
              </motion.div>
            )}
          </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
}

export default SongCard;