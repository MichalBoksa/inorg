'use client';
import React from 'react'
import { useLocale } from '@/lang/LocaleContext';
import { CldImage } from 'next-cloudinary';
const AssociatesInfo = () => {
  const { DATA } = useLocale();
  return (
    <section className='mb-4'>
    <div className="flex justify-left ml-20 mb-10 mt-6" >
     <h1 className='text-blue-80 font-semibold text-3xl lg:text-5xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl tracking-widest'>{DATA?.OUR_ASSOCIATES}</h1>
</div>

<div className='flex w-full max-h-[350px] justify-center px-20' >
     <CldImage src='https://res.cloudinary.com/dvbvaj9hu/image/upload/v1234/INORG/onas/ouaodegt4vucibedkrya.jpg' alt='associates' width={1200} height={600} className='object-cover w-full rounded' />
   </div>

   <div className='flex space-x-20 mt-8 mb-4 px-16 justify-center flex-grow'>

    <div className='bg-gray-200 w-1/2 flex flex-col ml-20 mt-4 rounded px-8 py-6'>
         <p className='text-blue-80 text-justify font-bold text-m lg:text-l  '>{DATA?.CONST_ASSOCIATES}</p>

    <div className="flex flex-col mb-2 mt-8 ml-3 text-blue-80 text-3xl lg:text-base break-afrer-column text-start " >
          <ul className='flex flex-col'>
              {DATA?.CONST_ASSOCIATES_LIST.map(associate => (
                <li className='mb-4'>{associate}</li>
                    ))}
                </ul>
            </div>
    </div>


    <div className='bg-gray-200 w-1/2 flex flex-col ml-20 mt-4 rounded px-8 py-6 max-h-[300px]'>
    <p className='text-blue-80 text-justify font-bold text-m lg:text-l  '>{DATA?.OUR_PARTNERS}</p>

    <div className="flex flex-col justify-center mb-2 mt-8 ml-3 text-blue-80 text-3xl lg:text-base break-afrer-column  text-justify " >
    <ul className='flex flex-col'>
              {DATA?.OUR_PARTNERS_LIST.map(associate => (
                <li className='mb-4'>{associate}</li>
                    ))}
                </ul>
            </div>
    </div>

</div>
</section>
  )
}

export default AssociatesInfo