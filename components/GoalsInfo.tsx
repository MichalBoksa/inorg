'use client';
import React from 'react'
import { useLocale } from '@/lang/LocaleContext';
import { CldImage } from 'next-cloudinary';

const GoalsInfo = () => {
  const { DATA } = useLocale();
  return (
    <section className='mb-4 px-4 md:padding-container'>
      <div className="flex justify-start mb-10 mt-6">
        <h1 className='text-blue-800 font-semibold text-4xl md:text-5xl tracking-widest'>
          {DATA?.OUR_MISSION}
        </h1>
      </div>

      <div className='flex flex-col lg:flex-row w-full lg:min-h-[300px] gap-8'>
        <div className='flex flex-col lg:w-[60%]'>
          <div className='text-blue-800 flex items-center justify-center'>
            <p className='text-left font-bold text-base md:text-2xl'>
              {DATA?.INORG_MISSION}
            </p>
          </div>
          <div className='text-blue-800 flex p-2 md:p-8'>
            <ul className='text-justify font-semibold text-xs md:text-lg'>
              {DATA?.INORG_MISSION_LIST.map((mission) => (
                <li key={mission} className='mb-4'>{mission}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className='flex flex-col lg:flex-row w-full lg:max-h-[700px] gap-8 mt-8'>
        <div className='flex lg:w-[60%] max-h-[600px]'>
          <CldImage 
            src='https://res.cloudinary.com/dvbvaj9hu/image/upload/v1234/INORG/onas/b1jyd2l2mtl66ltcszt6.jpg' 
            height={600} 
            width={900} 
            alt='joinUs' 
            className='w-full object-cover'
          />
        </div>
        <div className='bg-sky-400 text-white flex w-full h-[200px] lg:h-auto items-center lg:w-[40%]'>
          <div className='flex px-3 md:px-8'>
            <p className='font-bold text-3xl md:text-5xl'>
              {DATA?.WHY_US}
            </p>
          </div>
        </div>
      </div>

      <div className='flex flex-col lg:flex-row w-full gap-8 mt-8'>
        <div className='bg-sky-400 text-white flex flex-col lg:w-[60%] p-5'>
          <div className='flex flex-col'>
            <div className="flex justify-center mb-8 lg:px-3 text-center">
              <p className='text-left font-bold lg:text-2xl'>
                {DATA?.OUR_SOURCES}
              </p>
              <p className='text-left md:text-xl lg:mt-16 px-6'>
                {DATA?.POSITION}
              </p>
            </div>
            <div className='flex flex-col px-8'>
              <ul className='text-white text-xs md:text-base break-after-column font-semibold'>
                {DATA?.POSITION_LIST.map((position) => (
                  <li key={position} className='mb-4'>{position}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className='lg:hidden flex lg:w-[40%] max-h-[500px]'>
          <CldImage 
            src='https://res.cloudinary.com/dvbvaj9hu/image/upload/v1234/INORG/onas/qdpzljbuq4fjpq2vj8s5.jpg' 
            height={600} 
            width={900} 
            alt='joinUs' 
            className='object-cover w-full'
          />
        </div>

        <div className='flex flex-col lg:w-[40%] mb-6 mt-8 px-3 md:px-5'>
          <p className='text-blue-800 text-center font-bold text-base md:text-2xl mb-10'>
            {DATA?.OUR_FEATURES}
          </p>
          <div className='flex flex-col mb-2 mt-4 text-blue-800 font-semibold text-xs md:text-base break-after-column text-start px-4'>
            <ul>
              {DATA?.OUR_FEATURES_LIST.map((feature) => (
                <li key={feature} className='mb-4'>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GoalsInfo;
