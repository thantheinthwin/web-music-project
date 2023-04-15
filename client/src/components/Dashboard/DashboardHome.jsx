import React, { useEffect } from 'react'
import { getAllAlbums, getAllArtists, getAllSongs, getAllUsers } from '../../api';
import { useStateValue } from '../../context/StateProvider';
import { actionType } from '../../context/reducer';

// Importing react icons
import { AiOutlineUser } from 'react-icons/ai';
import { TbMicrophone2 } from 'react-icons/tb';
import { IoAlbumsOutline } from 'react-icons/io5';
import { HiOutlineMusicalNote } from 'react-icons/hi2';

export const DashboardCard = ({icon, name, count}) => {
  return (
    <div className='grid w-40 h-auto gap-2 p-4 shadow-md cursor-default rouned-lg bg-sky-blue-50 hover:shadow-lg'>
      {icon}
      <p className='text-xl font-semibold'>{name}</p>
      <p className='text-xl font-semibold'>{count}</p>
    </div>
  )
}

const DashboardHome = () => {
  const [{allUsers, allSongs, allArtists, allAlbums}, dispatch] = useStateValue();

  useEffect(() => {
    if(!allUsers){
      getAllUsers().then((data) => {
        dispatch({
          type: actionType.SET_ALL_USERS,
          allUsers: data.data
        })
      })
    }

    if(!allArtists){
      getAllArtists().then((data) => {
        dispatch({
          type: actionType.SET_ALL_ARTISTS,
          allArtists: data.artist
        })
      })
    }

    if(!allAlbums){
      getAllAlbums().then((data) => {
        dispatch({
          type: actionType.SET_ALL_ALBUMS,
          allAlbums: data.album
        })
      })
    }

    if(!allSongs){
      getAllSongs().then((data) => {
        dispatch({
          type: actionType.SET_ALL_SONGS,
          allSongs: data.song
        })
      })
    }
  },[])

  return (
    <div className='grid items-center w-full grid-flow-row col-span-6 col-start-3 gap-3 p-6 lg:grid-flow-col justify-evenly'>
      <DashboardCard icon={<AiOutlineUser/>} name={"Users"} count={ allUsers?.length > 0 ? allUsers?.length : 0 }/>
      <DashboardCard icon={<TbMicrophone2/>} name={"Artists"} count={ allArtists?.length > 0 ? allArtists?.length : 0 }/>
      <DashboardCard icon={<HiOutlineMusicalNote/>} name={"Songs"} count={ allSongs?.length > 0 ? allSongs?.length : 0 }/>
      <DashboardCard icon={<IoAlbumsOutline/>} name={"Albums"} count={ allAlbums?.length > 0 ? allAlbums?.length : 0 }/>
    </div>
  )
}

export default DashboardHome