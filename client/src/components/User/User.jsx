import React from 'react'

import Navigation from '../navigation'
import { Browse, Home, SideBar, Subscribe, Upload } from '.'
import { Route, Routes } from 'react-router-dom'

const User = () => {
  const routes = [
    {
      path: '/home',
      element: <Home/>
    },
    {
      path: '/browse',
      element: <Browse/>
    },
    {
      path: '/subscribe',
      element: <Subscribe />
    },
    {
      path: '/upload',
      element: <Upload/>
    }
  ]

  return (
    <div className="flex flex-col w-full h-screen overflow-hidden text-white bg-black">
      <div className="flex flex-1 overflow-y-hidden">
        <SideBar />
        <div className="flex-col w-full">
          <Navigation />
          <div className="w-full">
            <Routes>
              {routes.map((route, i) => (
                <Route key={i} path={route.path} element={route.element} />
              ))}
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User