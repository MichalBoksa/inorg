import React from 'react'

const SmallBusinessInfo = () => {
  return (
    <section className='mb-4'>
      <div className="flex justify-left ml-20 mb-10 mt-6" >
        <h1 className='text-blue-80 font-bold text-3xl lg:text-6xl '>Małe oraz średnie przedsiębiorstwa</h1>
      </div>

      <div className='flex w-full max-h-[350px] justify-center px-20' >
        <img src='/small_business_bg.jpg' alt='small business' className='object-cover w-full rounded' />
      </div> 

        <div className=' flex mt-4 space-x-20 justify-center rounded px-20 py-6'>

          <div className='bg-gray-200 w-1/2 flex flex-col max-h-[700px] mt-32 mb-32 rounded px-8 py-6'>
            <p className='text-sky-40 text-left font-semibold text-m lg:text-l  '>Naszą ofertę dla małych i średnich przedsiębiorstw kreujemy równie dynamicznie, jak zmieniają się potrzeby tej grupy naszych Klientów. Współpracujemy z przedsiębiorstwami produkcyjnymi, handlowymi oraz świadczącymi usługi budowlane, remontowe (w tym remonty techniczne dla firm przemysłowych), medyczne, logistyczne i inne. Do naszych Klientów należą producenci z branż, takich jak: </p>
          
            <div className="flex flex-col justify-center mb-2 mt-8 text-white font-semibold text-3xl lg:text-base break-afrer-column  text-justify " >
                        <p className='mb-4'>➱ Odlewnicza</p> 
                        <p className='mb-4'>➱ Elektrotechniczna (produkcja elementów elektronicznych)</p> 
                        <p className='mb-4'>➱ Maszynowa</p> 
                        <p className='mb-4'>➱ Branża inżynierii sanitarnej HVAC (ang. Heating, Ventilation, Air Conditioning)</p>
                        <p className='mb-4'>➱ Produkcji konstrukcji metalowych</p> 
                        <p className='mb-4'>➱ Farmaceutyczna</p> 
                        <p className='mb-4'>➱ IT</p> 
                        <p className='mb-4'>➱ Lakiernicza</p> 
                </div>
          </div>


          <div className='bg-gray-500 w-1/2 flex flex-col rounded px-8 py-6 '>
            <p className='text-white text-left font-semibold text-m lg:text-l  '>Dla MSP budujemy ponadto kompleksową ofertę wraz z naszymi partnerami specjalizującymi się w usługach prawnych, finansowo-księgowych, systemach ISO 9001, pozyskiwaniu dotacji z funduszy UE.</p>
            <p className='text-white text-left font-semibold text-m lg:text-l mt-6'>Najczęściej realizowane przez nas projekty dla MSP obejmują, takie zagadnienia jak:</p>
            
            <div className="flex flex-col justify-center mb-2 mt-8 text-sky-40 font-semibold text-3xl lg:text-base break-afrer-column  text-left " >
                        <p className='mb-4'>➱ Projektowanie organizacji nowych firm</p> 
                        <p className='mb-4'>➱ Kreowanie strategii ogólnych, marketingowych, wzorniczych itp.</p> 
                        <p className='mb-4'>➱ Audyt i rozwiązywania specyficznych potrzeb organizacyjnych i poprawy efektywności wybranych procesów już istniejących przedsiębiorstw</p> 
                        <p className='mb-4'>➱ Wdrażanie procedur ochrony danych osobowych (RODO)</p>
                        <p className='mb-4'>➱ Wdrażanie nowoczesnych narzędzi zarządzania, takich jak lean management, zarządzanie ryzykiem, czy zintegrowane systemy zarządzania oparte na normach ISO</p> 
                        <p className='mb-4'>➱ Opracowanie ekspertyz i analiz niezbędnych MSP do pozyskania dotacji lub potwierdzenia wdrożenia określonych rozwiązań</p> 
                        <p className='mb-4'>➱ Prowadzenie analiz ryzyka</p> 
                        <p className='mb-4'>➱ Wsparcie przedsiębiorstwa w zarządzaniu projektami badawczymi i rozwojowymi (również finansowanymi ze środków UE)</p> 
                        <p className='mb-4'>➱ Prowadzenie badań marketingowych</p> 
                        <p className='mb-4'>➱ Szkolenia i warsztaty dla kadry menedżerskiej lub wybranych specjalistów</p> 
                </div>
            </div>
        </div>
   
    </section>
  )
}

export default SmallBusinessInfo