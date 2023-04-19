import React from 'react'

import { motion } from 'framer-motion'

import { BsTrash } from 'react-icons/bs';

const SongCard = ({data, index}) => {
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
      <div className="flex items-center justify-between w-full">
        <motion.i
          whileHover={{ scale: 1.15 }}
          className="p-1 text-xl text-red-500 rounded-md hover:bg-rose-50"
        >
          <BsTrash />
        </motion.i>
      </div>
    </motion.div>
  );
}

export default SongCard;