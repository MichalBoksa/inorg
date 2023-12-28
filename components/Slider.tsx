'use client';
import React from 'react';
import { ArrowLeftIcon,ArrowRightIcon} from '@heroicons/react/24/solid';
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
    arrows: true
  };

  return (
    <div className='w-full h-screen'>
      <Zoom {...zoomOutProperties}>
        { images.map((each, index) =>
          <div className='flex justify-center md:items-center items-start w-screen- h-screen relative'>
            <Image className='w-screen h-screen' src={each} key={index} width={1000} height={600} alt='slider' />
            </div>
            
       )}
      </Zoom>
    </div>
  )
}

export default Slider