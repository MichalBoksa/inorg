'use client';
import React from 'react'

import SliderGOZ from './SliderGOZ'
import { CldImage } from 'next-cloudinary'

const GOZ = () => {
  return (
    <section className='padding-container max-container'>
        <div className='flex'>
            <SliderGOZ/>
            <div className='ml-auto mr-10'>
                <CldImage src ='https://res.cloudinary.com/dvbvaj9hu/image/upload/v1234/INORG/goz/yyf1l196qftwqgsbda2j.svg' width={450} height={300} alt='goz' className='object-fill '/>
            </div>
        </div>
    </section>
  )
}

export default GOZ