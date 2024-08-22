"use client";
import { NavLink } from '../lang/LocaleData';
import Link from "next/link"
import { useLocale } from '../lang/LocaleContext';
import { useEffect, useState } from 'react';
import { LANGUAGES } from '@/constants';
import { CldImage } from 'next-cloudinary';

const Navbar = () => {

  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const { DATA, setLocale, currentLocale  } = useLocale() || {};
  const [currentLanguage, setCurrentLanguage] = useState('PL');

  const handleLanguageChange = (lang: string) => {
    const selectedLanguage = LANGUAGES.find(language => language.code === lang);
    setSideMenuOpen(false);
    setLocale(lang);
    setCurrentLanguage(selectedLanguage?.label || 'PL');
  };

  useEffect(() => {
    const selectedLanguage = LANGUAGES.find(lang => lang.code === currentLocale);
    setCurrentLanguage(selectedLanguage?.label || 'EN');
  }, [currentLocale]);

  const handleClick = () => {
    const elem = document.activeElement as HTMLElement;
    if (elem) {
      elem?.blur();
    }
    setSideMenuOpen(false);
  };

  return (
    <nav className="flex items-start max-container padding-container relative z-30 py-5">
        <Link href="/" className="mr-auto object-cover">
        {currentLocale === 'pl' ? (  <CldImage src="https://res.cloudinary.com/dvbvaj9hu/image/upload/v1234/INORG/gbiuvxkdbtzfwwfzkz1a.svg" alt="INORG Logo" width={75} height={30} />)
      :
         ( <CldImage src="https://res.cloudinary.com/dvbvaj9hu/image/upload/v1234/INORG/wspolpraca/fbed3oncnbmwmwlwm6fy.svg" alt="INORG Logo" width={90} height={100} />)
      }
        </Link>

        <div className="border-b-2 border-b-primary">
            <ul className="hidden lg:flex h-full md:gap-3 lg-gap-3 xl:gap-6">
              {DATA?.NAV_LINKS.map((link:NavLink) => link.key !== 'products' && link.key !== 'recommendation' ? ( 
                <Link key={link.label} href={link.href}  onClick={handleClick} > <div className="lg:text-nowrap text-base lg:font-bold text-default flexCenter cursor-pointer pb-1.5 transition-all mr-4">
                  {link.label}
                  </div>
                </Link>
              ) : link.key === 'recommendation' ?
              (<div key={link.label} className="dropdown dropdown-hover">
                <div tabIndex={0} className="lg:text-nowrap text-base lg:font-bold text-default cursor-pointer mr-4">
                  {link.label}
                </div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-32"
                >
                  {DATA?.RECOMMENDATIONS.map((recommendation, index) => (
                    <Link href={recommendation.href} key={index}>
                      <li onClick={handleClick} className="text-wrap cursor-pointer text:md font-semibold h-12 sm:h-14 md:h-16 lg:h-14 xl:h-14 flex items-left justify-center">
                        <p>{recommendation.label}</p>
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
              ) :
              (<div key={link.label} className="dropdown dropdown-hover">
                <div tabIndex={0} className="lg:text-nowrap text-base lg:font-bold text-default cursor-pointer mr-4">
                  {link.label}
                </div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-44">
                  {DATA?.PRODUCTS.map((product, index) => (
                    <Link href={product.href} key={index}>
                      <li onClick={handleClick} className="text-wrap cursor-pointer text:md font-semibold h-12 sm:h-14 md:h-16 lg:h-14 xl:h-14 flex items-left justify-center">
                        <p>{product.name}</p>
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>) 
              
              )}
            <div className="dropdown dropdown-hover">
            <div tabIndex={0} className="lg:text-nowrap lg:text-base lg:font-bold text-default cursor-pointer mr-4 ">{currentLanguage}</div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-18 right-05 ">
              {LANGUAGES.map((lang) => (
                <li key={lang.code} onClick={() => handleLanguageChange(lang.code)} className="flexCenter text-wrap cursor-pointer pb-1.5 text:md xl:text-lg">
                  <p>{lang.label}</p>
                </li>
              ))}
            </ul>
          </div>
            </ul>
        </div>

        {sideMenuOpen && (
         <div className="lg:hidden relative flex flex-col h-[calc(100vh-96px)] top-24 left-0 w-full justify-items-center items-center gap-12">
         
         {DATA?.NAV_LINKS.map((link:NavLink) => link.key !== 'products' && link.key !== 'recommendation' ? ( 
                <Link key={link.label} href={link.href}  onClick={handleClick} > <div className="lg:text-nowrap text-base xl:text-base lg:font-bold text-default flexCenter cursor-pointer pb-1.5 transition-all mr-4">
                  {link.label}
                  </div>
                </Link>
              ) : link.key === 'recommendation' ?
              (<div key={link.label} className="dropdown">
                <div tabIndex={0} className="lg:text-nowrap text-base xl:text-base lg:font-bold text-default cursor-pointer mr-4">
                  {link.label}
                </div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-32"
                >
                  {DATA?.RECOMMENDATIONS.map((recommendation, index) => (
                    <Link href={recommendation.href} key={index}>
                      <li onClick={handleClick} className="text-wrap cursor-pointer text:md font-semibold h-12 sm:h-14 md:h-16 lg:h-14 xl:h-14 flex items-left justify-center">
                        <p>{recommendation.label}</p>
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
              ) :
              (<div key={link.label} className="dropdown">
                <div tabIndex={0} className="lg:text-nowrap text-base xl:text-base lg:font-bold text-default cursor-pointer mr-4">
                  {link.label}
                </div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-44">
                  {DATA?.PRODUCTS.map((product, index) => (
                    <Link href={product.href} key={index}>
                      <li onClick={handleClick} className="text-wrap cursor-pointer text:md font-semibold h-12 sm:h-14 md:h-16 lg:h-14 xl:h-14 flex items-left justify-center">
                        <p>{product.name}</p>
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>) 
              
              )}
               <div className="dropdown">
            <div tabIndex={0} className="lg:text-nowrap lg:text-md xl:text-lg lg:font-bold text-default cursor-pointer mr-4 left-8">{currentLanguage}</div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-18 right-05">
              {LANGUAGES.map((lang) => (
                <li key={lang.code} onClick={() => handleLanguageChange(lang.code)} className="flexCenter text-wrap cursor-pointer pb-1.5 text:md xl:text-lg">
                <p>{lang.label}</p>
              </li>
              ))}
            </ul>
          </div>            
         </div>       
         )}
        
        
        <div className="flex cursor-pointer items-right lg:hidden ml-auto items-center justify-center mr-5 mt-4" onClick={() => setSideMenuOpen(!sideMenuOpen) }>
            <CldImage
            src="https://res.cloudinary.com/dvbvaj9hu/image/upload/v1234/INORG/ifk41bpjo3mpr64raeiu.svg"
            alt="Menu"
            width={35}
            height={30}
            className="w-full h-full" />
        </div>
        
    </nav>
  )
}

export default Navbar