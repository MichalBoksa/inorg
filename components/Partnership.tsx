'use client';
import { CldImage } from 'next-cloudinary'
import React from 'react'
import { useLocale } from '../lang/LocaleContext';

const Partnership = () => {
    const { DATA } = useLocale();
  return (
    <section className='mb-4 max-container md:padding-container'>
      <div className="flex relative justify-center sm:justify-left mb-10 mt-6">
        <CldImage src='https://res.cloudinary.com/dvbvaj9hu/image/upload/v1234/INORG/wspolpraca/tktcmlwcy4kbwmyxl4i3.jpg' width={1900} height={1450} alt='branches' className='object-cover max-h-[450px] w-full rounded' />
        <h1 className='font-bold text-2xl md:text-4xl lg:text-5xl 2xl:text-6xl absolute text-blue-80 tracking-widest' style={{ top: '68%', left: '8%' }}>{DATA?.INTERNATIONAL_PARTNERSHIP}</h1>
      </div>

      <div className='flex flex-col lg:flex-row gap-10 mt-8 items-center justify-center mb-8'>
        <p className='font-bold text-base xl:text-lg 2xl:text-xl text-gray-500 p-4 text-center lg:text-left'>{DATA?.INTERNATIONAL_PARTNERSHIP_DESC}</p> 
        <CldImage src='https://res.cloudinary.com/dvbvaj9hu/image/upload/v1234/INORG/wspolpraca/ooej0xmqzmqm9duasbcn.jpg' width={800} height={600} alt='branches' className='object-cover max-h-[350px] max-w-[450px]' />     
      </div>

      <div className="flex flex-col relative justify-center items-center mb-10 mt-6">
        <h1 className='flex font-bold text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl text-blue-80 tracking-widest'>{DATA?.COOPERATION}</h1>
        <div className='flex flex-col justify-center gap-10 mt-10'>
          <CldImage src='https://res.cloudinary.com/dvbvaj9hu/image/upload/v1234/INORG/wspolpraca/hbcgoijjzeou3i9tfxvf.jpg' width={500} height={400} alt='branches' className='object-cover max-h-[250px] rounded' />
          <CldImage src='https://res.cloudinary.com/dvbvaj9hu/image/upload/v1234/INORG/wspolpraca/rvldblqofs0cfzkm2em9.jpg' width={500} height={400} alt='branches' className='object-cover max-h-[350px] rounded' />
        </div>  
      </div>

      <div className="flex flex-col relative justify-center items-center mb-10 mt-6">
        <h1 className='flex font-bold text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl text-blue-80 tracking-widest'>{DATA?.WE_ARE_PART_OF}</h1>
        <div className='flex flex-wrap justify-center gap-10 mt-10'>
          <CldImage src='https://res.cloudinary.com/dvbvaj9hu/image/upload/v1234/INORG/wspolpraca/lhom7l9crmpp88f1z1dw.png' width={400} height={450} alt='branches' className='object-cover max-h-[250px] w-full rounded' />
        </div>  
      </div>

      <div className="flex relative justify-center sm:justify-left mb-10 mt-6">
        <CldImage src='https://res.cloudinary.com/dvbvaj9hu/image/upload/v1234/INORG/wspolpraca/vmpcm7yg3owkbfnj7clq.jpg' width={1900} height={1450} alt='branches' className='object-cover max-h-[450px] w-full rounded' />
        <h1 className='font-bold text-xl sm:text-3xl md:text-5xl  absolute text-white tracking-widest' style={{ top: '70%', left: '8%' }}>{DATA?.TARGET_GROUP}</h1>
        <h3 className='font-semibold text-xs sm:text-lg md:text-2xl absolute text-white' style={{ top: '82%', left: '8%' }}>{DATA?.TARGET_GROUP_DESC}</h3>
      </div>

      <div className='flex flex-wrap mt-8 mb-4 px-10 gap-10 justify-center'>
        {DATA?.TARGET_GROUPS.map((product, index) => (
          <div key={product.src} className='flex mb-4 justify-center'>
            <div key={index} className='w-80 h-92 rounded items-center justify-center hover:bg-gray-100 hover:shadow-xl'> 
              <h1 className='text-blue-80 text-center font-semibold text-3xl lg:text-xl mt-4 px-6'>{product.title}</h1> 
              <div className='flex justify-center items-center'>
                <CldImage src={product.src} alt='funds' width={300} height={200} className='rounded-md min-h-[200px] max-h-[200px] object-cover justify-center mt-2' />
              </div>          
            </div>
          </div>
        ))}
      </div>

      <div className='flex relative justify-center'>
        <CldImage src='https://res.cloudinary.com/dvbvaj9hu/image/upload/v1234/INORG/wspolpraca/kfku85xwvtzjuajf0c56.jpg' width={1900} height={1450} alt='branches' className='object-cover max-h-[450px] w-full' />
        <h1 className='font-bold text-xl sm:text-3xl md:text-5xl absolute text-white tracking-widest' style={{ top: '80%', right: '8%' }}>{DATA?.WHERE_WE_OPERATE}</h1>
      </div>

      <div className='flex flex-col lg:flex-row gap-10 mt-8 items-center justify-center'>
        <CldImage src='https://res.cloudinary.com/dvbvaj9hu/image/upload/v1234/INORG/wspolpraca/gugknhx9znguq5o0evx0.svg' width={600} height={500} alt='branches' className='object-cover max-h-[320px] max-w-[350px] lg:max-h-[350px] lg:max-w-[450px]' />     
        <p className='font-bold text-base xl:text-lg 2xl:text-xl text-gray-500 p-4 text-center lg:text-left'>{DATA?.WHERE_WE_OPERATE_DESC}</p>     
      </div>
    </section>
  )
}

export default Partnership;
