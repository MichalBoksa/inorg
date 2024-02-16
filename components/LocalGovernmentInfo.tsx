import React from 'react'

const LocalGovernmentInfo = () => {
  return (
    <section className='mb-4'>
         <div className="flex justify-left ml-20 mb-10 mt-6" >
        <h1 className='text-blue-80 font-bold text-3xl lg:text-6xl '>Jednostki samorządowe</h1>
      </div>

      <div className='flex w-full max-h-[350px] justify-center px-20' >
        <img src='/local_government_bg.jpg' alt='local government' className='object-cover w-full rounded' />
      </div> 


        <div className='flex space-x-20 mb-4 px-16 justify-center'>

         <div className=' w-1/2 flex flex-col mt-4 rounded py-6'>

            <div className='bg-gray-200 flex flex-col mr-20 mt-4 rounded px-8 py-6'>
                <p className='text-sky-40 text-justify font-semibold text-m lg:text-l  '>W dynamicznie rozwijającym się otoczeniu pojawiają się nowe zadania i wyzwania dla jednostek samorządu terytorialnego.</p>
                <p className='text-sky-40 text-justify font-semibold text-m lg:text-l mt-6 '>W odpowiedzi na obserwowaną od kilkunastu lat pozytywną zmianę podejścia do organizacji i zarządzania w jednostkach samorządu terytorialnego, jako firma doradcza z 30-letnim doświadczeniem (w tym od przeszło 20-stu lat pracujemy również dla jednostek samorządowych) oferujemy szereg produktów, dostosowanych do specyficznych potrzeb urzędów miast, gmin i starostw powiatowych.</p>
            </div>

            <div className='flex w-full mt-4 justify-center px-12' >
              <img src='/big_business2.jpg' alt='big company' className='object-cover w-full rounded' />
            </div>

            <div className='bg-gray-200 flex flex-col ml-20 mt-4 rounded px-8 py-6 items-end'>
                <p className='text-white text-justify font-semibold text-m lg:text-l  '>Aktualnie wśród naszych klientów znajdują się zarówno międzynarodowe oraz krajowe grupy kapitałowe, spółki skarbu państwa, jak i zbudowane w oparciu o prywatny kapitał, spółki notowane na GPW itp. Z naszymi klientami z grupy dużych przedsiębiorstw budujemy zwykle strategiczne więzi i partnerskie relacje, w celu maksymalizacji wzajemnych korzyści, co potwierdzają liczne referencje zdobyte w trakcie prawie 30 lat działalności.</p>
            </div>
        </div>

        <div className=' w-1/2 mt-4 rounded py-6'>
        <div className=' flex flex-col bg-gray-500 ml-20 mt-4 rounded px-8 py-6 '>
             <p className='text-sky-40 text-justify font-bold text-m lg:text-l  '>Dotychczas mieliśmy zaszczyt i przyjemność współpracować z kilkudziesięcioma jednostkami samorządowymi. Obserwując dynamiczne zmiany w ich otoczeniu (ze szczególnym uwzględnieniem otoczenia gospodarczego i prawnego), oferujemy usługi ściśle dostosowane do potrzeb urzędów, związane z:</p>

                <div className="flex flex-col justify-center mb-2 mt-8 text-white font-semibold text-3xl lg:text-base break-afrer-column  text-justify " >
                                <p className='mb-4'>➱ Kreowaniem strategii miasta/gminy i urzędu, pod kątem osiągnięcia efektów synergii, skali i specjalizacji)</p>
                                <p className='mb-4'>➱ Audytem i optymalizacją systemu organizacji i zarządzania urzędu</p> 
                                <p className='mb-4'>➱ Wartościowaniem stanowisk pracy</p> 
                                <p className='mb-4'>➱ Budowaniem systemów ocen pracowników</p> 
                                <p className='mb-4'>➱ Budowaniem proefektywnościowej kultury organizacyjnej poprzez badanie klimatu organizacyjnego, poprawę satysfakcji pracowników oraz podnoszenie kompetencji osobowościowych (tzw. miękkich) kierowników komórek organizacyjnych w urzędach</p> 
                                <p className='mb-4'>➱ Doskonaleniem kontroli zarządczej w jednostkach samorządowych</p> 
                                <p className='mb-4'>➱ Wdrażaniem zarządzania ryzykiem w jednostkach samorządu</p> 
                                <p className='mb-4'>➱ Wdrażaniem systemów zarządzania zgodnością (compliance), jako skutecznego narzędzia zapobiegania korupcji i nieetycznym zachowaniom przedstawicieli urzędu i jego partnerów</p> 
                                <p className='mb-4'>➱ Wdrażaniem systemów ochrony danych osobowych (RODO)</p> 
                </div>
        </div>
        </div>
        </div>
    </section>
  )
}

export default LocalGovernmentInfo