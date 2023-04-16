import React, { useState } from 'react'
import { useStateValue } from '../../context/StateProvider'
import moment from 'moment';

import { AiOutlineMore } from 'react-icons/ai'

import { motion } from 'framer-motion';

const DashboardUsers = () => {
  const [{ allUsers }, dispatch] = useStateValue();

  const [isMobile, setMobile] = useState(window.innerWidth < 700);

  const tableHeaders = {
    mobile: ['Image', "Name", "Role", "..."],
    desktop: ['Image', 'Name', 'Email', 'Subscribed', 'Created', 'Role']
  };

  // Variants
  const container = {
    show: {
      transition: {
        staggerChildren: 0.35,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { ease: 'easeInOut', duration: 1 }},
    exit: { opacity: 0 }
  }
  
  return (
    <div className='grid grid-flow-col grid-cols-4 mt-2 lg:grid-cols-6 col-span-full'> 
      {/* filter */}

      {/* tabular data form */}
      <div className='relative grid items-center justify-start grid-flow-col grid-cols-4 gap-3 p-4 border-2 border-gray-300 rounded-md lg:grid-cols-6 col-span-full'>
        {/* total number of users */}
        <div className='col-span-full'>
          <p className='text-sm font-semibold'>
            Count : <span className='text-xl font-bold'>{allUsers?.length}</span>
          </p>
        </div>

        {/* table data */}
        <div className='grid grid-col-4 lg:grid-cols-6 col-span-full'>
        <div className='hidden grid-flow-col divide-x lg:grid col-span-full'>
          {tableHeaders.desktop.map((header) => <p className='col-span-1 text-sm font-semibold text-center'>{header}</p>)}
        </div>
        <div className='grid grid-flow-col divide-x col-span-full lg:hidden'>
          {tableHeaders.mobile.map((header) => <p className='col-span-1 text-sm font-semibold text-center'>{header}</p>)}
        </div>

        {/* table body content */}
        {
          (allUsers && !isMobile) && 
            <motion.div
              variants={container}
              initial='hidden'
              animate='show'
              exit='exit'
              className='grid gap-1 col-span-full'
            >
              {allUsers?.map((data, i) => <DashboardUserCard data={data} index={i} item={item}/>)}
            </motion.div>
        }
        {
          (allUsers && isMobile) && <motion.div
            variants={container}
            initial='hidden'
            animate='show'
            exit='exit'
            className='grid gap-1 col-span-full'
          >
            {allUsers?.map((data, i) => <DashboardUserCard data={data} index={i} item={item}/>)}
          </motion.div>
        }
        </div>
        
      </div>

    </div>
  )
}

export const DashboardUserCard = ({data, index, item}) => {
  const createdAt = moment(new Date(data.createdAt)).format("MMM Do YY");

  const [isMobile, setMobile] = useState(window.innerWidth < 700);

  const [isMenuOpen, setMenuOpen] = useState(false);

  return (<div>
    {
    !isMobile && <motion.div
      variants={item}
      className='relative grid items-center grid-flow-col grid-cols-6 rounded-sm cursor-pointer bg-gray-50 col-span-full hover:bg-gray-100'
    >
      <img src={data.imageURL} alt={data._id} className='object-cover w-10 h-10 col-span-1 bg-blue-100 rounded-md shadow-md justify-self-center'/>
      <p className='col-span-1 text-base text-center break-all'>{data.name}</p>
      <p className='col-span-1 text-sm text-center break-all'>{data.email}</p>
      <p className='col-span-1 text-base text-center break-all'>{data.subscription ? <span>Subscribed</span> : <span>Free user</span>}</p>
      <p className='col-span-1 text-base text-center break-all'>{createdAt}</p>
      <p className='col-span-1 text-base text-center break-all'>{data.role}</p>
    </motion.div>
    }
    {
      isMobile && <motion.div
        variants={item}
      >
        <div className='relative z-10 grid items-center grid-flow-col grid-cols-4 rounded-sm cursor-pointer bg-gray-50 col-span-full hover:bg-gray-100'>
          <img src={data.imageURL} alt={data._id} className='object-cover w-10 h-10 col-span-1 bg-blue-100 rounded-md shadow-md justify-self-center'/>
          <p className='col-span-1 text-base text-center break-word'>{data.name}</p>
          <p className='col-span-1 text-base text-center break-word'>{data.role}</p>
          <AiOutlineMore className='col-span-1 mr-4 text-2xl justify-self-end' onClick={() => {setMenuOpen(!isMenuOpen)}}/>
        </div>
        {isMenuOpen && <motion.div 
          initial={{opacity: 0, y: -25}}
          animate={{opacity: 1, y: 0, transition: {ease: 'easeInOut', duration: 0.5}}}
          exit={{opacity: 0,y: -25, transition: {ease: 'easeInOut', duration: 1}}}
          className='grid grid-flow-row grid-cols-3 p-2 divide-x bg-gray-50 col-span-full'>
            <div className='grid col-span-2 gap-1 bg-green-100'>
              <p className='col-span-1 text-base break-all'>{data.email}</p>
              <p className='col-span-1 text-base break-all'>{data.subscription ? <span>Subscribed</span> : <span>Free user</span>}</p>
              <p className='col-span-1 font-mono text-sm break-all'>{createdAt}</p>
            </div>
            <div className='grid col-span-1 p-2 bg-blue-100'>
              more feature
            </div>
          </motion.div>}
      </motion.div>
    }
  </div>
  )
}

export default DashboardUsers