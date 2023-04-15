import React from 'react'
import SideBar from './sideBar'
import ContantArea from './contantArea'
import Navigation from './navigation'

const Home = () => {
  return (
    <div className='flex flex-col w-full h-auto'>
      <div className='flex flex-1 overflow-y-hidden'>
        <SideBar />
        <div className='flex-col w-full'>
          <Navigation/>
          <ContantArea/>
        </div>
      </div>
    </div>
  )
}

export default Home