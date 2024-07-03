'use client';
import { useLocale } from '@/lang/LocaleContext'
import { CldImage } from 'next-cloudinary'
import React from 'react'

const Materials = () => {
    const { DATA } = useLocale();
  return (
    <section className='mb-4 '>
        <div className="flex relative justify-center justify-left mb-4 mt-6  max-container padding-container" >
        <CldImage src='https://res.cloudinary.com/dvbvaj9hu/image/upload/v1234/INORG/wspolpraca/zt2pcmk3dhq65kgjszyk.jpg' width={1900} height={1450} alt='branches' className='object-cover max-h-[450px]  w-full rounded' />
            <h1 className='font-bold text-3xl xl:text-5xl 2xl:text-5xl absolute text-blue-80 tracking-widest' style={{ top: '65%', left: '8%' }}>{DATA?.MATERIALS1} <br/> {DATA?.MATERIALS2}</h1>
        </div>
        <div className='max-container padding-container '>
            <ul className='list-disc'>
            {DATA?.LINKS.map((link, index) => (
                <li key={index} className='ml-20 font-medium text-lg'>{link.title} <a className='underline text-blue-600 font-light hover:text-blue-800' href={link.href}>{link.href}</a></li>
            ))}
            </ul>
        </div>
    </section>
  )
}

export default Materials