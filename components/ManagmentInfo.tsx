"use client";
import React from 'react';
import { useLocale } from '@/lang/LocaleContext';
import { CldImage } from 'next-cloudinary';

const ManagmentInfo = () => {
  const { DATA } = useLocale();
  return (
    <section className='mb-4 max-container px-4'>
      <div className="flex flex-col items-center">
        <h1 className='text-blue-800 font-semibold text-3xl lg:text-5xl xl:text-4xl 2xl:text-5xl tracking-widest'>
          {DATA?.MANAGMENT}
        </h1>
        <div className='flex flex-col lg:flex-row items-center justify-center gap-10 text-2xl lg:text-4xl mt-8'>
          <div className='text-blue-800 flex flex-col justify-center items-center'>
            <h3>Edward Zając</h3>
            <p className='text-xl font-light'>{DATA?.BOSS}</p>
          </div>
          <div className='text-blue-800 flex flex-col justify-center items-center'>
            <h3>Adam Kulczycki</h3>
            <p className='text-xl font-light'>{DATA?.VICE_BOSS}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-16">
        <div>
          <h1 className='text-blue-800 font-bold text-xl lg:text-3xl'>
            {DATA?.COUNCIL_MAN}
          </h1>
        </div>
        <div className='flex flex-col lg:flex-row mt-8 p-4 gap-4'>
          <CldImage 
            src='https://res.cloudinary.com/dvbvaj9hu/image/upload/v1234/INORG/onas/ktf3ddlvx7fcs4sajtma.jpg' 
            alt='henryk_promny' 
            width={500} 
            height={400} 
            className='h-72 w-full md:w-64 rounded object-cover'
          />
          <div className='flex flex-col w-full bg-sky-400 p-6'>
            <h1 className='text-blue-800 font-bold text-3xl md:text-3xl'>
              {DATA?.PROMNY}
            </h1>
            <h3 className='text-blue-800 text-2xl md:text-xl'>
              {DATA?.COUNCIL_HEAD}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ManagmentInfo;
