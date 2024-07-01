'use client';
import { CldImage } from 'next-cloudinary'
import React from 'react'
import { useLocale } from '../lang/LocaleContext';


const Partnership = () => {
    const { DATA } = useLocale();
  return (
    <section className='mb-4 '>
    <div className="flex relative justify-center justify-left ml-20 mb-10 mt-6  max-container padding-container" >
      <CldImage src='https://res.cloudinary.com/dvbvaj9hu/image/upload/v1234/INORG/wspolpraca/vmpcm7yg3owkbfnj7clq.jpg' width={1900} height={1450} alt='branches' className='object-cover max-h-[450px]  w-full rounded' />
         <h1 className='font-bold text-3xl xl:text-5xl 2xl:text-6xl absolute text-white tracking-widest' style={{ top: '68%', left: '8%' }}>{DATA?.TARGET_GROUP}</h1>
         <h3 className='font-bold text-xl xl:text-xl 2xl:text-3xl absolute text-white'  style={{ top: '80%', left: '8%' }}>{DATA?.TARGET_GROUP_DESC}</h3>'
    </div>

    <div className='flex flex-wrap mt-8 mb-4 px-10 max-container padding-container gap-10 justify-center'>
        {DATA?.TARGET_GROUPS.map((product, index) => (
            <div className='flex mb-4 justify-center'>
                <div key={index} className='w-80 h-92 rounded items-center justify-center hover:bg-gray-100 hover:shadow-xl'> 
                <h1 className='text-blue-80 text-center font-semibold text-3xl lg:text-xl mt-4 px-6'>{product.title}</h1> 
                    <div className='flex justify-center items-center'>
                        <CldImage src={product.src} alt='funds'width={300} height={200} className='rounded-md min-h-[200px] max-h-[200px]  object-cover justify-center mt-2'/>
                    </div>          
                </div>
            </div>
        ))}
    </div>

    <div className='flex relative justify-center max-container padding-container'>
      <CldImage src='https://res.cloudinary.com/dvbvaj9hu/image/upload/v1234/INORG/wspolpraca/kfku85xwvtzjuajf0c56.jpg' width={1900} height={1450} alt='branches' className='object-cover max-h-[450px]  w-full' />
      <h1 className='font-bold text-3xl xl:text-5xl 2xl:text-6xl absolute text-white tracking-widest' style={{ top: '80%', right: '8%' }}>{DATA?.WHERE_WE_OPERATE}</h1>
      </div>

      <div className='flex gap-10 mt-8 max-container padding-container items-center justify-center'>
          <CldImage src='https://res.cloudinary.com/dvbvaj9hu/image/upload/v1719843041/INORG/wspolpraca/aj9xarbf0smm7e5c2yv7.svg' width={600} height={500} alt='branches' className='object-cover lg:max-h-[350px] lg:max-w-[450px]' />     
          <p className='font-bold text-base xl:text-lg 2xl:text-xl text-gray-500 p-4' >{DATA?.WHERE_WE_OPERATE_DESC}</p>     
      </div>

      <div className="flex relative justify-center justify-left ml-20 mb-10 mt-6  max-container padding-container" >
        <CldImage src='https://res.cloudinary.com/dvbvaj9hu/image/upload/v1234/INORG/wspolpraca/tktcmlwcy4kbwmyxl4i3.jpg' width={1900} height={1450} alt='branches' className='object-cover max-h-[450px]  w-full rounded' />
         <h1 className='font-bold lg:text-3xl xl:text-5xl 2xl:text-6xl absolute text-blue-80 tracking-widest' style={{ top: '68%', left: '8%' }}>{DATA?.INTERNATIONAL_PARTNERSHIP}</h1>
    </div>

    <div className='flex gap-10 mt-8 max-container padding-container items-center justify-center'>
        <p className='font-bold text-base xl:text-lg 2xl:text-xl text-gray-500 p-4' >{DATA?.INTERNATIONAL_PARTNERSHIP_DESC}</p> 
        <CldImage src='https://res.cloudinary.com/dvbvaj9hu/image/upload/v1234/INORG/wspolpraca/ozydoytae5ocxn3racbr.svg' width={800} height={600} alt='branches' className='object-cover lg:max-h-[450px] lg:max-w-[550px]' />     
              
      </div>
    </section>
  )
}

export default Partnership