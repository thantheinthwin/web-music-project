import React from 'react'
import { motion } from 'framer-motion'
import { Img1, Img2, Img3, Img4, Img5 } from '../assets/img';

import LandingPageHeader from './landingPageHeader'
import Marquee from './Marquee';

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
    }
  };
  
  return (
    <div className='items-center w-full'>
      <LandingPageHeader/>
      <div className='relative'>
        <Marquee title={"Hello"} />
        <motion.div className='z-0 h-screen'
        variants={container}
        initial='hidden'
        animate='show'
        exit='exit'>
          <motion.img src={Img1} alt="Img1" className='absolute hidden w-1/5 top-20 left-24 lg:flex' variants={item}/>
          <motion.img src={Img2} alt="Img2" className='absolute hidden w-1/5 bottom-20 left-20 lg:flex' variants={item}/>
          <motion.img src={Img3} alt='Img3' className='absolute hidden w-1/5 top-24 right-20 lg:flex' variants={item}/>
          <motion.img src={Img4} alt="Img4" className='absolute hidden w-1/5 right-24 bottom-16 lg:flex' variants={item}/>
          <motion.img src={Img5} alt="Img5" className='absolute top-0 bottom-0 left-0 right-0 w-2/5 m-auto' variants={itemMain}/>
        </motion.div>
        
      </div>
    </div>
  )
}


export default landingPage