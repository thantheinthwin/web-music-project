import React from 'react'
import { LandingPageHeader } from '.'
import { motion } from 'framer-motion'
import { Img1, Img2, Img3, Img4, Img5, Img6 } from '../assets/img';

const item = {
  hidden: {
    opacity: 0,
    y: 200
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [.6, .01, -.05, 0.95],
      duration: 1.6
    }
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: 'easeInOut',
      duration: .8
    },
  },
};

const landingPage = () => {
  return (
    <div className='relative items-center w-full'>
      <LandingPageHeader/>
      <div className='h-screen '>
        <motion.img 
        initial={{
          opacity: 0,
          y: 200
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        exit={{opacity: 0}}
        transition={{
          duration: 2
        }} 
        src={Img1} alt="Img1" className='absolute w-96 top-32 left-20'/>
        <motion.img 
        initial={{
          opacity: 0,
          y: 200
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        exit={{opacity: 0}}
        transition={{
          duration: 2
        }} 
        src={Img2} alt="Img2" className='absolute w-96 top-24 right-24'/>
        <motion.img 
        initial={{
          opacity: 0,
          y: 200
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        exit={{opacity: 0}}
        transition={{
          duration: 2
        }} 
        src={Img3} alt='Img3' className='absolute w-96 bottom-11 left-60'/>
        <motion.img 
        initial={{
          opacity: 0,
          y: 200
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        exit={{opacity: 0}}
        transition={{
          duration: 2
        }} 
        src={Img4} alt="Img4" className='absolute w-96 bottom-16 right-48'/>
        <motion.img 
        initial={{
          opacity: 0,
          y: 200
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        exit={{opacity: 0}}
        transition={{
          duration: 2
        }} 
        src={Img5} alt="Img5" className='absolute w-[40rem] left-[40rem] top-60 '/>
      </div>
    </div>
  )
}


export default landingPage