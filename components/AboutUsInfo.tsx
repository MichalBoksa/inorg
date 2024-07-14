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

       <div className='bg-gray-200 rounded-xl flex flex-wrap justify-center space-x-24 mt-8 mb-4 px-16 ml-20 mr-20 '>

        <Link href="aboutUs/whoAreWe" className='w-1/5 bg-gray-100 h-60 rounded relative mt-10 '> 
             <h1 className='text-sky-40 text-left font-bold text-2xl lg:text-xl mt-4 px-6'>{DATA?.WHO_ARE_WE}</h1> 
             <CldImage src='https://res.cloudinary.com/dvbvaj9hu/image/upload/v1234/INORG/onas/iy2nlys7dqncvqoh1zqw.jpg' alt='who_are_we' className='h-40 w-60 rounded-md absolute mt-8 object-cover' width={300} height={200} style={{ top: '30%', left: '15%' }} />
        </Link>

            <Link href="aboutUs/code" className="w-1/5 bg-gray-100 h-60 rounded relative mt-10">
            <h1 className='text-sky-40 text-left font-bold text-2xl lg:text-xl mt-4 px-6'>{DATA?.CODE}</h1> 
            <CldImage src='https://res.cloudinary.com/dvbvaj9hu/image/upload/v1234/INORG/onas/dn3vhnwvyzto1lb8zdj2.jpg' alt='codex' className='h-40 w-60 rounded-md absolute mt-8 object-cover' width={300} height={200} style={{ top: '30%', left: '15%' }} />
            </Link>

            <Link href="aboutUs/managment" className="w-1/5 bg-gray-100 h-60 rounded relative mt-10">
                <h1 className='text-sky-40 text-left font-bold text-2xl lg:text-xl mt-4 px-6'>{DATA?.COUNCIL}</h1> 
                <CldImage src='https://res.cloudinary.com/dvbvaj9hu/image/upload/v1234/INORG/onas/shpbkf3bwm67kcvtbikb.jpg' alt='managment' className='h-40 w-60 rounded-md absolute mt-8 object-cover' width={300} height={200} style={{ top: '30%', left: '15%' }} />
            </Link>

            <Link  href="aboutUs/associates" className="w-1/5 bg-gray-100 h-60 mt-16 rounded relative mb-10">
            <h1 className='text-sky-40 text-left font-bold text-3xl lg:text-xl mt-4 px-6'>{DATA?.ASSOCIATES}</h1> 
            <CldImage src='https://res.cloudinary.com/dvbvaj9hu/image/upload/v1234/INORG/onas/puyvgmf43jkhwyivyhhr.jpg'width={300} height={200} alt='cooperation' className='h-40 w-60 rounded-md absolute mt-8 object-cover'  style={{ top: '30%', left: '15%' }} />
            </Link>

            <Link  href="aboutUs/goals" className="w-1/5 bg-gray-100 h-60 mt-16 rounded relative mb-10">
            <h1 className='text-sky-40 text-left font-bold text-3xl lg:text-xl mt-4 px-6'>{DATA?.MISSION}</h1> 
            <CldImage src='https://res.cloudinary.com/dvbvaj9hu/image/upload/v1234/INORG/onas/dqxpu54fffipje4dppus.jpg' alt='joinUs' className='h-40 w-60 rounded-md absolute mt-8 object-cover' width={300} height={200} style={{ top: '30%', left: '15%' }} />
            </Link>

        </div>
    </section>
  )
}

export default AboutUsInfo