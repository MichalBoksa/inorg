import { efects } from '@/constants'
import React from 'react'

const AuditInfo = () => {
  return (
    <section className='mb-4'>
    <div className="flex justify-left ml-20 mb-10 mt-6" >
  <h1 className='text-blue-80 font-bold text-3xl lg:text-6xl '>Audyt oraz doskonalenie organizacji</h1>
</div>

<div className='flex w-full max-h-[350px] justify-center px-20' >
  <img src='/audit_bg.jpg' alt='audit' className='object-cover w-full rounded' />
</div>

<div className='flex space-x-20 mb-4 px-16 justify-center'>

  <div className=' w-1/2 flex flex-col mt-4 rounded py-6'>

     <div className='bg-gray-200 flex flex-col mt-4 rounded px-8 py-6'>
         <p className='text-sky-40 text-justify font-bold text-m lg:text-l  '>Cel prac:</p>
         <p className='text-sky-40 text-justify font-semibold text-m lg:text-l mt-3 '>Audyt oraz określenie kierunków doskonalenia systemu organizacji i zarządzania ze szczególnym uwzględnieniem struktur organizacyjnych, podziału obowiązków oraz zarządzania głównymi procesami (nadzór, przepływy decyzji i informacji, współpraca).</p>
     </div>


     <div className='flex w-full mt-4 justify-center px-8' >
       <img src='/big_business2.jpg' alt='big company' className='object-cover w-full rounded' />
     </div>

     <div className='bg-gray-200 flex flex-col mt-4 rounded px-6 py-6'>
         <p className='text-sky-40 text-justify font-bold text-m lg:text-l  '>Zakres prac:</p>
         <p className='text-white text-justify font-semibold text-m lg:text-l mt-3'>Zakres każdego projektu dostosowywany jest indywidualnie do specyficznych potrzeb zamawiającego, ale jako przykład programu prac można wskazać przedstawione poniżej etapy.</p> 
   
            <div className='text-sky-40 font-semibold mt-5 px-6 py-6'>
                <ol className='flex flex-col list-decimal'>
                    <li className='mb-4'> Punktem wyjścia jest audyt, ewaluacja i diagnoza silnych i słabych stron systemu organizacji i zarządzania w odniesieniu do światowych trendów i standardów oraz innych podmiotów o zbliżonym profilu działalności ze szczególnym uwzględnieniem:
                        <span className='block ml-6 mt-2'>➱ kultury organizacyjnej (dominujący typ kultury vs. model określany na podstawie realizowanej strategii)</span>
                        <span className='block ml-6 mt-2'>➱ konfiguracji struktur organizacyjnych</span>
                        </li>

                    <li className='mb-4'>W wyniku przeprowadzonych analiz zaprojektowane są: sformułowanie założeń dla systemu organizacji i zarządzania – filozofia zarządzania i model organizacyjno-biznesowy, opisujący strategię zarządzania poszczególnymi głównymi procesami gospodarczymi i obszarami funkcjonalnymi firmy, który stanowi układ katalityczny dla przyjętych celów działania firmy, oraz sprzyja wykorzystaniu szans i odparciu zagrożeń w otoczeniu.
                        <span className='block ml-6 mt-2'>➱ struktura organizacyjna</span>
                        <span className='block ml-6 mt-2'>➱ podział funkcji dla komórek/pracowników w układzie procesowym (proefektywnościowym) z uwzględnieniem kompetencji kierowniczych, wykonawczych oraz wsparcia, a także współpracy między komórkami organizacyjnymi</span>
                        <span className='block ml-6 mt-2'>➱ dokumentacja organizacyjna/wdrożeniowa od regulaminu organizacyjnego do procedur i zakresów obowiązków pracowników.</span>
                    </li>

                    <li className='mb-4'>Po zakończeniu prac projektowych oferujemy wsparcie kierownictwa we wdrożeniu (szkolenia, konsultacje, wdrożenia systemów IT wspierających organizację w firmie) oraz bieżący audyt, konserwację i doskonalenie systemu organizacji i zarządzania (wprowadzanie zmian w dokumentacji, bieżący benchmarking procesów, wsparcie zmian kulturowych pracowników)</li>
                </ol>
            </div>
     </div>
 </div>

        <div className=' w-1/2 mt-4 rounded py-6'>
            <div className=' flex flex-col bg-gray-500 ml-20 mt-4 rounded px-8 py-6 '>
                <p className='text-sky-40 text-justify font-bold text-m lg:text-l  '>Na jakie pytania odpowiadamy:</p>

            <div className="flex flex-col justify-center mb-2 mt-8 text-white font-semibold text-3xl lg:text-base break-afrer-column  text-justify " >
                            <p className='mb-4'>➱ Czy organizacja firmy sprzyja przyjętej strategii i celom działania oraz zapewnieniu adekwatnej kontroli zarządczej?</p>
                            <p className='mb-4'>➱ Jaki typ nowoczesnej struktury organizacyjnej, stosowanej przez konkurentów, światowych liderów branży jest najbardziej optymalny (funkcjonalna, projektowa, dywizjonowa, procesowa itp.)?</p>
                            <p className='mb-4'>➱ Czy struktura organizacyjna nie jest za bardzo rozczłonkowana, rozbudowana?</p> 
                            <p className='mb-4'>➱ Czy organizacja pionów organizacyjnych (ze względu na ich profil funkcjonalny) jest optymalna?</p> 
                            <p className='mb-4'>➱ Jak w firmie działają systemy kontrolne (bezpieczeństwa), wspierające kierownictwo w dochowaniu należytej staranności w zapobieganiu incydentom związanym z naruszeniem prawa, odstąpienia od przyjętych zobowiązań i regulacji wewnętrznych, czy zachowań nieetycznych pracowników?</p> 
                            <p className='mb-4'>➱ Czy w pełni wykorzystuje się potencjał kierowników (w jakim stopniu kierownicy sprawują funkcje kierownicze, a w jakim pełnią rolę specjalistów)?</p> 
                            <p className='mb-4'>➱ Czy wspierana przez system organizacji kultura organizacyjna sprzyja właściwej odpowiedzi na wyzwania otoczenia oraz przyjętej strategii, a zarazem pozytywnie wpływa na satysfakcję i motywację pracowników?</p> 
                            <p className='mb-4'>➱ Czy realizowane funkcje są optymalnie podzielone między komórki organizacyjne?</p> 
                            <p className='mb-4'>➱ Czy w ramach realizacji funkcji opisano (sformalizowano) i zestandaryzowano zasady współpracy między komórkami organizacyjnymi?</p> 
                            <p className='mb-4'>➱ Jak przebiega koordynacja i realizacja procesów, które przecinają struktury i mają wielu wykonawców w różnych obszarach organizacyjnych (czy nadzór i koordynacja danego procesu nie powiela się/są właściwie sprawowane)?</p> 
                            <p className='mb-4'>➱ Na jakich procesach koncentruje się najwyższe kierownictwo i czy w wystarczającym stopniu może skupić się na kwestiach strategicznych?</p> 
                            <p className='mb-4'>➱ Czy w organizacji postawiono właściwe akcenty, które decydują o efektywności strategicznych procesów (o największym znaczeniu) – jaki jest poziom dojrzałości zarządzania głównymi procesami gospodarczymi?</p> 
                            <p className='mb-4'>➱ Czy poziom i alokacja potencjału ludzkiego odpowiada potrzebom organizacji?</p> 
                </div>
            </div>
        </div>
    </div>

        <div className='flex w-full max-h-[450px] justify-center px-10' >
             <img src='/audit_bg.jpg' alt='audit' className='object-cover w-full rounded' />
        </div>

        <div className='flex w-full px-10' >

            <div className='bg-sky-40 flex w-3/5 max-h-[700px] flex-col mt-auto mb-auto px-8 py-6 '>
                <p className='text-white text-justify font-bold text-m lg:text-l  '>Efekty racjonalizacji systemu organizacji i zarządzania:</p>

                <div className="flex flex-col justify-center mb-2 mt-8 ml-3 text-white text-3xl lg:text-base break-afrer-column text-left " >
                        <ol className='flex flex-col list-decimal'>
                         {efects.map((efect) => (
                            <li className='mb-4'>{efect}</li>
                        ))}
                            </ol>
                </div>

            </div>

             <div className='w-2/5 flex flex-col mt-4 px-8 py-6'>
                    <p className='text-sky-40 text-justify font-bold text-m lg:text-l  '>Korzyści dla Klienta:</p>
                    <p className='text-sky-40 text-justify font-semibold text-m lg:text-l mt-3'>Aktualnie, w szczególności specjalizujemy się, posiadamy unikalne modele, metody oraz bazę wiedzy (benchmarki, dobre praktyki, rozwiązania wdrażane w praktyce itp.) dla następujących grup klientów:</p>

                    <div className="flex flex-col mb-2 mt-8 ml-5 text-sky-40 text-3xl lg:text-base break-afrer-column text-start " >
                        <p className='mb-4'>➱ średnie i duże przedsiębiorstwa, polskie i międzynarodowe, z branż takich jak: chemia (w tym tzw. firmy Wielkiej Syntezy Chemicznej)</p>
                        <p className='mb-4'>➱ TSL (w szczególności transport kolejowy, drogowy, wodny oraz firmy spedycyjne)</p>
                        <p className='mb-4'>➱ energetyka</p> 
                        <p className='mb-4'>➱ ciepłownictwo</p> 
                        <p className='mb-4'>➱ przemysł zbrojeniowy</p>
                        <p className='mb-4'>➱ maszynowy</p> 
                        <p className='mb-4'>➱ elektrotechniczny</p> 
                        <p className='mb-4'>➱ firmy komunalne oraz inne firmy usługowe i przemysłowe</p>   
                        <p className='mb-4'>➱ instytuty badawcze oraz jednostki badawczo-rozwojowe przedsiębiorstw przemysłowych (centra B+R+I)</p> 
                        <p className='mb-4'>➱ biura projektowe (inżynierskie)</p> 
                        <p className='mb-4'>➱ grupy kapitałowe (specjalizujemy się w integracji grup kapitałowych i projektowaniu systemów organizacji z wieloma poziomami zarządzania)</p> 
                        <p className='mb-4'>➱ jednostki samorządowe (urzędy miast, gmin i starostwa powiatowe)</p> 
                   
                    </div>
            </div>
        </div>
</section>
  )
}

export default AuditInfo