import React from 'react'

const ManagmentInfo = () => {
  return (
   <section className='mb-4'>

<div className="flex justify-left ml-20 mb-10 mt-6" >
         <h1 className='text-blue-80 font-bold text-3xl lg:text-6xl '>Rada Naukowo - Programowa</h1>
    </div>

    <div className="flex w-full py-4 ml-20 mb-6 mt-6" >
        <img src='/henryk_promny.jpg' alt='henryk_promny' className='h-72 w-56 rounded object-cover' />

        <div className='flex flex-col ml-4 '>
            <h1 className='text-blue-80 font-bold text-3xl lg:text-3xl'>dr inż. Henryk promny</h1>
            <h3 className='text-blue-80 text-2xl lg:text-xl'>Przewodniczący Rady Naukowo-Programowej</h3>
         </div>
    </div>

    <div className="flex ml-auto max-w-[60%] bg-sky-40 py-4 rounded justify-end mr-10 mb-6" >
    <div className='mr-10'>
            <h1 className='text-white font-bold text-3xl lg:text-3xl'>Barbara Hliniak</h1>
            <h3 className='text-white text-2xl lg:text-xl'>Członek Rady Naukowo-Programowej</h3>
         </div>

        <img src='/barbara_hliniak.jpg' alt='grazyna_hliniak' className='h-72 w-56 rounded object-cover mr-10 ' />
    </div>


    <div className="flex w-full py-4 ml-20 mb-6 mt-6" >
        <img src='/grazyna_winiowska.jpg' alt='grazyna_winiowska' className='h-72 w-56 rounded object-cover' />

        <div className='flex flex-col ml-4 '>
            <h1 className='text-blue-80 font-bold text-3xl lg:text-3xl'>Grażyna Winiowska</h1>
            <h3 className='text-blue-80 text-2xl lg:text-xl'>Członek Rady Naukowo-Programowej</h3>

         </div>
    </div>


    <div className="flex ml-auto max-w-[60%] bg-sky-40 py-4 rounded justify-end mr-10 mb-6" >
    <div className='flex flex-col mr-4 '>
            <h1 className='text-white font-bold text-3xl lg:text-3xl'>Ewa Frycz</h1>
            <h3 className='text-white text-2xl lg:text-xl'>Członek Rady Naukowo-Programowej</h3>
         </div>

        <img src='/ewa_frycz.jpg' alt='ewa_frycz' className='h-72 w-56 rounded object-cover mr-10' />
    </div>
    

    <div className="flex w-full py-4 ml-20 mb-6 mt-6" >
        <img src='/jerzy_kozak.jpg' alt='jerzy_kozak' className='h-72 w-56 rounded object-cover' />

        <div className='flex flex-col ml-4 '>
            <h1 className='text-blue-80 font-bold text-3xl lg:text-3xl'>Jerzy Kozak</h1>
            <h3 className='text-blue-80 text-2xl lg:text-xl'>Członek Rady Naukowo-Programowej</h3>
         </div>
    </div>


    <div className="flex ml-auto max-w-[60%] bg-sky-40 py-4 rounded justify-end mr-10 mb-6" >
    <div className='flex flex-col mr-4 '>
            <h1 className='text-white font-bold text-3xl lg:text-3xl'>dr Dariusz Pohl</h1>
            <h3 className='text-white text-2xl lg:text-xl'>Członek Rady Naukowo-Programowej</h3>

         </div>

        <img src='/dariusz_pohl.jpg' alt='dariusz_pohl' className='h-72 w-56 rounded object-cover mr-10' />
    </div>

    </section>
  )
}

export default ManagmentInfo