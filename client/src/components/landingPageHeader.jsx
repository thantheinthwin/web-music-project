import React, { useState } from 'react'
import { Logo } from '../assets/img'
import { NavLink } from 'react-router-dom'
import { delay, motion } from 'framer-motion'

const LandingPageHeader = () => {
  // Using hook to detect mobile view
  const [isMobile, isSetMobile] = useState(() => window.innerWidth < 700);

  return (
    <div>
      <nav className="absolute z-50 flex items-center justify-center w-full p-2 font-medium text-white uppercase shadow-md lg:justify-between font-navigation">
        <motion.div
          initial={isMobile ? { opacity: 0, y: 20 } : { opacity: 0, x: -30 }}
          // initial={{opacity:0, x:-30}}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 2 }}
          className="grid items-center grid-flow-col gap-6"
        >
          <img src={Logo} className="w-12" />
          <p className="text-2xl font-bold cursor-default">Jamify</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          className="items-center hidden grid-flow-col lg:grid"
        >
          <NavLink to={"/login"} className="p-2 border-2 border-transparent">
            Sign in
          </NavLink>
          <NavLink
            to={"/signup"}
            className="px-4 py-2 transition-all duration-300 ease-in-out rounded-lg bg-primary text-secondary"
          >
            Sign up
          </NavLink>
        </motion.div>
      </nav>
      <motion.footer 
        initial={{y: 100, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{delay: 0.5, duration: 2}}
        className="absolute bottom-0 flex justify-center w-screen gap-2 p-3 lg:hidden">
        <NavLink
          to={"/login"}
          className="w-full p-2 text-center border-transparent rounded-lg bg-secondary"
        >
          Sign in
        </NavLink>
        <NavLink
          to={"/signup"}
          className="w-full p-2 text-center rounded-lg bg-primary text-secondary"
        >
          Sign up
        </NavLink>
      </motion.footer>
    </div>
  );
}

export default LandingPageHeader