'use client';
import { CldImage } from 'next-cloudinary'
import React from 'react'
import { useLocale } from '../lang/LocaleContext';

const TrainingArea = () => {
    const { DATA } = useLocale();
  return (
    <section className='max-container padding-container'>
    <div className="flex justify-center mt-6" >
         <h1 className='text-blue-800 font-semibold text-4xl md:text-5xl tracking-widest'>{DATA?.TRAINING_AREA}</h1>
    </div>
    <div className='flex max-container padding-container items-center justify-center mt-6'>
            <h3 className='font-semibold text-gray-500 md:px-10 md:text-xl'>
              {DATA?.TRAINING_AREA_DESC}
            </h3>           
    </div>

    <div className='flex flex-wrap mt-8 mb-4 px-10 max-container padding-container gap-10 justify-center'>
        {DATA?.TRAINING_AREA_PRODUCTS.map((product, index) => (
            <div className='flex mb-4 justify-center'>
                <div key={index} className='w-80  h-92 rounded items-center justify-center hover:bg-gray-100 hover:shadow-xl'> 
                    <div className='flex justify-center items-center'>
                        <CldImage src={product.img} alt='funds'width={300} height={150} className='rounded-md object-cover justify-center mt-2'/>
                    </div>
                    <h1 className='text-blue-80 text-center font-semibold text-lg md:text-xl mt-4 px-6'>{product.title}</h1> 
                    <p className='text-gray-500 text-left font-medium text-xs md:text-sm px-6 py-3'>{product.desc}</p>
                </div>
            </div>
        ))}
    </div>
</section>
  )
}

export default TrainingArea