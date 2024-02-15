import { specsAboutus } from '@/constants'
import React from 'react'
import Link from "next/link"

const AboutUsInfo = () => {
  return (
   <section className='mb-4'>
    <div className="flex justify-left ml-20 mb-10 mt-6" >
         <h1 className='text-blue-80 font-bold text-3xl lg:text-6xl '>O Firmie</h1>
    </div>

    <div className='flex w-full max-h-[350px] justify-center px-20' >
         <img src='/about_us.jpg' alt='about_us' className='w-full rounded object-cover' />
       </div>

       <div className='bg-gray-200 rounded-xl flex flex-wrap justify-center space-x-24 mt-8 mb-4 px-16 ml-20 mr-20 '>

        <Link href="aboutUs/whoAreWe" className='w-1/5 bg-gray-100 h-60 rounded relative mt-10 '> 
             <h1 className='text-sky-40 text-left font-bold text-3xl lg:text-2xl mt-4 px-6'>Kim jesteśmy</h1> 
             <img src='/who_are_we.jpg' alt='who_are_we' className='h-40 w-60 rounded-md absolute mt-8 object-cover'  style={{ top: '30%', left: '15%' }} />
        </Link>

            <Link href="aboutUs/code" className="w-1/5 bg-gray-100 h-60 rounded relative mt-10">
            <h1 className='text-sky-40 text-left font-bold text-3xl lg:text-2xl mt-4 px-6'>Nasz kodeks etyczny</h1> 
            <img src='/codex.jpg' alt='codex' className='h-40 w-60 rounded-md absolute mt-8 object-cover'  style={{ top: '30%', left: '15%' }} />
            </Link>

            <Link href="aboutUs/managment" className="w-1/5 bg-gray-100 h-60 rounded relative mt-10">
                <h1 className='text-sky-40 text-left font-bold text-3xl lg:text-2xl mt-4 px-6'>Rada Naukowo-Programowa</h1> 
                <img src='/managment.jpg' alt='managment' className='h-40 w-60 rounded-md absolute mt-8 object-cover'  style={{ top: '30%', left: '15%' }} />
            </Link>

            <Link  href="aboutUs/associates" className="w-1/5 bg-gray-100 h-60 mt-16 rounded relative mb-10">
            <h1 className='text-sky-40 text-left font-bold text-3xl lg:text-2xl mt-4 px-6'>Nasi współpracownicy</h1> 
            <img src='/cooperation.jpg' alt='cooperation' className='h-40 w-60 rounded-md absolute mt-8 object-cover'  style={{ top: '30%', left: '15%' }} />
            </Link>

            <Link  href="aboutUs/goals" className="w-1/5 bg-gray-100 h-60 mt-16 rounded relative mb-10">
            <h1 className='text-sky-40 text-left font-bold text-3xl lg:text-2xl mt-4 px-6'>Nasza misja i kompetnecje</h1> 
            <img src='/goals.jpg' alt='joinUs' className='h-40 w-60 rounded-md absolute mt-8 object-cover'  style={{ top: '30%', left: '15%' }} />
            </Link>

        </div>
    </section>
  )
}

export default AboutUsInfo