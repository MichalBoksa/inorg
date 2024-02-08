import React from 'react'
import Image from 'next/image'
import { COMPETENCE } from '@/constants';

const Competence = () => {
  return (
  <section  className='flexCenter mb-10' >
    <div className='flex max-container relative w-full '>

      <div className=" flex flex-1 lg:min-h-[900px] max-w-[40%]">
        <Image src="/nature1.jpg" alt='repute' width={740} height={1000} className=' md:-left-16 lg:flex  3xl:left-20 h-full' />
      </div>

      <div className='z-20 flex w-full flex-col lg:w-[60%]'>
         <h3 className=' text-blue-80 py-6 text-center font-bold text-3xl lg:text-5xl mb-10'>Renoma marki i kompetencje Instytutu</h3>
        <ul className='grid'>
          {COMPETENCE.map((competence) => (
            <CompetenceItem
             key={competence.title}
             title={competence.title}
             description={competence.description} />
          ))}
        </ul>
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
    <li className='flex flex-col items-center'>

      <div className='w-full flex items-center justify-center'>
        <h5 className='text-gray-500 font-bold text-lg lg:text-2xl text-center'>{title}</h5>
      </div>
      
      <p className="flexCenter text-center text-black font-bold text-base lg:px-52 px-32 mt-5 mb-10">{description}</p>
    </li>
  );
};

export default Competence