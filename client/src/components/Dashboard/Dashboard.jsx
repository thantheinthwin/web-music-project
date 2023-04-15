import React from 'react'
import Navigation from '../navigation'
import { NavLink, Route, Routes } from 'react-router-dom'

// Importing Routes
import { DashboardHome, DashboardUsers, DashboardSongs, DashboardAlbums, DashboardArtists} from './index'

import { AiOutlineHome } from 'react-icons/ai'

import { isActiveDashboardNav, isNotActiveDashboardNav } from '../../utils/styles'


const Dashboard = () => {
  return (
    <div className='relative flex flex-col items-center justify-center w-full h-auto'>
        <Navigation />
        <div className='grid items-center w-full lg:grid-cols-10'>
          <div className='grid grid-flow-col p-4 text-base font-medium bg-white rounded-md shadow-md lg:col-span-6 lg:col-start-3 justify-evenly'>
            <NavLink to={'/dashboard/home'} className={({isActive}) => isActive ? isActiveDashboardNav : isNotActiveDashboardNav }><AiOutlineHome className='text-2xl'/></NavLink>
            <NavLink to={'/dashboard/users'} className={({isActive}) => isActive ? isActiveDashboardNav : isNotActiveDashboardNav }>Users</NavLink>
            <NavLink to={'/dashboard/songs'} className={({isActive}) => isActive ? isActiveDashboardNav : isNotActiveDashboardNav }>Songs</NavLink>
            <NavLink to={'/dashboard/albums'} className={({isActive}) => isActive ? isActiveDashboardNav : isNotActiveDashboardNav }>Artists</NavLink>
            <NavLink to={'/dashboard/artists'} className={({isActive}) => isActive ? isActiveDashboardNav : isNotActiveDashboardNav }>Albums</NavLink>
          </div>
          <div className='grid grid-flow-col grid-cols-10 lg:col-span-8 lg:col-start-2'>
            <Routes>
              <Route path='/home' element={<DashboardHome />} />
              <Route path='/users' element={<DashboardUsers />} />
              <Route path='/songs' element={<DashboardSongs /> } />
              <Route path='/albums' element={<DashboardAlbums />} />
              <Route path='/artists' element={<DashboardArtists />} />
            </Routes>
          </div>
        </div>
    </div>
  )
}

export default Dashboard