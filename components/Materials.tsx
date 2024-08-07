'use client';
import { useLocale } from '@/lang/LocaleContext'
import { CldImage } from 'next-cloudinary'
import React from 'react'

const Materials = () => {
    const { DATA } = useLocale();
  return (
    <section className='mb-32 sm:mb-52 xl:mb-20 max-container padding-container'>
        <div className="flex relative justify-center justify-left mb-4 mt-6 " >
        <CldImage src='https://res.cloudinary.com/dvbvaj9hu/image/upload/v1234/INORG/wspolpraca/zt2pcmk3dhq65kgjszyk.jpg' width={1900} height={1450} alt='branches' className='object-cover max-h-[450px]  w-full rounded' />
            <h1 className='font-bold text-sm sm:text-xl md:text-4xl lg:text-5xl absolute text-blue-80 tracking-widest' style={{ top: '60%', left: '8%' }}>{DATA?.MATERIALS1} <br/> {DATA?.MATERIALS2}</h1>
        </div>
        <div className='flex md:px-16'>
            <ul className='list-disc space-y-3'>
            {DATA?.LINKS.map((link, index) => (
                <li key={index} className='ml-20 font-medium text-sm md:text-lg'>{link.title} <a className='underline text-blue-600 font-light hover:text-blue-800' href={link.href}>{link.href}</a></li>
            ))}
            </ul>
        </div>
    </section>
  )
}

export default Materials