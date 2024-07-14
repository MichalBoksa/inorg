'use client';
import Link from 'next/link'
import React from 'react'
import { CldImage } from 'next-cloudinary';
import { useLocale } from '@/lang/LocaleContext';

const ProjectInfo = () => {
  const { DATA } = useLocale();
  return (
    <section className='mb-4 max-container'>
           <div className="flex justify-center mb-16 mt-10" >
                <h1 className='text-blue-80 font-semibold text-3xl lg:text-5xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl tracking-widest'>{DATA?.EU_PROJECTS}</h1>
            </div>

            <div className='flex max-container lg:min-h-[500px] '>
             <div className='flex flex-col w-[85%]'>
          
              <div className=' text-blue-80 flex'>
                  <p className='text-left font-bold text-m lg:text-l text-pretty px-20'>{DATA?.EU_PROJECTS_DESC}</p>
              </div>

            <div className='flex flex-col text-black font-bold  break-after-colum mt-6 ml-20 px-8'>
                <p>{DATA?.EU_PROJECTS_NET_AMT}</p>
                <p>{DATA?.EU_PROJECTS_AMT}</p>
                </div>

                <div className=' flex mb-10 w-full items-center justify-center'>
                  <CldImage src='https://res.cloudinary.com/dvbvaj9hu/image/upload/v1234/INORG/gcctuct37qd9lu7ixzn2.svg' alt='eufunds' width={800} height={200} className='w-4/5' />
               </div>

            <div className=' text-blue-80 flex flex-col lg:px-20 px-10 ml-5 mr-5 mb-6 '>
                <p className='text-center font-bold text-m lg:text-l  '>{DATA?.EU_PROJECTS_DESC2}</p>
                <Link className='text-center' href= "https://bazakonkurencyjnosci.funduszeeuropejskie.gov.pl"> <p>https://bazakonkurencyjnosci.funduszeeuropejskie.gov.pl</p></Link>
            </div>

      </div>

        <div className='flex rounded-xl' >
          <CldImage src='https://res.cloudinary.com/dvbvaj9hu/image/upload/v1234/INORG/whoarewe/qixfxnop7guz6spgzjqf.jpg' width={600} height={900} alt='joinUs' className='w-full h-full' />
        </div>
    </div>
        </section>
  )
}

export default ProjectInfo