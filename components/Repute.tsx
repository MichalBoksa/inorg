import React from 'react'


const Repute = () => {
  return (
    <section className='mt-4'>
      <div className=' flex items-center max-container padding-container relative z-30'>
        <div className='flex flex-col justify-center items-start md:w-3/5'>
          <h1 className='text-3xl md:text-5xl font-bold text-blue-80 text-center lg:mb-8 mb-4 '>Renoma marki i kompetencje Instytutu</h1>
          <p className='text-base text-left font-bold text-gray-500 py-5 px-8'>Instytut Organizacji INORG założony został w 1987 roku przez grupę ekspertów Towarzystwa Naukowego Organizacji i Kierownictwa, których strategia polegała na wykorzystaniu bogatej wiedzy merytorycznej i doświadczenia w działalności doradczej dla
przedsiębiorstw. Od tego czasu oferujemy
profesjonalne wsparcie dla firm, jednostek
samorządowych, instytutów naukowych i innych
organizacji.Od roku 2024, podążając za światową ideą zrównoważonej przyszłości, specjalizujemy się w zakresie promocji i wsparcia modeli biznesowych w obszarze gospodarki o obiegu zamkniętym. Pomagamy podmiotom
 wspólnie dbać o lepsze jutro i nadążać za dynamicznie zmieniającym otoczeniem.”
</p>
      
        </div>

        <div className='hidden md:flex justify-center items-center w-2/5 px-5 py-10 ' >
          <img src='/nature1.jpg' alt='repute' className='rounded-lg w-full ' />
        </div>

      </div>
    </section>
  )
}

export default Repute