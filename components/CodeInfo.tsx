'use client'; 
import React from 'react'
import { useLocale } from '@/lang/LocaleContext';
import { CldImage } from 'next-cloudinary';

const CodeInfo = () => {
  const { DATA } = useLocale();
  return (
    <section className='mb-4 max-container' >
        <div className="flex justify-left mt-6 mb-10" >
         <h1 className='text-blue-800 font-semibold text-3xl lg:text-5xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl tracking-widest'>{DATA?.CODE_INFO}</h1>
    </div>

    <div className='flex w-full max-h-[350px] justify-center' >
         <CldImage src='https://res.cloudinary.com/dvbvaj9hu/image/upload/v1234/INORG/onas/opveitveokgy9ehrxndf.jpg' width={1200} height={900} alt='ethics' className='object-cover w-full rounded' />
       </div>

       <div className='flex flex-col lg:flex-row lg:space-x-10 lg:mt-8 mb-4 md:px-8 justify-center '>

        <div className='bg-gray-200 lg:w-1/3 h-1/3 items-center justify-center flex flex-col mt-10 lg:mt-32 rounded px-8 py-6'>
             <p className='text-blue-80 font-bold text-sm lg:text-xl'>{DATA?.CODE_RULES_DESC}</p>

        <div className="flex flex-col mb-2 mt-8 ml-3 text-blue-80 text-xs md:text-base break-afrer-column text-start " >
              <ul className='flex flex-col'>
                  {DATA?.CODE_RULES.map((code) => (
                    <li className='mb-4'>{code}</li>
                        ))}
                    </ul> 
             </div>
        </div>


        <div className='bg-gray-200 lg:w-2/3 flex flex-col mt-4 rounded px-8 md:px-16 py-4'>
          <p className='text-blue-80 font-bold text-sm lg:text-xl  '>{DATA?.CODE_RULES_EMPLOYEES_DESC}</p>

          <div className="flex flex-col justify-center mb-2 mt-8 ml-3 text-blue-80 text-xs md:text-base break-afrer-column  text-justify " >
                          <ol className='flex flex-col list-decimal'>
                          {DATA?.CODE_RULES_EMPLOYEES.map((code) => (
                              <li className='mb-4'>{code}</li>
                          ))}
                              </ol>
                  </div>
          </div>

       </div>
    </section>
  )
}

export default CodeInfo