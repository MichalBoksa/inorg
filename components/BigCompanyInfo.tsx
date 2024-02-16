import React from 'react'

const BigCompanyInfo = () => {
  return (
    <section className='mb-4'>
           <div className="flex justify-left ml-20 mb-10 mt-6" >
         <h1 className='text-blue-80 font-bold text-3xl lg:text-6xl '>Duże przedsiębiorstwa i grupy kapitałowe</h1>
    </div>

    <div className='flex w-full max-h-[350px] justify-center px-20' >
         <img src='/big_company_bg.jpg' alt='big company' className='object-cover w-full rounded' />
       </div>

       <div className='flex space-x-20 mb-4 px-16 justify-center'>

         <div className=' w-1/2 flex flex-col mt-4 rounded py-6'>

            <div className='bg-gray-200 flex flex-col mr-20 mt-4 rounded px-8 py-6'>
                <p className='text-sky-40 text-justify font-semibold text-m lg:text-l  '>Od 30 lat stosujemy indywidualne podejście do rozwiązywania problemów naszych klientów, aby w możliwie najlepszy sposób zidentyfikować i zaspokoić ich potrzeby. W początkowych latach funkcjonowania Instytutu, oferta skierowana była głównie do największych polskich przedsiębiorstw chemicznych (tzw. firm Wielkiej Syntezy Chemicznej). Następnie do grona naszych klientów dołączyły największe przedsiębiorstwa w Polsce, z branż energetycznej oraz ciepłowniczej, TSL (transport-spedycja-logistyka), zbrojeniowej, maszynowej, hutniczej oraz innych gałęzi przemysłu ciężkiego, a także spółki komunalne.</p>
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
             <p className='text-sky-40 text-justify font-bold text-m lg:text-l  '>W skład naszych stałych współpracowników wchodzą niezależni eksperci, tacy jak:</p>

        <div className="flex flex-col justify-center mb-2 mt-8 text-white font-semibold text-3xl lg:text-base break-afrer-column  text-justify " >
                        <p className='mb-4'>➱ Audyt i doskonalenie organizacji (w szczególności specjalizujemy się w integracji organizacyjnej grup kapitałowych, pod kątem osiągnięcia efektów synergii, skali i specjalizacji)</p>
                        <p className='mb-4'>➱ Analizy porównawcze i benchmarkingowe dotyczące organizacji, zatrudnienia oraz efektywności wybranych procesów</p>
                        <p className='mb-4'>➱ Budowanie proefektywnościowej kultury organizacyjnej (w tym szkolenia dla menedżerów, specjalistów itp.)</p> 
                        <p className='mb-4'>➱ Restrukturyzacja wybranych procesów (w tym w szczególności procesów zarządzania produkcją, zarządzania majątkiem trwałym produkcyjnym, zarządzania rozwojem B+R+I, zarządzania zasobami ludzkimi)</p> 
                        <p className='mb-4'>➱ Kreowanie i wdrażania strategii firmy</p> 
                        <p className='mb-4'>➱ Zarządzanie zgodnością (compliance)</p> 
                        <p className='mb-4'>➱ Zarządzanie ryzykiem</p> 
                        <p className='mb-4'>➱ Wdrażanie organizacji audytu wewnętrznego</p>
                        <p className='mb-4'>➱ Projektowanie centrów R&D (od modelu organizacyjno-biznesowego do dokumentacji wdrożeniowej) w firmach przemysłowych</p> 
                        <p className='mb-4'>➱ Kontroling strategiczny (analizy i raportowanie realizacji celów i planów rozwoju, analizy efektywności procesów gospodarczych i zasobów firmy)</p> 
                        <p className='mb-4'>➱ Analizy przedsięwzięć rozwojowych (opracowanie analiz marketingowych, finansowych, biznesplanów i studiów wykonalności inwestycji)</p> 
                </div>
        </div>
        </div>
        </div>
    </section>
  )
}

export default BigCompanyInfo