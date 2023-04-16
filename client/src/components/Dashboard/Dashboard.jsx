import React, { useState } from 'react'
import Navigation from '../navigation'
import { NavLink, Route, Routes } from 'react-router-dom'

// Importing Routes
import { DashboardHome, DashboardUsers, DashboardSongs, DashboardAlbums, DashboardArtists} from './index'

import { AiOutlineHome } from 'react-icons/ai'

import { isActiveDashboardNav, isNotActiveDashboardNav } from '../../utils/styles'

const Dashboard = () => {  
  const menuItems = [
    {
      id: 1,
      link: '/dashboard/home',
      to: <AiOutlineHome className='text-2xl' />
    },
    {
      id: 2,
      link: '/dashboard/users',
      to: 'Users'
    },
    {
      id: 3,
      link: '/dashboard/artists',
      to: 'Artists'
    },
    {
      id: 4,
      link: '/dashboard/songs',
      to: 'Songs'
    },
    {
      id: 5,
      link: '/dashboard/albums',
      to: 'Albums'
    }
  ]

  const routes = [
    {
      id: 1,
      path: '/home',
      element: <DashboardHome />
    },
    {
      id: 2,
      path: '/users',
      element: <DashboardUsers />
    },
    {
      id: 3,
      path: '/artists',
      element: <DashboardArtists />
    },
    {
      id: 4,
      path: '/songs',
      element: <DashboardSongs />
    },
    {
      id: 5,
      path: '/albums',
      element: <DashboardAlbums />
    }
  ];
  
  return (
    <div className='relative flex flex-col items-center justify-center w-full h-auto'>
        <Navigation />
        <div className='grid items-center w-full lg:grid-cols-10'>
          <nav className='hidden grid-flow-row p-4 text-base font-medium bg-white rounded-md shadow-md lg:grid lg:grid-flow-col lg:col-span-6 lg:col-start-3 justify-evenly'>
            {menuItems.map((item) => <NavLink key={item.id} to={item.link} className={({isActive}) => isActive ? isActiveDashboardNav : isNotActiveDashboardNav}>{item.to}</NavLink>)}
          </nav>
          <div className='grid grid-flow-col grid-cols-4 lg:grid-cols-8 lg:col-span-8 lg:col-start-2 col-span-full'>
            <Routes>
              {routes.map((route) => <Route path={route.path} element={route.element} />)}
            </Routes>
          </div>
        </div>
    </div>
  )
}

export default Dashboard