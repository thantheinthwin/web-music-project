import React from 'react'
import { useStateValue } from '../context/StateProvider'

const ContantArea = () => {
  const [{user}, dispatch] = useStateValue();

  return (
    <div className='w-full'>
      Content Area
    </div>
  )
}

export default ContantArea