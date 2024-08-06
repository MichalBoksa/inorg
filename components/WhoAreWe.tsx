"use client";
import { specsAboutus } from '@/constants'
import { CldImage } from 'next-cloudinary'
import React from 'react'
import { useLocale } from '@/lang/LocaleContext';

const WhoAreWe = () => {
  const { DATA } = useLocale();
  return (
    <section className='mb-4 px-4 md:padding-container'>
      <div className="flex justify-start mb-10 mt-6">
        <h1 className='text-blue-800 font-semibold text-4xl md:text-5xl tracking-widest'>
          {DATA?.WHO_ARE_WE}
        </h1>
      </div>

      <div className='flex flex-col lg:flex-row w-full lg:min-h-[300px] gap-8'>
        <div className='flex flex-col lg:w-[60%]'>
          <div className='text-blue-800 flex items-center justify-center'>
            <p className='text-left font-bold text-base md:text-2xl'>
              {DATA?.WHO_ARE_WE_HISTORY}
            </p>
          </div>
          <div className='text-blue-800 flex p-2 md:p-8'>
            <p className='text-justify font-semibold text-xs md:text-lg'>
              {DATA?.WHO_ARE_WE_HISTORY_DESC}
            </p>
          </div>
        </div>
        <div className='hidden lg:flex lg:w-[40%] max-h-[600px]'>
          <CldImage 
            src="https://res.cloudinary.com/dvbvaj9hu/image/upload/v1234/INORG/whoarewe/lsxrqugplzr5s9dd8gt1.jpg" 
            alt="whoarewe" 
            height={400} 
            width={600} 
            className='object-fill w-full'
          />
        </div>
      </div>

      <div className='flex flex-col lg:flex-row w-full lg:max-h-[700px] gap-8 mt-8'>
        <div className='flex lg:w-[60%] max-h-[800px]'>
          <CldImage 
            src='https://res.cloudinary.com/dvbvaj9hu/image/upload/v1234/INORG/onas/rtikfuldxyseft392kqk.jpg' 
            width={800} 
            height={800} 
            alt='joinUs' 
            className='w-full object-cover'
          />
        </div>
        <div className='bg-sky-400 text-white flex flex-col lg:w-[40%] py-2 px-4'>
          <div className='flex flex-col'>
            <div className="flex justify-center mb-8 mt-2 xl:px-8 2xl:px-16s text-center">
              <p className='text-center font-bold text-base md:text-2xl'>
                {DATA?.DYNAMIC_SUR}
              </p>
            </div>
            <div className='flex px-8 mb-4 md:mb-16'>
              <p className='text-justify text-xs md:text-lg'>
                {DATA?.DYNAMIC_SUR_DESC}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col lg:flex-row w-full lg:min-h-[300px] gap-8 mt-8'>
        <div className='flex flex-col lg:w-[60%] items-center justify-center p-8'>
          <div className='text-blue-800 flex mb-8'>
            <p className='text-center font-bold text-base md:text-2xl'>
              {DATA?.EXPERTS}
            </p>
          </div>
          <div className='text-blue-800 flex md:px-12'>
            <p className='text-justify font-semibold text-xs md:text-lg'>
              {DATA?.EXPERTS_DESC}
            </p>
          </div>
        </div>
        <div className='flex lg:w-[40%] max-h-[800px]'>
          <CldImage 
            src='https://res.cloudinary.com/dvbvaj9hu/image/upload/v1234/INORG/whoarewe/xjcughrdiycwtbalidwh.jpg' 
            width={800} 
            height={800} 
            alt='joinUs' 
            className='w-full object-cover'
          />
        </div>
      </div>

      <div className='flex flex-col lg:flex-row w-full gap-8 mt-8'>
        <div className='bg-sky-400 text-white flex flex-col lg:w-[60%] p-5'>
          <div className='flex flex-col'>
            <div className="flex justify-center mb-8  lg:px-16 text-center">
              <p className='text-center font-bold text-base md:text-2xl'>
                {DATA?.REALIZED_PROJECTS}
              </p>
            </div>
            <div className='flex flex-col px-8'>
              <p className='text-justify text-xs md:text-lg mb-4 md:mb-10'>
                {DATA?.REALIZED_PROJECTS_DESC}
              </p>
              <div className='flex flex-col text-left md:text-justify'>
                <ul className='grid gap-4'>
                  {DATA?.SPEC_ABOUT_US.map((spec) => (
                    <li key={spec} className='text-white text-xs md:text-lg'>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col lg:w-[40%] items-center mb-8 mt-8 px-3 md:px-10'>
          <p className='text-blue-800 text-center font-bold text-base md:text-2xl mb-10'>
            {DATA?.RELATIONS}
          </p>
          <p className='text-blue-800 text-justify font-semibold text-xs md:text-lg'>
            {DATA?.RELATIONS_DESC}
          </p>
        </div>
      </div>
    </section>
  )
}

export default WhoAreWe;
