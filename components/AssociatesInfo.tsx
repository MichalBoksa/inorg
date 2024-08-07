"use client";
import React from 'react';
import { useLocale } from '@/lang/LocaleContext';
import { CldImage } from 'next-cloudinary';

const GoalsInfo = () => {
  const { DATA } = useLocale();
  return (
    <section className='mb-4 padding-container'>
      <div className="flex justify-center mb-10 mt-6">
        <h1 className='text-blue-800 font-semibold text-4xl md:text-5xl tracking-widest'>
          {DATA?.OUR_MISSION}
        </h1>
      </div>

      <div className='flex flex-col lg:flex-row w-full lg:min-h-[300px] gap-8'>
        <div className='flex flex-col lg:w-[60%]'>
          <div className='text-blue-800 flex md:px-10 mt-10'>
            <p className='text-center font-bold text-base lg:text-2xl'>
              {DATA?.INORG_MISSION}
            </p>
          </div>
          <div className="flex flex-col mb-2 mt-8 ml-6 text-blue-800 font-semibold text-xl md:text-base break-after-column text-start md:px-8">
            <ul>
              {DATA?.INORG_MISSION_LIST.map((mission, index) => (
                <li key={index} className='mb-4'>{mission}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className='flex lg:w-[40%] max-h-[600px]'>
          <CldImage 
            src='https://res.cloudinary.com/dvbvaj9hu/image/upload/v1234/INORG/onas/qdpzljbuq4fjpq2vj8s5.jpg' 
            height={600} 
            width={900} 
            alt='joinUs' 
            className='w-full object-cover'
          />
        </div>
      </div>

      <div className='flex flex-col lg:flex-row w-full lg:min-h-[300px] gap-8 mt-8'>
        <div className='flex lg:w-[60%] max-h-[600px]'>
          <CldImage 
            src='https://res.cloudinary.com/dvbvaj9hu/image/upload/v1234/INORG/onas/b1jyd2l2mtl66ltcszt6.jpg' 
            height={600} 
            width={900} 
            alt='joinUs' 
            className='w-full'
          />
        </div>
        <div className='bg-sky-400 text-white flex items-center lg:w-[40%] p-8'>
          <div className="flex justify-center w-full">
            <p className='font-bold text-base lg:text-5xl'>
              {DATA?.WHY_US}
            </p>
          </div>
        </div>
      </div>

      <div className='flex flex-col lg:flex-row w-full gap-8 mt-8'>
        <div className='bg-sky-400 text-white flex flex-col md:px-8 lg:w-[60%] p-8'>
          <div className='flex flex-col'>
            <div className="flex flex-col justify-center mb-4 mt-8 text-center">
              <p className='font-bold text-base lg:text-2xl'>
                {DATA?.OUR_SOURCES}
              </p>
              <p className='text-base lg:text-xl mt-8'>
                {DATA?.POSITION}
              </p>
            </div>
            <div className='flex flex-col px-8'>
              <div className="flex flex-col justify-center mb-2 mt-8 text-white text-xl lg:text-base break-after-column text-justify">
                <ul>
                  {DATA?.POSITION_LIST.map((position, index) => (
                    <li key={index} className='mb-4'>{position}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col lg:w-[40%] mb-6 mt-8 md:px-8'>
          <p className='text-blue-800 text-justify font-bold text-base lg:text-2xl mb-10'>
            {DATA?.OUR_FEATURES}
          </p>
          <div className="flex flex-col mb-2 mt-8 text-blue-800 font-semibold text-xl lg:text-base break-after-column text-start px-4">
            <ul>
              {DATA?.OUR_FEATURES_LIST.map((feature, index) => (
                <li key={index} className='mb-4'>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GoalsInfo;
