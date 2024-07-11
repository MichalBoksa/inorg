'use client'; 
import { code } from '@/constants'
import React from 'react'
import { useLocale } from '@/lang/LocaleContext';

const CodeInfo = () => {
  const { DATA } = useLocale();
  return (
    <section className='mb-4'>
        <div className="flex justify-left ml-20 mb-10 mt-6" >
         <h1 className='text-blue-80 font-bold text-3xl lg:text-6xl '>{DATA?.CODE_INFO}</h1>
    </div>

    <div className='flex w-full max-h-[350px] justify-center px-20' >
         <img src='/ethics_bg.jpg' alt='ethics' className='object-cover w-full rounded' />
       </div>

       <div className='flex space-x-20 mt-8 mb-4 px-16 justify-center'>

        <div className='bg-gray-200 w-1/3  max-h-[350px] flex flex-col ml-20 mt-32 rounded px-8 py-6'>
             <p className='text-blue-80 text-justify font-bold text-m lg:text-l  '>{DATA?.CODE_RULES_DESC}</p>

        <div className="flex flex-col mb-2 mt-8 ml-3 text-blue-80 text-3xl lg:text-base break-afrer-column  text-start " >
              <ul className='flex flex-col'>
                  {DATA?.CODE_RULES.map((code) => (
                    <li className='mb-4'>{code}</li>
                        ))}
                    </ul> 
             </div>
        </div>


        <div className='bg-gray-200 w-2/3 flex flex-col ml-20 mt-4 rounded px-8 py-6'>
        <p className='text-blue-80 text-justify font-bold text-m lg:text-l  '>Nasi pracownicy i współpracownicy stosują Kodeks Etyczny Instytutu Organizacji „INORG” Sp. z o.o., który opiera się na następujących głównych zasadach:</p>

        <div className="flex flex-col justify-center mb-2 mt-8 ml-3 text-blue-80 text-3xl lg:text-base break-afrer-column  text-justify " >
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