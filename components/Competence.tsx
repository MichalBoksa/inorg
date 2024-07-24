"use client";
import React from 'react'
import Image from 'next/image'
import { useLocale } from '../lang/LocaleContext';
import { CldImage } from 'next-cloudinary';

const Competence = () => {
  const { DATA } = useLocale();
  return (
  <section className='flexCenter mb-4' >
    <div className='flex max-container relative w-full '>

      <div className="hidden md:flex flex-1 lg:min-h-[450px] max-w-[50%]">
        <CldImage src="https://res.cloudinary.com/dvbvaj9hu/image/upload/v1234/INORG/wxs9hk16nuew6kogynji.jpg" alt='competence' width={740} height={800} className='md:-left-10 lg:flex 3xl:left-20  lg:h-[650px] rounded-lg' />
      </div>

      <div className='z-20 mt-8 flex w-full flex-col lg:w-[60%] items-center'>
        <div className='flex flex-col justify-center items-start md:w-3/5 ' >
          <h1 className='text-3xl md:text-5xl font-bold text-blue-80 text-center lg:mb-8 mb-4 '>{DATA?.COMPETENCE}</h1>
          <p className='text-base text-left font-bold text-gray-500 p-2 mt-4'>{DATA?.COMPETENCE_DESC}</p>
            <div className='flex flex-col w-full mt-7'>         
              <h3 className='text-xl font-bold text-blue-80 text-left lg:mb-6 mb-2 '>{DATA?.QUESTION}</h3>
              <p className='text-base text-left font-bold text-gray-500 p-2'>{DATA?.ANSWEAR}</p>
            </div>
      </div>
      </div>

    </div>
  </section>
  )
}

type CompetenceItemProps = {
  title: string;
  description: string;
};

const CompetenceItem = ({ title, description }: CompetenceItemProps) => {
  return (
    <li className='flex flex-col items-center lg:py-8 py-2'>

      <div className='w-full flex items-center justify-center '>
        <h5 className='text-blue-80 font-bold text-lg lg:text-3xl text-center'>{title}</h5>
      </div>
      
      <div className='flex justify-center lg:px-32'>
         <p className="bg-gray-200 rounded flexCenter text-left text-black md:font-medium text-base px-8 py-6 mt-5 mb-6 ml-12">{description}</p>
      </div>
    </li>
  );
};

export default Competence