import React from 'react'
import Navigation from './navigation'

const Dashboard = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full h-auto'>
        <Navigation />
        <div className='grid items-center p-4 bg-purple-100 grid-col-4 justify-evenly'></div>
    </div>
  )
}

export default Dashboard