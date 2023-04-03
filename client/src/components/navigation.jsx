import React from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { BiCrown, BiUser } from 'react-icons/bi'

const navigation = ({user}) => {  
  const username = user?.user?.name;
  const subscription = user?.user?.subscription;

  return (
    <div className='flex justify-between w-full p-2 text-blue-900 shadow-md'>
        <div className='flex gap-1'>
            <div className='text-2xl h-fit hover:bg-sky-blue-75 hover:cursor-pointer'><AiOutlineLeft/></div>
            <div className='text-2xl h-fit hover:bg-sky-blue-75 hover:cursor-pointer'><AiOutlineRight/></div>
            <div>
                <input placeholder='Search' className='pl-2'/>
            </div>
        </div>
        <div className='relative flex items-center gap-2 ml-auto cursor-pointer'>
          <img src={user?.user?.imageURL} alt="profile pic" referrerPolicy='no-referrer' className='w-12 min-w-[44px] rounded-full object-cover shadow-lg'/>
          <div className='flex flex-col gap-1'>
            <p>{username}</p>
            <div className='flex flex-row-reverse text-xl'>
              {(subscription) ? <BiCrown/>: <BiUser/>}
            </div>     
          </div>     
        </div>
    </div>
  )
}

export default navigation