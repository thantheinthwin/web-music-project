import React, { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { useStateValue } from '../context/StateProvider'
import { getAllSongs } from '../api';
import { actionType } from '../context/reducer';

const ArtistCard = ({data, index}) => {

    const[{allSongs}, dispatch] = useStateValue();

    const totalSongs = useRef(0);

    useEffect(() => {
        if(!allSongs){
            getAllSongs().then((data) => {
                dispatch({
                    type: actionType.SET_ALL_SONGS,
                    allSongs: data.song
                })
            })
            
        }
    }, [allSongs])
    
    return (
        <AnimatePresence>
            <motion.div className='relative grid items-center grid-flow-col grid-cols-5 gap-2 p-2 rounded-md shadow-md cursor-pointer col-span-full lg:col-span-6 xl:col-span-4 bg-neutral-900'>
                <div className="relative w-full col-span-1 overflow-hidden rounded-md drop-shadow-lg">
                <motion.img
                    src={data.imageURL}
                    alt=""
                    className="object-cover w-full h-full rounded-md"
                    referrerPolicy="no-referrer"
                    whileHover={{ scale: 1.05 }}
                />
                </div>
                <div className='grid col-span-4 grid-rows-3 p-2 text-sm'>
                    <div className='grid grid-flow-col grid-cols-3 grid-rows-1'>
                        <span className='col-span-1'>Name : </span>
                        <span className='col-span-2'>{data.name}</span>
                    </div>
                    <div className='grid grid-flow-col grid-cols-3 grid-rows-1'>
                        <span className='col-span-1'>Youtube : </span>
                        <a href={data.youtube} className='col-span-2'>{data.youtube.length > 15 ? `${data.youtube.slice(0, 20)}...`: data.youtube}</a>
                    </div>
                    <div className='grid grid-flow-col grid-cols-3 grid-rows-1'>
                        <span className='col-span-1'>Soundcloud : </span>
                        <a href={data.soundcloud} className='col-span-2'>{data.soundcloud.length > 15 ? `${data.soundcloud.slice(0, 20)}...`: data.soundcloud}</a>
                    </div>
                    <div className='grid-rows-1'>
                        {totalSongs.current} songs
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}

export default ArtistCard