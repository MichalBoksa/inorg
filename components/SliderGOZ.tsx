'use client';
import React, { useState } from 'react'
import { useLocale } from '@/lang/LocaleContext';
import { CldImage } from 'next-cloudinary';

const SliderGOZ = () => {
  const {DATA} = useLocale();
 
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!DATA || !DATA.GOZ_COMPANIES) {
    return <div>Loading...</div>;
  }

  const totalSlides = DATA.GOZ_COMPANIES.length;

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

    return (
    <section className=' '>
        <div className="carousel w-[400px]  h-[600px] rounded-xl ">
            {DATA?.GOZ_COMPANIES.map((company, index) => ( 
               
                <div key={index}id={`slide${index}`} className={`absolute max-container padding-container mt-5 inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                style={{ opacity: index === currentIndex ? 1 : 0 }}>
                        <div className='max-w-[460px]'>
                        <CldImage src={company.img} className="w-full object-fill z-5 rounded-xl max-w-[460px] max-h-[300px]" alt='' height={600} width={400} />
                        </div>
                <div className='flex flex-col font-bold text-base w-[460px] mt-3 text-center justify-center items-center z-10 tracking-wider'>
                    <h1 className='text-gray-500 px-8'>{company.name}</h1>
                    <p className=' px-8  text-blue-80 mt-2'>{company.description}</p>
                </div>
                <div className=" absolute w-[400px] flex justify-between transform -translate-y-1/2 xl:left-28 top-[25%] 2xl:top-[30%]">
                    <button onClick={prevSlide} className="btn btn-circle">❮</button> 
                    <button onClick={nextSlide} className="btn btn-circle">❯</button>
                </div>
                 </div> 
    
               
            ))}
        </div> 
   </section>
  )
}

export default SliderGOZ