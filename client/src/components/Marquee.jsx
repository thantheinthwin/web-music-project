import React from 'react'
import { motion } from 'framer-motion'

const Marquee = ({title}) => {   
    
  return (
    <div className='absolute z-10 flex items-center justify-center w-full h-full'>
        <AnimateLetters title={title} />
    </div>
  )
}

const AnimateLetters = ({title, disabled}) => {
    // variants
    const marquee = {
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
        variants={disabled ? null: marquee} 
        initial='hidden'
        animate='show'>
            {
                [...title].map((letter) => (
                    <motion.span variants={disabled ? null : letterAni} className='font-bold text-blue-900 text-8xl'>
                        {letter}
                    </motion.span>
                ))
            }
        </motion.span>
    )
};

export default Marquee