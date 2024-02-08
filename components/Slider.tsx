'use client';
import React from 'react';
import { ArrowLeftIcon,ArrowRightIcon} from '@heroicons/react/24/solid';
import { SLIDER_DESCRIPTIONS } from "@/constants"
import {Zoom} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Image from 'next/image';


const Slider = () => {
  const images = [
    "/nature1.jpg",
    "/nature2.jpg",
    "/nature3.jpg",
  ];
  const zoomOutProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    scale: 1,
    
    prevArrow:(
      <div className='ml-10 top-40 md:top-72'>
        <ArrowLeftIcon className='h-10 w-10 text-white cursor-pointer' />
        </div>
    ),

    nextArrow:(
      <div className='mr-10 top-40 md:top-72'>
        <ArrowRightIcon className='h-10 w-10 text-white cursor-pointer' />
        </div>
    )
  };

  return (

    <section className=' max-container relative'>

      {/* <div className='border-2 border-green-500 flex items-center max-container padding-container relative z-30 py-5'> */}
      <Zoom {...zoomOutProperties}>
        { images.map((each, index) =>
          <div key={index} className='flex justify-center md:items-center items-start w-screen- h-screen relative'>
            <Image className='w-screen h-screen' src={each}  width={1000} height={800} alt='slider' />
            <h1 className='absolute text-left text-white text-2xl md:text-4xl mr-10 ' style={{ top: '50%', left: '50%' }}>
              {SLIDER_DESCRIPTIONS}
            </h1>
            </div>
            
       )}
      </Zoom>
    </section>
  )
}

export default Slider