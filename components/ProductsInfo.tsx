import React from 'react'
import Link from "next/link"

const ProductsInfo = () => {
  return (
   <section className='mb-4'>
    <div className="flex justify-left ml-20 mb-10 mt-6" >
         <h1 className='text-blue-80 font-semibold text-3xl lg:text-5xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl tracking-widest'>Produkty</h1>
    </div>

    <div className='flex w-full max-h-[350px] justify-center px-20' >
         <img src='/products_bg.jpg' alt='products' className='object-cover w-full rounded' />
       </div>

       <div className='bg-gray-200 rounded-xl flex flex-col mt-8 mb-20 px-8 mr-20 ml-20 '>

        <div className='flex lg:space-x-20 mt-8 mb-4 justify-center'>
            <Link href="products/audit" className='w-1/3 bg-gray-100 h-72 rounded relative mt-10 '> 
                <h1 className='text-sky-40 text-left font-bold text-3xl lg:text-xl mt-4 px-5'>Audyt oraz doskonalenie organizacji</h1> 
                <img src='/audit.jpg' alt='audit' className='h-3/4 w-11/12 rounded-md absolute mt-8 object-cover'  style={{ top: '30%', left: '15%' }} />
            </Link>

            <Link href="products/itSupport" className="w-1/3 bg-gray-100 h-72 rounded relative mt-10">
                    <h1 className='text-sky-40 text-left font-bold text-3xl lg:text-xl mt-4 px-5'>Wsparcie IT dla doskonalenia organizacji</h1> 
                    <img src='/it_support.jpg' alt='it_support' className='h-3/4 w-11/12 rounded-md absolute mt-6 object-cover'  style={{ top: '30%', left: '15%' }} />
              </Link>

            <Link href="products/processManagment" className='w-1/3 bg-gray-100 h-72 rounded relative mt-10 '> 
                <h1 className='text-sky-40 text-left font-bold text-3xl lg:text-xl mt-4 px-5'>Zarządzanie procesowe i restrukturyzacja wybranych procesów</h1> 
                <img src='/process_managment.jpg' alt='process_managment' className='h-3/4 w-11/12 rounded-md absolute mt-8 object-cover'  style={{ top: '30%', left: '15%' }} />
            </Link>


            </div>

            <div className='flex space-x-24 mt-12 mb-4 px-2 justify-center'>

              <Link href="products/compliance" className="w-1/3 bg-gray-100 h-60 rounded relative mt-10">
                  <h1 className='text-sky-40 text-left font-bold text-3xl lg:text-xl mt-4 px-5'>Compliance</h1> 
                  <img src='/compliance.jpg' alt='compliance' className='h-3/4 w-11/12 rounded-md absolute mt-2 object-cover'  style={{ top: '30%', left: '15%' }} />
              </Link>

                <Link  href="products/knowledgeBase" className="w-1/3 bg-gray-100 h-72 mt-10 rounded relative mb-10">
                    <h1 className='text-sky-40 text-left font-bold text-3xl lg:text-xl mt-4 px-5'>Baza wiedzy INORG</h1> 
                    <img src='/knowledge_base.jpg' alt='knowledge_base' className='h-3/4 w-11/12 rounded-md absolute mt-6 object-cover'  style={{ top: '30%', left: '15%' }} />
                </Link>

                <Link href="products/rodo" className="w-1/3 bg-gray-100 h-72 rounded relative mt-10">
                    <h1 className='text-sky-40 text-left font-bold text-3xl lg:text-xl mt-4 px-5'>RODO</h1> 
                    <img src='/rodo.jpg' alt='rodo' className='h-3/4 w-11/12 rounded-md absolute mt-6 object-cover'  style={{ top: '30%', left: '15%' }} />
                </Link>

                <Link  href="products/strategy" className="w-1/3 bg-gray-100 h-72 mt-10 rounded relative mb-10">
                    <h1 className='text-sky-40 text-left font-bold text-3xl lg:text-xl mt-4 px-5'>Strategia</h1> 
                    <img src='/strategy.jpg' alt='strategy' className='h-3/4 w-11/12 rounded-md absolute mt-6 object-cover'  style={{ top: '30%', left: '15%' }} />
                </Link>
            </div>

            <div className='flex space-x-32 mt-8 mb-4 px-16 justify-center'>
            <Link href="products/report" className="w-1/3 bg-gray-100 h-72 rounded relative mt-10">
                <h1 className='text-sky-40 text-left font-bold text-3xl lg:text-xl mt-4 px-5'>Raprot o Przemyśle Chemicznym</h1> 
                <img src='/report.jpg' alt='report' className='h-3/4 w-11/12 rounded-md absolute mt-8 object-cover'  style={{ top: '30%', left: '15%' }} />
            </Link>


            <Link href="products/positionEvaluation" className='w-1/3 bg-gray-100 h-72 rounded relative mt-10 '> 
                <h1 className='text-sky-40 text-left font-bold text-3xl lg:text-xl mt-4 px-5'>Wartościowanie stanowisk pracy</h1> 
                <img src='/position_evaluation.jpg' alt='position_evaluation' className='h-3/4 w-11/12 rounded-md absolute mt-8 object-cover'  style={{ top: '30%', left: '15%' }} />
            </Link>

            <Link href="products/organizationalCulture" className="w-1/3 bg-gray-100 h-72 rounded relative mt-10">
                <h1 className='text-sky-40 text-left font-bold text-3xl lg:text-xl mt-4 px-5'>Budowanie proefektywnościowej kultury organizacyjnej</h1> 
                <img src='/organizational_culture.jpg' alt='organizational_culture' className='h-3/4 w-11/12 rounded-md absolute mt-8 object-cover'  style={{ top: '30%', left: '15%' }} />
            </Link>

            </div>
        </div>

    </section>
  )
}

export default ProductsInfo