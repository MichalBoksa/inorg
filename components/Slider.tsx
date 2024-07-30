'use client';
import React from 'react';
import { ArrowLeftIcon,ArrowRightIcon} from '@heroicons/react/24/solid';
import { SLIDER_DESCRIPTIONS } from "@/constants"
import {Zoom} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { useLocale } from '@/lang/LocaleContext';
import { CldImage } from 'next-cloudinary';


const Slider = () => {
  const { DATA } = useLocale();
  const images = [
    "https://res.cloudinary.com/dvbvaj9hu/image/upload/v1234/INORG/slider/mdnlky61hewwzlxqikbm.jpg",
    "https://res.cloudinary.com/dvbvaj9hu/image/upload/v1234/INORG/slider/lep9bcf8ipk7hbytbv8s.jpg",
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
          <div key={index} className='flex justify-center md:items-center items-start w-screen h-screen relative mx-auto z-5'>
            <CldImage className='w-screen h-screen object-cover ' src={each}  width={1900} height={1200} alt='slider'/>
            <h1 className='absolute text-left text-white text-3xl md:text-4xl  2xl:text-5xl mr-10 top-1/2 left-1/2 2xl:left-[45%] 2xl:right-[15%] 3xl:left-[35%] 3xl:right-[25%]'>
              {DATA?.SLIDER_DESC}
            </h1>
            </div>
            
       )}
      </Zoom>
    </section>
  )
}

export default Slider