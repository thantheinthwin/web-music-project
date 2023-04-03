import React from 'react'
import { Logo } from '../assets/img'
import { NavLink } from 'react-router-dom'

const landingPageHeader = () => {
  return (
    <div className='flex items-center justify-between w-full p-2 shadow-md'>
      <img src={Logo} className='w-12'/>
      <div className='grid grid-flow-col gap-2'>
        <NavLink to={'/signup'} className='p-2 border-2 rounded-xl border-blue-950 text-blue-950'>Sign Up</NavLink>
        <NavLink to={'/login'} className='px-4 py-2 bg-blue-300 rounded-xl'>Login</NavLink>
      </div>
    </div>
  )
}

export default landingPageHeader