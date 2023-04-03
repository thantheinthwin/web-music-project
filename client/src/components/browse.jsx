import React from 'react'
import SideBar from './sideBar'
import ContantArea from './contantArea'

const browse = () => {
  return (
    <div className='flex flex-col w-full h-auto'>
        <div className='flex flex-1 overflow-y-hidden'>
            <SideBar />
            <ContantArea />
        </div>
    </div>
  )
}

export default browse