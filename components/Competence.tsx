import React from 'react'
import Image from 'next/image'

const Competence = () => {
  return (
     <section  className=' flex-col flexCenter overflow-hidden py-24' >
    <div className='max-container padding-container relative w-full'>

      <div className="border-2 border-red-500 flex flex-1 lg:min-h-[900px]">
        <Image src="/nature1.jpg" alt='repute' width={740} height={1000} className='feature-product h-full' />
      </div>
      
      <div className='z-20 flex w-full flex-col lg:w-[60%]'>
      </div>
    </div>
  </section>
  )
}

export default Competence