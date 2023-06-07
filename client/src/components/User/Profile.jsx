import React from 'react'
import { useStateValue } from '../../context/StateProvider'
import { AnimatePresence, motion } from 'framer-motion';

import { MdKeyboardArrowRight } from 'react-icons/md';
import { IoCloseOutline } from 'react-icons/io5';

import { app } from '../../config/firebase.config';
import { getAuth } from '@firebase/auth';

const Profile = (props) => {
    const {open, handleClose} = props;
    const [{user}, dispatch] = useStateValue();

    const username = user?.user?.name;
    const email = user?.user?.email;
    const subscription = user?.user?.subscription;
    const role = user?.user?.role;
    const imageURL = user?.user?.imageURL;
    const phnumber = user?.user?.phnumber;
    const email_verified = user?.user?.email_verified;

    const currentUser = getAuth(app).currentUser;
    
    console.log(currentUser);

    return (
      <AnimatePresence>
        {open && <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{type: 'spring', duration: 0.5}} className='absolute w-screen h-screen bg-black bg-opacity-50'>
          <motion.div initial={{opacity: 0, scale: 0.5}} animate={{opacity: 1, scale: 1}} exit={{opacity: 0, scale: 0.5}} transition={{type: 'spring', duration: 0.5}} className='fixed rounded-md top-0 bottom-0 left-0 right-0 grid gap-4 p-5 m-auto overflow-x-hidden overflow-y-auto bg-neutral-900 w-[calc(100%-1rem)] md:w-fit h-fit'>
            <div className='flex items-center justify-between'>
              <p className='text-3xl font-bold text-accent'>Profile</p>
              <i className='text-xl text-white rounded-full hover:bg-neutral-700' onClick={()=>{handleClose()}}><IoCloseOutline/></i>
            </div>
            <div className='grid gap-2'>
              <img src={imageURL} alt="profile pic" className='w-24 rounded-lg'/>
              <p className='text-sm font-light'>Username</p>
              <p>{username}</p>
              <p className='text-sm font-light'>Email</p>
              <p>{email}</p>
              <p className='text-sm font-light'>Role</p>
              <p className={`px-2 py-1 text-xs rounded-full w-fit ${role === "admin" ? "bg-red-500" : "bg-green-500"}`}>{role}</p>
              <p className='text-sm font-light'>Subscription</p>
              <p>{subscription ? "Subscribed" : "Free User"}</p>    
              <p className='text-sm font-light'>Phone number</p>
              <p className={`font-light ${phnumber !== "" ? "text-red-500": ""}`}>{phnumber !== "" ? "unavailable": phnumber}</p>    
              {email_verified ? <p>Email verified</p> : <p className='flex items-center gap-1'>Verify email <i className='text-lg'><MdKeyboardArrowRight/></i></p>} 
            </div>
            <div className='p-2 text-sm text-red-500 border border-red-500 rounded-md cursor-default select-none w-fit hover:bg-red-500 hover:text-white justify-self-end'>Reset password</div>
            <div className='p-2 text-sm text-red-500 border border-red-500 rounded-md cursor-default select-none w-fit hover:bg-red-500 hover:text-white justify-self-end'>Delete account</div>
          </motion.div>
        </motion.div>}
      </AnimatePresence> 
    )
}

export default Profile