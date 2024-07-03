"use client";
import React from 'react'
import { useLocale } from '../lang/LocaleContext';
import { CldImage } from 'next-cloudinary';

const Repute = () => {
  const { DATA } = useLocale();
  return (
    <section className='mt-4'>
      <div className=' flex items-center max-container padding-container relative z-30'>
        <div className='flex flex-col justify-center items-start md:w-3/5'>
          <h1 className='text-3xl md:text-5xl font-bold text-blue-80 text-center lg:mb-8 mb-4 '>{DATA?.REPUTE}</h1>
          <p className='text-base text-left font-bold text-gray-500 py-5 px-8'>{DATA?.REPUTE_DESC}</p>
        </div>

        <div className='hidden md:flex justify-center items-center w-2/5 px-5 py-10 ' >
          <CldImage src='https://res.cloudinary.com/dvbvaj9hu/image/upload/v1234/INORG/slider/iyblm2pwfyny468yblwf.jpg' width={800} height={600} alt='repute' className='rounded-lg w-full ' />
        </div>

      </div>
    </section>
  )
}

export default Repute