'use client';   
import React from 'react'
import { useLocale } from '../lang/LocaleContext';
import { CldImage } from 'next-cloudinary';


const AdvisoryArea = () => {
    const { DATA,currentLocale } = useLocale();
    return (
<section className=' padding-container'>
    <div className="flex justify-center ml-20 mt-6" >
         <h1 className='text-blue-80 font-semibold text-3xl lg:text-5xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl tracking-widest'>{DATA?.ADVISORY_AREA}</h1>
    </div>
    <div className='flex items-center justify-center w-full mb-6'>
      {currentLocale === 'pl' ? ( <CldImage src='https://res.cloudinary.com/dvbvaj9hu/image/upload/v1234/INORG/mu3lafxentwnpl5nghrh.svg'width={1000} height={500} alt='advisory'className='object-fill ' />)
      :
      (<CldImage src='https://res.cloudinary.com/dvbvaj9hu/image/upload/v1234/INORG/a1ororb7lmkg4jlsfqef.svg' width={1000} height={500} alt='advisory'className='object-fill' />)
      }
       
        <div className='flex max-container padding-container'>
            <h1 className='absolute text-left font-semibold text-gray-500 px-10 lg: text-xl md:text-xl  ' style={{ top: '10%', left: '47%', right:'15%' }}>
              {DATA?.ADVISORY_AREA_DESC}
            </h1>
            </div>   
    </div>
</section>
  )
}

export default AdvisoryArea