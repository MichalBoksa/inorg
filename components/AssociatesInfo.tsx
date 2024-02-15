import React from 'react'

const AssociatesInfo = () => {
  return (
    <section className='mb-4'>
    <div className="flex justify-left ml-20 mb-10 mt-6" >
     <h1 className='text-blue-80 font-bold text-3xl lg:text-6xl '>Nasi współpracownicy</h1>
</div>

<div className='flex w-full max-h-[350px] justify-center px-20' >
     <img src='/associates_bg.jpg' alt='associates' className='object-cover w-full rounded' />
   </div>

   <div className='flex space-x-20 mt-8 mb-4 px-16 justify-center flex-grow'>

    <div className='bg-gray-200 w-1/2 flex flex-col ml-20 mt-4 rounded px-8 py-6'>
         <p className='text-sky-40 text-justify font-bold text-m lg:text-l  '>W grupie naszych stałych partnerów, z którymi współpracujemy w trakcie realizacji projektów znajdują się:</p>

    <div className="flex flex-col mb-2 mt-8 ml-3 text-sky-40 text-3xl lg:text-base break-afrer-column text-start " >
                    <p className='mb-4'>➱ Jednostki badawczo rozwojowe (instytuty, uczelnie wyższe takie jak: Uniwersytet Ekonomiczny im. Karola Adamieckiego w Katowicach, Politechnika Śląska) </p>
                    <p className='mb-4'>➱ Biura inżynierskie</p>
                    <p className='mb-4'>➱ Renomowane firmy doradcze</p>
                    <p className='mb-4'>➱ Biura rachunkowe</p> 
                    <p className='mb-4'>➱ Biura prawne</p> 
                    <p className='mb-4'>➱ Firmy z brany IT</p>  
            </div>
    </div>


    <div className='bg-gray-200 w-1/2 flex flex-col ml-20 mt-4 rounded px-8 py-6 max-h-[300px]'>
    <p className='text-sky-40 text-justify font-bold text-m lg:text-l  '>W skład naszych stałych współpracowników wchodzą niezależni eksperci, tacy jak:</p>

    <div className="flex flex-col justify-center mb-2 mt-8 ml-3 text-sky-40 text-3xl lg:text-base break-afrer-column  text-justify " >
                    <p className='mb-4'>➱ Psycholodzy, trenerzy, eksperci ds. HR</p>
                    <p className='mb-4'>➱ Pracownicy naukowi</p>
                    <p className='mb-4'>➱ Eksperci ds. bizensowych</p> 
                    <p className='mb-4'>➱ Specjaliści branż, w których działają nasi Klienci</p> 
            </div>
    </div>

</div>
</section>
  )
}

export default AssociatesInfo