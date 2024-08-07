'use client';
import Link from 'next/link';
import React from 'react';
import { CldImage } from 'next-cloudinary';
import { useLocale } from '@/lang/LocaleContext';

const ProjectInfo = () => {
  const { DATA } = useLocale();
  return (
    <section className='mb-4 max-container md:padding-container'>
      <div className="flex justify-start mb-16 mt-10">
        <h1 className='text-blue-800 font-semibold text-4xl md:text-5xl tracking-widest'>{DATA?.EU_PROJECTS}</h1>
      </div>

      <div className='flex flex-col lg:flex-row lg:min-h-[500px] gap-10'>
        <div className='flex flex-col lg:w-[60%]'>
          <div className='text-blue-800 flex'>
            <p className='text-left font-bold text-xs sm:text-sm lg:text-lg px-5 xl:px-20'>{DATA?.EU_PROJECTS_DESC}</p>
          </div>

          <div className='flex flex-col text-black font-bold break-after-column mt-6 px-5 xl:px-20'>
            <p>{DATA?.EU_PROJECTS_NET_AMT}</p>
            <p>{DATA?.EU_PROJECTS_AMT}</p>
          </div>

          <div className='flex mb-10 w-full items-center justify-center'>
            <CldImage src='https://res.cloudinary.com/dvbvaj9hu/image/upload/v1234/INORG/gcctuct37qd9lu7ixzn2.svg' alt='eufunds' width={800} height={200} className='w-4/5' />
          </div>

          <div className='text-blue-800 flex flex-col px-5 lg:px-20 mb-6'>
            <p className='text-center font-bold text-xs sm:text-sm lg:text-lg'>{DATA?.EU_PROJECTS_DESC2}</p>
            <Link className='text-center underline text-blue-600 hover:text-blue-800' href="https://bazakonkurencyjnosci.funduszeeuropejskie.gov.pl">
              <p>https://bazakonkurencyjnosci.funduszeeuropejskie.gov.pl</p>
            </Link>
          </div>
        </div>

        <div className='flex lg:w-[40%] rounded-xl max-h-[500px]'>
          <CldImage src='https://res.cloudinary.com/dvbvaj9hu/image/upload/v1234/INORG/whoarewe/qixfxnop7guz6spgzjqf.jpg' width={600} height={900} alt='joinUs' className='w-full object-cover' />
        </div>
      </div>
    </section>
  );
}

export default ProjectInfo;
