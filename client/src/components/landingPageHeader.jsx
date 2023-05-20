import React, { useEffect, useState } from 'react'
import { Logo } from '../assets/img'
import { NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

import { FiLogIn } from 'react-icons/fi'

const LandingPageHeader = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <nav className='relative z-50'>
      <div className='relative z-50 flex items-center justify-between w-full p-2 bg-neutral-900'>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1 }}
          className="grid items-center grid-flow-col gap-6"
        >
          <img src={Logo} className="w-12" />
          <p className="text-2xl font-bold cursor-default">Jamify</p>
        </motion.div>
        <motion.div className='p-2 rounded-md bg-neutral-800 md:hidden' onClick={() => {setMenuOpen(!isMenuOpen)}}>
          <FiLogIn className='text-2xl'/>
        </motion.div>
        <motion.div className='items-center hidden divide-x md:flex'>
          <div className='flex gap-2 p-2'>
            <NavLink>Home</NavLink>
            <NavLink>Subscription</NavLink>
            <NavLink>Operation</NavLink>
          </div>
          <div className='grid grid-flow-col gap-2 p-2'>
            <NavLink className='w-full p-2 rounded-lg' to={'/login'}>Log In</NavLink>
            <NavLink className='w-full p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700' to={'/signup'}>Sign Up</NavLink>
          </div>
        </motion.div>
      </div>
      <AnimatePresence>
        { isMenuOpen && <motion.div initial={{y: -60}} animate={{y: 0}} exit={{y: -60}} transition={{type: 'just'}} className='absolute left-0 z-0 flex w-full gap-2 p-2 text-center bg-neutral-900'>
          <NavLink className='w-full p-2 rounded-lg bg-secondary' to={'/login'}>Log In</NavLink>
          <NavLink className='w-full p-2 rounded-lg bg-neutral-800' to={'/signup'}>Sign Up</NavLink>
        </motion.div>}
      </AnimatePresence>
    </nav>
  );
}

export default LandingPageHeader