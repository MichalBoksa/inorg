import { specsAboutus } from '@/constants'
import React from 'react'
import Link from "next/link"

const BranchesInfo = () => {
  return (
   <section className='mb-4 '>
    <div className="flex justify-left ml-20 mb-10 mt-6" >
         <h1 className='text-blue-80 font-semibold text-3xl lg:text-5xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl tracking-widest'>Branże</h1>
    </div>

    <div className='flex w-full max-h-[350px] justify-center px-20' >
         <img src='/branches_bg.jpg' alt='branches' className='object-cover w-full rounded' />
       </div>

       <div className='bg-gray-200 rounded-xl flex flex-col mt-8 mb-4 px-16 mr-20 ml-20 '>

        <div className='flex space-x-32 mt-8 mb-4 px-16 justify-center'>
            <Link href="branches/capitalGroupBigBusiness" className='w-1/3 bg-gray-100 h-72 rounded relative mt-10 '> 
                <h1 className='text-sky-40 text-left font-bold text-3xl lg:text-2xl mt-4 px-6'>Duże przedsiębiorstwa i grupy kapitałowe</h1> 
                <img src='/big_business.jpg' alt='bigBusinesses' className='h-3/4 w-11/12 rounded-md absolute mt-8 object-cover'  style={{ top: '30%', left: '15%' }} />
            </Link>

            <Link href="branches/smallMediumBusiness" className="w-1/3 bg-gray-100 h-72 rounded relative mt-10">
                <h1 className='text-sky-40 text-left font-bold text-3xl lg:text-2xl mt-4 px-6'>Małe oraz średnie przedsiębiorstwa</h1> 
                <img src='/small_business.jpg' alt='smallMediumBusinesses' className='h-3/4 w-11/12 rounded-md absolute mt-8 object-cover'  style={{ top: '30%', left: '15%' }} />
            </Link>

            </div>

            <div className='flex space-x-24 mt-12 mb-4 px-16 justify-center'>
                <Link href="branches/researchAndDevelopment" className="w-1/3 bg-gray-100 h-72 rounded relative mt-10">
                    <h1 className='text-sky-40 text-left font-bold text-3xl lg:text-2xl mt-4 px-6'>Jednostki badawczo-rozwojowe</h1> 
                    <img src='/research.jpg' alt='researchAndDevelopment' className='h-3/4 w-11/12 rounded-md absolute mt-6 object-cover'  style={{ top: '30%', left: '15%' }} />
                </Link>

                <Link  href="branches/localGovernment" className="w-1/3 bg-gray-100 h-72 mt-10 rounded relative mb-10">
                    <h1 className='text-sky-40 text-left font-bold text-3xl lg:text-2xl mt-4 px-6'>Jednostki samorządowe</h1> 
                    <img src='/government.jpg' alt='localGovernments' className='h-3/4 w-11/12 rounded-md absolute mt-6 object-cover'  style={{ top: '30%', left: '15%' }} />
                </Link>
            </div>
        </div>
    </section>
  )
}

export default BranchesInfo