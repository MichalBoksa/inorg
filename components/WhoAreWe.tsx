'use client';
import { specsAboutus } from '@/constants'
import { CldImage } from 'next-cloudinary'
import React from 'react'
import { useLocale } from '@/lang/LocaleContext';

const WhoAreWe = () => {
const { DATA } = useLocale();
  return (
    <section className='mb-4 max-container '>
    <div className="flex justify-left mb-10 mt-6" >
         <h1 className='text-blue-80 font-semibold text-3xl lg:text-5xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl tracking-widest'>{DATA?.WHO_ARE_WE}</h1>
    </div>

   <div className='flex w-full lg:min-h-[300px]'>
       
       <div className='flex flex-col max-w-[60%]'>
          
           <div className=' text-blue-80 flex items-center justify-center '>
               <p className='text-left font-bold text-m lg:text-2xl  '>{DATA?.WHO_ARE_WE_HISTORY}</p>
           </div>

           <div className='text-blue-80 flex p-8 px-28'>
               <p className='text-justify font-bold text-m lg:text-l  '>{DATA?.WHO_ARE_WE_HISTORY_DESC}</p>
           </div>
     </div>

       <div className='flex max-w-[40%] max-h-[600px] ' >
            <CldImage src="https://res.cloudinary.com/dvbvaj9hu/image/upload/v1234/INORG/whoarewe/hqk0i9jv1pisfhbrjyvs.jpg" alt="whoarewe" height={600} width={800} className='cover' />
       </div>
   </div>


   {/* <div className='flex bg-sky-40 max-container w-full max-w-[60%] max-h-[700px]'>
       <div className='grid>'>
           <div className="flex justify-center mb-24 mt-8 lg:px-16 text-center" >
               <p className='text-white text-3xl lg:text-base '>W dynamicznie rozwijającym się otoczeniu ciągle pojawiają się nowe zadania i wyzwania dla polskich firm…</p>
           </div>
           <div className='flex lg:px-48 px-8 mb-16'>
               <p className=' text-white text-center font-extrabold text-m lg:text-l  '>W trakcie wielu lat dynamicznego rozwoju działalności INORG, w wyniku pojawiania się nowych potrzeb u naszych Klientów i zdobywania praktycznego doświadczenia w różnorodnych gałęziach przemysłu, Firma wypracowała szereg autorskich narzędzi eksperckich i modeli, użytecznych z punktu widzenia prowadzenia działalności w burzliwym i niestabilnym otoczeniu. Stale śledzimy najnowsze, światowe trendy dot. organizacji i zarządzania, obserwujemy praktyki światowych liderów oraz budujemy bazę wiedzy na podstawie ciekawych rozwiązań wdrożonych przez polskie i zagraniczne podmioty. Na bieżąco obserwujemy również sytuację rynkową w branżach naszych klientów.</p>
           </div>

           </div> */}

<div className='flex max-container w-full max-h-[700px]'>
       
       <div className='flex w-[60%] max-h-[600px]' >
         <CldImage src='https://res.cloudinary.com/dvbvaj9hu/image/upload/v1234/INORG/whoarewe/qixfxnop7guz6spgzjqf.jpg' width={800} height={600} alt='joinUs' className='w-full ' />
       </div>
       

       <div className='bg-sky-40 text-white flex flex-col max-w-[40%] lg:px-8' >

       <div className='grid '>
           <div className="flex justify-center mb-8 mt-8 lg:px-16 text-center" >
               <p className=' text-center font-bold text-m lg:text-2xl '>{DATA?.DYNAMIC_SUR}</p>
           </div>
           <div className='flex px-8 mb-16'>
               <p className=' text-justify text-m lg:text-l  '>{DATA?.DYNAMIC_SUR_DESC}</p>
           </div>

           </div>

          

       </div>
   </div>



   <div className='flex max-container w-full lg:min-h-[300px]'>
       
       <div className='flex flex-col max-w-[60%] items-center justify-center p-8'>
          
           <div className=' text-blue-80 flex mb-8 '>
               <p className='text-center font-bold text-m lg:text-2xl '>{DATA?.EXPERTS}</p>
           </div>

           <div className='text-blue-80 flex px-12'>
               <p className='text-justify font-bold text-m lg:text-l'>{DATA?.EXPERTS_DESC}</p>
           </div>
     </div>

       <div className='flex max-w-[40%] max-h-[600px]' >
         <CldImage src='https://res.cloudinary.com/dvbvaj9hu/image/upload/v1234/INORG/whoarewe/tomuxyx0mydkfnjq2d82.jpg' width={800} height={600} alt='joinUs' className='w-full ' />
       </div>
   </div>


   <div className='flex max-container w-full '>
       

       <div className='bg-sky-40 text-white flex flex-col lg:px-8 max-w-[60%]' >

       <div className='flex flex-col'>
           <div className="flex justify-center mb-8 mt-8 lg:px-16 text-center" >
               <p className=' text-center font-bold text-m lg:text-2xl '>{DATA?.REALIZED_PROJECTS}</p>
           </div>
           <div className='flex flex-col px-8'>
               <p className=' text-justify  text-m lg:text-l mb-10 '>{DATA?.REALIZED_PROJECTS_DESC}</p>

               <div className='flex flex-col px-28 text-justify' >
               <ul className='grid'>
               {DATA?.SPEC_ABOUT_US.map((spec) => (
                   <li className='text-white text-m  mb-4'>{spec}</li>
               ))}
               </ul>
           </div>
           </div>

           </div>

       </div>

       <div className='flex flex-col max-w-[40%] items-center  mb-8 mt-8 lg:px-16' >
       <p className=' text-blue-80 text-center font-bold text-m lg:text-2xl mb-10 '>{DATA?.RELATIONS}</p>
       <p className=' text-blue-80 text-justify  text-m lg:text-l  '>{DATA?.RELATIONS_DESC}</p>
       </div>
   </div>

   
  </section>
  )
}

export default WhoAreWe