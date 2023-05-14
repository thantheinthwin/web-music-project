import React, { useState } from 'react'
import { Logo } from '../assets/img'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const LandingPageHeader = () => {
  // Using hook to detect mobile view
  const [isMobile, isSetMobile] = useState(() => window.innerWidth < 700);

  return (
    <nav className='absolute z-50 flex items-center justify-around w-full p-2 font-bold uppercase shadow-md'>
      <motion.div 
      initial={isMobile ? {opacity:0, y: 20} : {opacity:0, x: -30}}
      // initial={{opacity:0, x:-30}}
      animate={{opacity:1, x:0, y:0}}
      transition={{duration: 2}}
      className='grid items-center grid-flow-col gap-6'>
        <img src={Logo} className='w-12'/>
        <p className='text-2xl font-bold cursor-default'>S!NG</p>
      </motion.div>
      <motion.div 
      initial={{opacity:0, x:30}}
      animate={{opacity:1, x:0}}
      transition={{duration: 2}}
      className='items-center hidden grid-flow-col gap-6 mr-3 divide-x-2 lg:grid'>
        <div className='grid grid-flow-col gap-6'>
          <NavLink to={'/about'}>About Us</NavLink>
          <NavLink to={'/support'}>Support</NavLink>
          <NavLink to={'/premium'}>Premium</NavLink>
        </div>
        <div className='grid grid-flow-col gap-2 px-4'>
          <NavLink to={'/login'} className='p-2 border-2 border-transparent'>Sign in</NavLink>
          <NavLink to={'/signup'} className='px-4 py-2 transition-all duration-300 ease-in-out rounded-lg bg-primary text-secondary'>Sign up</NavLink>
        </div>
      </motion.div>
    </nav>
  )
}

export default LandingPageHeader