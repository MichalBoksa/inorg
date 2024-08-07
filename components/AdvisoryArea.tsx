'use client';   
import React from 'react'
import { useLocale } from '../lang/LocaleContext';
import { CldImage } from 'next-cloudinary';


const AdvisoryArea = () => {
    const { DATA,currentLocale } = useLocale();
    return (
<section className='padding-container'>
    <div className="flex justify-center ml-20 mt-6" >
         <h1 className='text-blue-800 font-semibold text-4xl md:text-5xl tracking-widest'>{DATA?.ADVISORY_AREA}</h1>
    </div>
    <div className='flex flex-col lg:flex-row items-center justify-center w-full mb-6 mt-4'>
      {currentLocale === 'pl' ? ( <CldImage src='https://res.cloudinary.com/dvbvaj9hu/image/upload/v1234/INORG/mu3lafxentwnpl5nghrh.svg'width={1000} height={500} alt='advisory'className='object-fill ' />)
      :
      (<CldImage src='https://res.cloudinary.com/dvbvaj9hu/image/upload/v1234/INORG/a1ororb7lmkg4jlsfqef.svg' width={1000} height={500} alt='advisory'className='object-fill' />)
      }
       
        <div className='flex mt-4 max-container padding-container'>
            <h1 className='lg:absolute text-left font-semibold text-gray-500 md:px-10 text-sm md:text-xl  ' style={{ top: '10%', left: '47%', right:'15%' }}>
              {DATA?.ADVISORY_AREA_DESC}
            </h1>
            </div>   
    </div>
</section>
  )
}

export default AdvisoryArea