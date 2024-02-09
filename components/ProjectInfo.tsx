import Link from 'next/link'
import React from 'react'

const ProjectInfo = () => {
  return (
    <section className='mb-10'>
         <div className="flex justify-center mb-16 mt-10" >
                <h1 className='text-blue-80 font-bold text-3xl lg:text-6xl '>Realizowane projekty UE</h1>
            </div>
            <div className='flex max-container w-full lg:min-h-[500px] max-w-[55%] '>
        <div className='grid>'>
           

            <div className=' text-blue-80 flex lg:px-28 px-10 ml-5 mr-5 mb-10 '>
                <p className='text-center font-bold text-m lg:text-l  '>Z ogromną przyjemnością informujemy o nowym przedsięwzięciu realizowanym przez Instytut Organizacji „INORG” Sp. z o.o. w ramach Programu Operacyjnego Inteligentny Rozwój 2014-2020, konkretnie Poddziałania 2.3.5 - Design dla przedsiębiorstw. Nasz projekt, noszący tytuł „Dywersyfikacja działalności INORG poprzez zaprojektowanie i wdrożenie innowacyjnego oprogramowania wspierającego systemy zarządzania zgodnie z normą ISO9001”, zyskał numer wniosku POIR.02.03.05-24-0019/18. Celem naszej inicjatywy jest stworzenie i wprowadzenie na rynek unikatowego produktu - nowoczesnego narzędzia IT, które umożliwi efektywne wdrażanie, administrowanie i rozwijanie systemów zarządzania certyfikowanych zgodnie z międzynarodową normą ISO9001. Dzięki temu projektowi, nasza firma nie tylko zdywersyfikuje swoją działalność, ale także znacząco zwiększy swoje przychody i zyski, budując trwałą przewagę konkurencyjną na rynku doradztwa.</p>
            </div>

            <div className='flex flex-col text-black font-bold lg:px-20 px-30 ml-12 mr-12 mb-10 break-after-column'>
                <p>➱ Koszt projektu (netto): 168 000.00 zł</p>
                <p>➱ Kwota dofinansowania: 136 800.00 zł</p>
                </div>

                <div className=' flex lg:px-32 mr-12 ml-12 mb-10'>
              <div className='' >
                <img src='/region_eu.jpg' alt='joinUs' className='w-full' />
            </div>
            <div className='' >
                <img src='/flag.jpg' alt='joinUs' className='w-full h-[80%] ' />
            </div>
            <div className='' >
              <img src='/eu.jpg' alt='joinUs' className='w-full h-[80%] ' />
            </div>

            </div>

                <div className=' text-blue-80 flex flex-col lg:px-20 px-10 ml-5 mr-5 mb-6 '>
                <p className='text-center font-bold text-m lg:text-l  '>Wszystkie postępowania przetargowe w ramach projektu realizowane są zgodnie z zasadą konkurencyjności i publikowane w zależności od wielkości zamówienia na stronie Beneficjenta lub w bazie konkurencyjności pod adresem:</p>
                <Link className='text-center' href= "https://bazakonkurencyjnosci.funduszeeuropejskie.gov.pl"> <p>https://bazakonkurencyjnosci.funduszeeuropejskie.gov.pl</p></Link>
            </div>

      </div>

        <div className='flex max-w-[40%]' >
          <img src='/nature1.jpg' alt='joinUs' className='w-full h-full' />
        </div>
    </div>
        </section>
  )
}

export default ProjectInfo