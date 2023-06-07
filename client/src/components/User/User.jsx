import React, {useState} from 'react'

import Navigation from '../navigation'
import { Favorite, Home, MobileNav, Profile, SideBar, Subscribe, Upload } from '.'
import { Route, Routes } from 'react-router-dom'

const User = () => {
  const routes = [
    {
      path: '/home',
      element: <Home/>
    },
    {
      path: '/favorite',
      element: <Favorite/>
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

  // Checking mobile view
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 700);

  const [profileOpen, setProfileOpen] = useState(false);

  const handleOpen = () => {
    setProfileOpen(true);
  }

  const handleClose = () => {
    setProfileOpen(false);
  }

  return (
    <div className="flex flex-col w-full h-screen overflow-hidden text-white bg-black">
      <div className="flex flex-1 overflow-y-hidden">
        {isMobile && <MobileNav/> || <SideBar />}
        <div className="flex-col w-full">
          <Navigation openProfile={handleOpen} />
          <div className="w-full">
            <Routes>
              {routes.map((route, i) => (
                <Route key={i} path={route.path} element={route.element} />
              ))}
            </Routes>
          </div>
        </div>
      </div>
      <Profile open={profileOpen} handleClose={handleClose}/>
    </div>
  );
}

export default User