'use client';
import React from 'react'
import { useLocale } from '@/lang/LocaleContext';
import { CldImage } from 'next-cloudinary';

const GoalsInfo = () => {
  const { DATA } = useLocale();
  return (
    <section className='mb-4'>
    <div className="flex justify-left ml-20 mb-10 mt-6" >
     <h1 className='text-blue-80 font-bold text-3xl lg:text-6xl '>{DATA?.OUR_MISSION}</h1>
</div>

<div className='flex max-container w-full lg:min-h-[300px]'>
       
       <div className='flex flex-col max-w-[60%] '>
          
           <div className=' text-blue-80 flex lg:px-40 px-30 ml-8 mr-8 mb-14 mt-10 '>
               <p className='text-center font-bold text-m lg:text-2xl '>{DATA?.INORG_MISSION}</p>
           </div>

           <div className="flex flex-col mb-2 mt-8 ml-3 text-blue-80 font-bold text-3xl lg:text-base break-afrer-column text-start px-8 " >
                   <ul>
                    {DATA?.INORG_MISSION_LIST.map((mission) => (
                        <li key={mission} className='mb-4'>{mission}</li>
                    ))}
                    </ul>     
          </div>
     </div>

       <div className='flex max-w-[40%] max-h-[600px]' >
         <CldImage src='https://res.cloudinary.com/dvbvaj9hu/image/upload/v1234/INORG/onas/qdpzljbuq4fjpq2vj8s5.jpg' height={800} width={1200} alt='joinUs' className='w-full object-cover' />
       </div>
   </div>


<div className='flex max-container w-full max-w-[60%] max-h-[700px]'>
       
       <div className='flex max-w-[60%] max-h-[600px]' >
         <CldImage src='https://res.cloudinary.com/dvbvaj9hu/image/upload/v1234/INORG/onas/b1jyd2l2mtl66ltcszt6.jpg' height={800} width={1200} alt='joinUs' className='w-full ' />
       </div>
       

       <div className='bg-sky-40 text-white flex items-center w-[40%] lg:px-8' >

                <div className="flex  lg:px-8  " >
                          <p className='font-bold text-m lg:text-5xl '>{DATA?.WHY_US}</p>
                </div>

       </div>
   </div>



   

   <div className='flex max-container w-full '>
       

       <div className='bg-sky-40 text-white flex flex-col lg:px-8 max-w-[60%]' >

       <div className='flex flex-col'>

           <div className="flex flex-col justify-center mb-4 mt-8 lg:px-16 text-center" >
               <p className='text-center font-bold text-m lg:text-2xl '>{DATA?.OUR_SOURCES}</p>
               <p className='text-center text-m lg:text-xl mt-8'>{DATA?.POSITION}</p>
           </div>

           <div className='flex flex-col px-8'>

                <div className="flex flex-col justify-center mb-2 mt-8 ml-3 text-white text-3xl lg:text-base break-afrer-column  text-justify " >
                <ul>
                    {DATA?.POSITION_LIST.map((position) => (
                        <li key={position} className='mb-4'>{position}</li>
                    ))}
                    </ul>     
                </div>

           </div>

           </div>

       </div>

       <div className='flex flex-col max-w-[40%] mb-6 mt-8 lg:px-8' >
                <p className=' text-blue-80 text-justify font-bold text-m lg:text-2xl mb-10 '>{DATA?.OUR_FEATURES}</p>
       
                <div className="flex flex-col mb-2 mt-8 ml-3 text-blue-80 font-bold text-3xl lg:text-base break-afrer-column text-start px-4 " >
                <ul>
                    {DATA?.OUR_FEATURES_LIST.map((feature) => (
                        <li key={feature} className='mb-4'>{feature}</li>
                    ))}
                    </ul>
            </div>
       </div>
   </div>
</section>
  )
}

export default GoalsInfo