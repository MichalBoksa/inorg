'use client';
import { useLocale } from '@/lang/LocaleContext';
import { CldImage } from 'next-cloudinary';
import React from 'react';

const GozAndCybersecurity = () => {
  const { DATA } = useLocale();

  return (
    <section className='max-container md:padding-container mb-10'>
      <div className='flex justify-center mt-6'>
        <h1 className='text-blue-800 font-semibold text-2xl sm:text-4xl md:text-5xl tracking-widest text-center'>
          {DATA?.GOZ_CYBERSECURITY}
        </h1>
      </div>

      <div className='flex flex-col items-center md:items-start'>
        <div className='mt-6'>
          <h3 className='font-semibold text-gray-500 px-4 md:px-10 text-lg md:text-xl text-center md:text-left'>
            {DATA?.GOZ_CYBERSECURITY_TECHNISTARS}
          </h3>
        </div>

        <div className='flex justify-center mt-6'>
          <CldImage
            src='https://res.cloudinary.com/dvbvaj9hu/image/upload/v1724064341/INORG/gozCybersecurity/hhn2rxkmsrunqok9h9mo.jpg'
            alt='funds'
            width={150}
            height={150}
            className='rounded-md object-cover'
          />
        </div>

        <div className='mt-6'>
          <h3 className='font-semibold text-blue-800 px-4 md:px-10 text-lg md:text-xl text-center md:text-left'>
            {DATA?.GOZ_CYBERSECURITY_ABOUT_US}{' '}
            <span className='text-black'>{DATA?.GOZ_CYBERSECURITY_ABOUT_US_DESC}</span>
          </h3>
        </div>

        <div className='mt-6'>
          <h3 className='font-semibold text-blue-800 px-4 md:px-10 text-lg md:text-xl text-center md:text-left'>
            {DATA?.GOZ_CYBERSECURITY_SERVICES}
          </h3>
        </div>

        <div className='flex flex-col mt-6 w-full'>
          <div className='mt-6'>
            <h3 className='font-semibold text-blue-800 px-4 md:px-10 text-lg md:text-xl'>
              {DATA?.GOZ_CYBERSECURITY_SERVICES_AI}
            </h3>
          </div>

          <div className='flex flex-col mt-3 px-4 md:px-10'>
            {DATA?.GOZ_CYBERSECURITY_SERVICES_AI_LIST.map((element, index) => (
              <div key={index} className='flex items-start mt-3'>
                <p className='text-blue-800 font-bold'>{'>'}</p>
                <h3 className='font-semibold text-lg ml-4'>
                  {element.label} {element.desc}
                </h3>
              </div>
            ))}
          </div>

          <div className='mt-16'>
            <h3 className='font-semibold text-blue-800 px-4 md:px-10 text-lg md:text-xl'>
              {DATA?.GOZ_CYBERSECURITY_SERVICES_CYBERSECURITY}
            </h3>
          </div>

          <div className='flex flex-col mt-3 px-4 md:px-10'>
            {DATA?.GOZ_CYBERSECURITY_SERVICES_CYBERSECURITY_LIST.map((element, index) => (
              <div key={index} className='flex items-start mt-3'>
                <p className='text-blue-800 font-bold'>{'>'}</p>
                <h3 className='font-semibold text-lg ml-4'>
                  {element.label} {element.desc}
                </h3>
              </div>
            ))}
          </div>
        </div>

        <div className='mt-16'>
          <h3 className='font-semibold text-blue-800 px-4 md:px-10 text-lg md:text-xl'>
            {DATA?.GOZ_CYBERSECURITY_PARTNERSHIP_MODELS}
          </h3>

          <div className='flex flex-col mt-6 px-4 md:px-10'>
            {DATA?.GOZ_CYBERSECURITY_PARTNERSHIP_MODELS_LIST.map((element, index) => (
              <div key={index} className='mt-3'>
                <h3 className='font-semibold text-gray-500 text-lg'>{element.label}</h3>
                <h3 className='font-semibold text-lg'>{element.desc}</h3>
              </div>
            ))}
          </div>

          <div className='flex flex-col mt-16'>
            <h3 className='font-semibold text-blue-800 px-4 md:px-10 text-lg md:text-xl'>
              {DATA?.GOZ_CYBERSECURITY_WHY_COOPERATE}
            </h3>

            <div className='flex flex-col mt-3 px-4 md:px-10'>
              {DATA?.GOZ_CYBERSECURITY_WHY_COOPERATE_LIST.map((element, index) => (
                <div key={index} className='flex items-start mt-3'>
                  <p className='text-blue-800 font-bold'>{'>'}</p>
                  <h3 className='font-semibold text-lg ml-4'>
                    {element.label} {element.desc}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          <div className='flex flex-col mt-16'>
            <h3 className='font-semibold text-blue-800 px-4 md:px-10 text-lg md:text-xl'>
              {DATA?.GOZ_CYBERSECURITY_EXPERIENCE}
            </h3>

            <div className='flex flex-col mt-3 px-4 md:px-10'>
              {DATA?.GOZ_CYBERSECURITY_EXPERIENCE_LIST.map((element, index) => (
                <div key={index} className='flex items-start mt-3'>
                  <p className='text-blue-800 font-bold'>{'>'}</p>
                  <h3 className='font-semibold text-lg ml-4'>
                    {element.label} {element.desc}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          <div className='flex flex-col mt-12'>
            <h3 className='font-semibold text-gray-500 px-4 md:px-10 text-lg md:text-xl'>
              {DATA?.GOZ_CYBERSECURITY_CONTACT}
            </h3>
            <h3 className='font-semibold text-gray-500 px-4 md:px-10 text-lg mt-4'>
              {DATA?.GOZ_CYBERSECURITY_CONTACT_DESC}
            </h3>
            <h3 className='font-semibold text-gray-500 px-4 md:px-10 text-lg'>
              Email: matt@technischools.com
            </h3>

            <div className='border-t-2 border-black w-1/2 mt-10 mx-auto md:mx-0' />

            <div className='flex justify-start mt-6'>
              <h3 className='font-semibold text-gray-500 px-4 md:px-10 text-lg'>
                {DATA?.GOZ_CYBERSECURITY_INVITATION_COOPERATE}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GozAndCybersecurity;
