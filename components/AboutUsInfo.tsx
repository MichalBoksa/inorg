'use client';
import React from 'react'
import Link from "next/link"
import { useLocale } from '@/lang/LocaleContext';
import { CldImage } from 'next-cloudinary';

const AboutUsInfo = () => {
  const { DATA } = useLocale();
  return (
   <section className='mb-4'>
    <div className="flex justify-left ml-20 mb-10 mt-6" >
         <h1 className='text-blue-80 font-semibold text-3xl lg:text-5xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl tracking-widest '>{DATA?.ABOUT_US}</h1>
    </div>

    <div className='flex w-full max-h-[350px] justify-center px-20' >
         <CldImage src='https://res.cloudinary.com/dvbvaj9hu/image/upload/v1234/INORG/onas/pc4o9x4t0tqudytu70me.jpg'width={1200} height={900} alt='about_us' className='w-full rounded object-cover' />
       </div>

       <div className='bg-gray-200 rounded-xl flex flex-wrap justify-center gap-20 xl:gap-24 2xl:gap-32 mt-8 mb-4 px-16 py-4 ml-20 mr-20 '>
        {DATA?.ABOUT_US_SECTIONS.map((section) => (
            <Link key={section.title} href={section.href} className=' bg-gray-100 h-60 "w-full sm:w-1/2 md:w-1/4 rounded relative mt-10 mb-10 sm:mt-5 sm:mb-5 '> 
                <h1 className='text-sky-40 text-left font-bold text-lg lg:text-xl 3xl:text-2xl mt-4 px-2'>{section.title}</h1> 
                <CldImage src={section.src} alt='who_are_we' className='h-40 w-60 rounded-md absolute mt-8 object-cover' width={300} height={200} style={{ top: '30%', left: '15%' }} />
            </Link>
          ))}  
        </div>
    </section>
  )
}

export default AboutUsInfo