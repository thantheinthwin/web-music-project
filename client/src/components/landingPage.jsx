import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { Img1, Img2, Img3, Img4, Img5 } from '../assets/img';

import LandingPageHeader from './landingPageHeader'

const landingPage = () => {
  const container = {
    show: {
      transition: {
        staggerChildren: 0.35,
      },
    },
  };
  
  const item = {
    hidden: {opacity: 0, y: 200 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeInOut",
        duration: 1.6,
      },
    },
    exit: {
      opacity: 0,
      y: -200,
      transition: {
        ease: "easeInOut",
        duration: 0.8,
      },
    },
  };
  
  const itemMain = {
    hidden: { opacity: 0, y: 200 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeInOut",
        duration: 1.6,
      },
    },
    exit: {
      opacity: 0,
    },
  };
  
  return (
    <div className="w-full text-white bg-black">
      <LandingPageHeader />
      <div className="relative grid w-3/4 grid-cols-10 m-auto">
        <div className="grid col-span-full lg:col-span-6 h-80">
          <p className="text-5xl cursor-default font-secondary lg:text-7xl">
            Find And Listen To Your Favourite 
            <span className="relative inline-block transition-all duration-500 ease-in-out before:block before:absolute before:inset-y-3 before:inset-x-0 before:-skew-y-3 before:bg-secondary hover:before:bg-neutral-800">
              <span className='relative inline-block'>Artist</span>
            </span>
            Here
          </p>
          <p></p>
        </div>
        <div className="col-span-full lg:col-span-4 h-80">Thumbnail</div>
      </div>
    </div>
  );
}


export default landingPage