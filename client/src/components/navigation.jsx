import { getAuth } from 'firebase/auth';
import React, { useState } from 'react'

import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { BiCrown, BiUser } from 'react-icons/bi'

import { NavLink, useNavigate } from 'react-router-dom';
import { app } from '../config/firebase.config';
import { motion } from 'framer-motion';

const Navigation = ({user}) => {  
  const username = user?.user?.name;
  const subscription = user?.user?.subscription;
  const email = user?.user?.email;

  const navigate = useNavigate();

  const [isMenu, setIsMenu] = useState(false);

  const logOut = () => {
    const firebaseAuth = getAuth(app);
    firebaseAuth.signOut().then(() => {
      window.localStorage.setItem("auth", "false");
    }).catch((e) => console.log(e));

    navigate('/login', {replace: true});
  }

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
          <div className='flex flex-col gap-1'>
            <p>{username}</p>
            <div className='flex flex-row-reverse text-xl'>
              {(subscription) ? <BiCrown/>: <BiUser/>}
            </div>     
          </div>     
          <img src={user?.user?.imageURL} alt="profile pic" onClick={()=>setIsMenu(!isMenu)} referrerPolicy='no-referrer' className='w-12 min-w-[44px] rounded-lg object-cover shadow-lg filter hover:contrast-75'/>
          {isMenu && (
            <motion.div 
            initial={{opacity : 0, y : -50}} 
            animate={{opacity : 1, y: 0}}
            exit={{opacity : 0, y: -50}}
            className="absolute right-0 z-10 w-auto bg-white divide-y divide-gray-100 rounded-md shadow-lg top-14 ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
              <div class="py-1" role="none">
                <p className='block px-4 py-2 text-sm text-gray-700'>Signed in as<br/><p className='font-bold'>{email}</p></p>
              </div>
              <div class="py-1" role="none">
                <NavLink to={"/"} className='block px-4 py-2 text-sm text-gray-700 transition-all duration-200 ease-in-out hover:bg-gray-100'>Profile</NavLink>
                <NavLink to={"/"} className='block px-4 py-2 text-sm text-gray-700 transition-all duration-200 ease-in-out hover:bg-gray-100'>Favourite</NavLink>
              </div>
              <div class="py-1" role="none">
                <button onClick={logOut} type="submit" className="block w-full px-4 py-2 text-sm text-left text-gray-700 transition-all duration-200 ease-in-out hover:bg-gray-100">Sign out</button>
              </div>
            </motion.div>
          )}
        </div>
    </div>
  )
}

export default Navigation