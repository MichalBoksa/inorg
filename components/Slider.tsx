'use client';
import React from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { useLocale } from '@/lang/LocaleContext';
import { CldImage } from 'next-cloudinary';

const Slider = () => {
  const { DATA } = useLocale();
  const images = [
    {
      img: "https://res.cloudinary.com/dvbvaj9hu/image/upload/v1234/INORG/slider/mdnlky61hewwzlxqikbm.jpg",
      desc: DATA?.SLIDER_DESC1,
    },
    {
      img: "https://res.cloudinary.com/dvbvaj9hu/image/upload/v1234/INORG/slider/usvoqyoep4jovxtahbrn.jpg",
      desc: DATA?.SLIDER_DESC2,
    },
    {
      img: "https://res.cloudinary.com/dvbvaj9hu/image/upload/v1234/INORG/wspolpraca/ooej0xmqzmqm9duasbcn.jpg",
      desc: DATA?.SLIDER_DESC3,
    },
  ];

  const zoomOutProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    scale: 1,
    
    prevArrow: (
      <div className='ml-4 sm:ml-10 top-24 sm:top-40 md:top-60 lg:top-72'>
        <ArrowLeftIcon className='h-8 w-8 sm:h-10 sm:w-10 p-2 bg-gray-300 rounded-full text-black cursor-pointer' />
      </div>
    ),
    nextArrow: (
      <div className='mr-4 sm:mr-10 top-24 sm:top-40 md:top-60 lg:top-72'>
        <ArrowRightIcon className='h-8 w-8 sm:h-10 sm:w-10 p-2 bg-gray-300 rounded-full text-black cursor-pointer' />
      </div>
    )
  };

  return (
    <section className='relative'>
      <Zoom {...zoomOutProperties}>
        {images.map((slide, index) => (
          <div key={index} className='relative w-full max-h-[800px] flex justify-center items-center bg-black bg-opacity-30 '>
            <CldImage
              className='w-full h-full object-fill '
              src={slide.img}
              width={1600}
              height={800}
              alt='slider'
            />
            <div className='absolute inset-0 flex justify-center items-center top-1/2 left-1/3 right-[10%] '>
              <h1 className='text-center font-semibold text-white tracking-wide drop-shadow-lg rounded text-xs sm:text-xl md:text-3xl xl:text-4xl bg-black bg-opacity-50 p-4'>
                {slide.desc}
              </h1>
            </div>
          </div>
        ))}
      </Zoom>
    </section>
  );
};

export default Slider;
