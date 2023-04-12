import React from 'react'
import { motion } from 'framer-motion'

const Banner = ({title}) => {   
    
  return (
    <div className='absolute z-10 flex justify-center w-full h-full top-1/4 lg:top-auto lg:items-center'>
        <AnimateLetters title={title} />
    </div>
  )
}

const AnimateLetters = ({title, disabled}) => {
    // variants
    const banner = {
        show: {
            transition: {
                delayChildren: 2.5,
                staggerChildren: 0.2,
            },
        },
    };

    const letterAni = {
        hidden: {
            opacity: 0,
        },
        show: {
            opacity: 1,
            transition: {
                duration: 1,
            },
        },
    };
    return (
        <motion.span 
        variants={disabled ? null: banner} 
        initial='hidden'
        animate='show'>
            {
                [...title].map((letter) => (
                    <motion.span variants={disabled ? null : letterAni} className='text-4xl font-bold lg:text-8xl'>
                        {letter}
                    </motion.span>
                ))
            }
        </motion.span>
    )
};

export default Banner