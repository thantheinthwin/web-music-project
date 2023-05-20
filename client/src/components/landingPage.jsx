import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { HeroImg1, HeroImg2, HeroImg3, HeroImg4, ProcessImg1, ProcessImg2, ProcessImg3, ProcessImg4 } from '../assets/img'

import { AiOutlineArrowRight } from 'react-icons/ai'

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
      {/* Hero Section */}
      <div className="relative grid items-center w-11/12 grid-cols-10 gap-4 p-4 m-auto lg:w-3/4">
        <div className="flex flex-col gap-2 col-span-full lg:col-span-7">
          <p className="text-5xl cursor-default font-secondary lg:text-7xl">
            Find And Listen To Your Favourite{" "}
            <span className="relative inline-block transition-all duration-500 ease-in-out before:absolute before:inset-x-0 before:inset-y-3 before:block before:-skew-y-3 before:bg-secondary hover:before:bg-neutral-800">
              <span className="relative inline-block">Artist</span>
            </span>{" "}
            Here
          </p>
          <p className="font-light md:w-2/3 lg:text-base">
            Unleash the power of music with MeloStream, your one-stop
            destination for all things music.
          </p>
          <NavLink to={"/login"}>
            <button className="flex items-center gap-1 p-2 text-black transition-all duration-200 ease-in-out rounded-full bg-primary hover:bg-neutral-600 hover:text-white">
              Start Listening <AiOutlineArrowRight />
            </button>
          </NavLink>
        </div>
        <div className="grid grid-cols-2 gap-4 col-span-full lg:col-span-3">
          <div className="grid gap-4">
            <div>
              <img
                src={HeroImg1}
                alt=""
                className="object-cover w-full transition-all duration-500 ease-in-out rounded-full h-60 filter hover:grayscale lg:h-96"
              />
            </div>
            <div>
              <img
                src={HeroImg2}
                alt=""
                className="w-full h-auto transition-all duration-500 ease-in-out rounded-full rounded-br-none filter hover:grayscale"
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                src={HeroImg3}
                alt=""
                className="w-full h-auto transition-all duration-500 ease-in-out rounded-full rounded-tr-none filter hover:grayscale"
              />
            </div>
            <div>
              <img
                src={HeroImg4}
                alt=""
                className="object-cover w-full transition-all duration-500 ease-in-out rounded-full h-60 filter hover:grayscale lg:h-96"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div id='process' className="relative grid items-center w-11/12 grid-cols-10 gap-4 p-4 m-auto lg:gap-12 lg:w-3/4">
        <div className="flex flex-col gap-2 col-span-full lg:col-span-6">
          <h2 className="text-lg text-primary">Our Process</h2>
          <h1 className="text-3xl font-bold">Bring Your Music to the World</h1>
          <p className="font-light">
            Share your tracks and mixes with global audience of music
            enthusiasts. Whether you're a budding artist, a seasoned producer,
            or a passionate creator,{" "}
            <span className="text-lg font-bold">MeloStream</span> provides a
            platform to showcase your talent and connect with vibrant community
            of listeners.
          </p>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
            <div className='grid col-span-1 gap-2 p-6 rounded-md bg-secondary'>
              <h1 className='text-2xl font-bold text-neutral-600'>01</h1>
              <h1 className='text-xl'>Sign Up</h1>
              <p className='text-sm font-light'>Create an account for our website.</p>
            </div>
            <div className='grid col-span-1 gap-2 p-6 rounded-md bg-neutral-900'>
              <h1 className='text-2xl font-bold text-neutral-600'>02</h1>
              <h1 className='text-xl'>Record Your Tracks</h1>
              <p className='text-sm font-light'>Record your song using any recording software you prefer and export it as a mp3 file.</p>
            </div>
            <div className='grid col-span-1 gap-2 p-6 rounded-md bg-neutral-900'>
              <h1 className='text-2xl font-bold text-neutral-600'>03</h1>
              <h1 className='text-xl'>Upload Your Songs</h1>
              <p className='text-sm font-light'>Once you've created an artist account, you can upload your creations onto our website.</p>
            </div>
            <div className='grid col-span-1 gap-2 p-6 rounded-md bg-neutral-900'>
              <h1 className='text-2xl font-bold text-neutral-600'>04</h1>
              <h1 className='text-xl'>Always Consistent</h1>
              <p className='text-sm font-light'>Make sure to stay active, keep making more and more songs, getting better day by day.</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 col-span-full lg:col-span-4">
          <div className="grid gap-4">
            <div>
              <img
                src={ProcessImg1}
                alt=""
                className="h-auto max-w-full transition-all duration-500 ease-in-out rounded-full rounded-tl-none filter hover:grayscale"
              />
            </div>
            <div>
              <img
                src={ProcessImg2}
                alt=""
                className="h-auto max-w-full transition-all duration-500 ease-in-out rounded-lg filter hover:grayscale"
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                src={ProcessImg3}
                alt=""
                className="h-auto max-w-full transition-all duration-500 ease-in-out rounded-lg filter hover:grayscale"
              />
            </div>
            <div>
              <img
                src={ProcessImg4}
                alt=""
                className="h-auto max-w-full transition-all duration-500 ease-in-out rounded-full rounded-bl-none filter hover:grayscale"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default landingPage