'use client';
import React from 'react'
import { useLocale } from '@/lang/LocaleContext';
import { CldImage } from 'next-cloudinary';
import Link from 'next/link';


const IndonesiaBusinness = () => {
    const { DATA } = useLocale();
  return (
    <section className='mt-4 max-container padding-container'>
        <div className='flex flex-col justify-center items-center justif-center'>
            <h1 className='text-blue-80 text-center font-bold text-3xl lg:text-5xl'>{DATA?.INDONESIA_BUSINESS}</h1>
            <div className='flex w-full mt-6 items-center justif-center'>
              <Link href="/flyer.pdf" legacyBehavior className='flex items-center justif-center w-full'>
                  <a target="_blank" rel="noopener noreferrer"  className='flex items-center justif-center w-full'>
                      <CldImage  src='https://res.cloudinary.com/dvbvaj9hu/image/upload/v1234/INORG/x36zi8xmit3g6sosfiax.svg' width={1200} height={800} alt="indonesia" className='object-fill w-full max-h-[650px]'/>                
                  </a>
              </Link>
            </div>
        </div>
    </section>
  )
}

export default IndonesiaBusinness