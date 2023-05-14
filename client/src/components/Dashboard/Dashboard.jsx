import React from 'react'
import Navigation from '../navigation'
import { NavLink, Route, Routes } from 'react-router-dom'

// Importing Routes
import { DashboardHome, DashboardUsers, DashboardSongs, DashboardAlbums, DashboardArtists} from './index'

import { AiOutlineHome } from 'react-icons/ai'

import { isActiveDashboardNav, isNotActiveDashboardNav } from '../../utils/styles'

const Dashboard = () => {  
  const menuItems = [
    {
      link: "/dashboard/home",
      to: <AiOutlineHome className="text-2xl" />,
    },
    {
      link: "/dashboard/users",
      to: "Users",
    },
    {
      link: "/dashboard/songs",
      to: "Songs",
    },
    {
      link: "/dashboard/artists",
      to: "Artists",
    },
    {
      link: "/dashboard/albums",
      to: "Albums",
    },
  ];

  const routes = [
    {
      path: "/home",
      element: <DashboardHome />,
    },
    {
      path: "/users",
      element: <DashboardUsers />,
    },
    {
      path: "/artists",
      element: <DashboardArtists />,
    },
    {
      path: "/songs",
      element: <DashboardSongs />,
    },
    {
      path: "/albums",
      element: <DashboardAlbums />,
    },
  ];
  
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-auto">
      <Navigation />
      <div className="grid items-center w-full text-white lg:grid-cols-10">
        <nav className="hidden grid-flow-row p-4 text-base font-medium justify-evenly rounded-b-md lg:col-span-6 lg:col-start-3 lg:grid lg:grid-flow-col bg-neutral-900">
          {menuItems.map((item, i) => (
            <NavLink
              key={i}
              to={item.link}
              className={({ isActive }) =>
                isActive ? isActiveDashboardNav : isNotActiveDashboardNav
              }
            >
              {item.to}
            </NavLink>
          ))}
        </nav>
        <div className="grid grid-flow-col grid-cols-4 col-span-full lg:col-span-8 lg:col-start-2 lg:grid-cols-8">
          <Routes>
            {routes.map((route, i) => (
              <Route key={i} path={route.path} element={route.element} />
            ))}
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Dashboard