import { potentialEmployees } from '@/constants'
import React from 'react'

const JoinUsInfo = () => {
  return (
   <section className='mb-10'>
    <div className='flex max-container w-full lg:min-h-[500px] max-w-[60%] '>
        <div className='grid>'>
            <div className="flex justify-center mb-8 mt-12" >
                <h1 className='text-blue-80 font-bold text-3xl lg:text-6xl '>Dołącz do nas</h1>
            </div>
            <div className=' text-blue-80 flex lg:px-48 px-30 ml-12 mr-12 mb-20 '>
                <p className='text-center font-bold text-m lg:text-l  '>Nasz przepis na sukces na rynku to umiejętne połączenie wiedzy i doświadczenia praktycznego oraz kreatywność i entuzjazm.</p>
            </div>

            <div className='text-blue-80 flex lg:px-36 px-30 ml-12 mr-12 mb-6 '>
                <p className='text-center font-bold text-m lg:text-l  '>Tworząc zespół ekspertów o wysokich kwalifikacjach, którzy stale rozwijają swoje kompetencje, poszerzają swoje doświadczenie, prezentując wyjątkową elastyczność w sposobie rozwiązywania problemów klientów przy zachowaniu najwyższych standardów etyki biznesu, zapraszamy do współpracy zarówno doświadczonych specjalistów, jak i młode i kreatywne osoby, chcące zdobyć doświadczenie i poszerzyć swoje kwalifikacje w obszarze organizacji i zarządzania oraz ekonomii.</p>
            </div>
      </div>

        <div className='flex max-w-[40%]' >
          <img src='/nature1.jpg' alt='joinUs' className='w-full h-full' />
        </div>
    </div>


    <div className='flex bg-sky-40 max-container w-full max-w-[60%] max-h-[700px]'>
        <div className='grid>'>
            <div className="flex justify-center mb-24 mt-8 lg:px-16 text-center" >
                <p className='text-white text-3xl lg:text-base '>Naszym pracownikom i współpracownikom oferujemy szybką ścieżkę rozwoju, zdobycie wiedzy praktycznej i teoretycznej w zakresie stosowania najnowszych metod organizatorskich.</p>
            </div>
            <div className='flex lg:px-48 px-8 mb-16'>
                <p className=' text-white text-center font-extrabold text-m lg:text-l  '>W związku ze stałym poszukiwaniem dróg rozwoju, wchodzeniem na coraz to nowe rynki, jak i wprowadzaniem do oferty nowych usług zapraszamy do współpracy:</p>
            </div>

           
         <div className='flex flex-col px-28 text-center' >
                <ul className='grid'>
                {potentialEmployees.map((potentialEmployee) => (
                    <li className='text-white font-bold text-m mb-4'>{potentialEmployee}</li>
                ))}
                </ul>
            </div>
         </div>

        <div className='bg-white flex flex-col max-w-[40%] lg:px-8' >
            <div className="flex justify-center mb-4 mt-8 lg:px-8 text-center" >
                    <p className='text-blue-80 text-3xl lg:text-base  font-bold'>Chętnie wspieramy rozwój naukowy naszych pracowników (np. w drodze studiów doktoranckich i MBA).</p>
            </div>

            <div className=" flex lg:max-h-[30%]" >
                 <img src='/nature1.jpg' alt='joinUs' className='w-full h-full py-2 ' />
             </div>

                <div className="flex flex-col justify-center mb-4 mt-8 text-blue-80 text-3xl lg:text-base break-afrer-column font-bold text-center" >
                        <p className=''>Interesujesz się marketingiem, ekonomią, zarządzaniem? </p>
                        <p>Chcesz zdobyć najwyższe kwalifikacje w konsultingu i zarządzaniu projektami doradczymi?</p>
                             <p>Potrzebujesz ciekawego pola badawczego do prac naukowych?</p> 
                              <p> Chcesz podzielić się swoim doświadczeniem, aby pomóc przedsiębiorstwom doskonalić swoją organizację?</p>
                </div>

                <div className="flex justify-center mt-8 text-center" >
                    <p className='text-blue-80 text-3xl lg:text-m font-bold'>Zapraszamy do współpracy!</p>
                 </div>
        </div>
    </div>
   </section>
  )
}

export default JoinUsInfo