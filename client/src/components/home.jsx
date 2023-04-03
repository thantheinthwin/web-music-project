import React from 'react'
import SideBar from './sideBar'
import ContantArea from './contantArea'
import Navigation from './navigation'

import { useStateValue } from '../context/StateProvider'

const Home = () => {
  const [{user}, dispatch] = useStateValue();

  return (
    <div className='flex flex-col w-full h-auto'>
      <div className='flex flex-1 overflow-y-hidden'>
        <SideBar />
        <div className='flex-col w-full'>
          <Navigation user={user}/>
          <ContantArea user={user} />
        </div>
      </div>
    </div>
  )
}

export default Home