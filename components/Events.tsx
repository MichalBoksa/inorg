'use client';  
import React from 'react'
import { useLocale } from '@/lang/LocaleContext'
import { CldImage } from 'next-cloudinary';
import Link from 'next/link';

const Events = () => {
    const { DATA } = useLocale();
  return (
    <section className='max-container padding-container'>
        <div className="flex justify-center ml-20 mt-6" >
            <h1 className='text-blue-80 font-semibold text-3xl lg:text-5xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl tracking-widest'>{DATA?.EVENTS}</h1>
        </div>
       
        <div className='flex flex-wrap bg-gray-200 rounded-xl mt-8 mb-4 xl:gap-24 2xl:gap-32 justify-center items-center'>
            {DATA?.EVENTS_LIST.map((event, index) => event.href !== '' ? (
                <div className='flex mb-4 justify-center items-center py-8 '>
                    <div key={index} className='w-80 h-72 rounded items-center justify-center  hover:bg-gray-100 hover:shadow-xl '> 
                        <h1 className='text-blue-80 text-center font-semibold text-3xl lg:text-xl px-6 mt-2'>{event.title}</h1> 
                        <Link href={event.href}> 
                            <div className='flex justify-center items-center '>
                                <CldImage src={event.src} alt='funds'width={300} height={200} className='rounded-md min-h-[200px] max-h-[200px] object-fill justify-center mt-2'/>
                             </div>  
                        </Link>        
                    </div>
                </div>
            )
            :(
                <div className='flex mb-4 justify-center items-center py-8'>
                    <div key={index} className='w-80 h-72 rounded items-center justify-center  hover:bg-gray-100 hover:shadow-xl '> 
                        <h1 className='text-blue-80 text-center font-semibold text-3xl lg:text-xl px-6 mt-2'>{event.title}</h1> 
                             <Link href="/flyer.pdf" legacyBehavior className='flex items-center justif-center w-full'>
                                <a target="_blank" rel="noopener noreferrer"  className='flex items-center justif-center w-full'>
                                    <CldImage  src={event.src} width={300} height={200} alt="indonesia" className='rounded-md min-h-[200px] max-h-[200px]  object-fill justify-center mt-2 ml-2'/>                
                                </a>
                            </Link>
                    </div>
                </div>
            )
        )}
        </div>
    </section>
  )
}

export default Events