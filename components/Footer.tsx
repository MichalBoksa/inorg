'use client'; 
import Image from "next/image"
import Link from "next/link"
import React from 'react'
import { useLocale } from "@/lang/LocaleContext";
import { CldImage } from "next-cloudinary";

const Footer = () => {
  const { DATA } = useLocale();
  return (
   <footer className="bg-gray-80 flexCenter py-5 ">
    <div className="padding-container max-container flex w-full flex-col gap-5">
      <div className="flex flex-col md:flex-row items-start justify-center gap-5 md:gap-12 ">

        <Link href="/" className="mb-1 lg:mr-4 2xl:mr-20" >
          <CldImage src="https://res.cloudinary.com/dvbvaj9hu/image/upload/v1234/INORG/gbiuvxkdbtzfwwfzkz1a.svg" alt="logo" width={74} height={29} /> 
        </Link>

        <div className="flex flex-wrap gap-2 sm:justify-between md:flex-1" >
        <div className="flex flex-col gap-3">
          <h4 className="bold-18 whitespace-nowrap text-blue-80">{DATA?.QUICK_LINKS}</h4>
          {DATA?.NAV_LINKS.map((link) => (
                <ul className="regular-12 flex flex-col md:flex-row gap-4 text-white">
                      <Link href={link.href} key={link.label}>
                        {link.label}
                      </Link>               
                </ul>
              ))}   
      </div>
      
          


        <div className=" flex flex-column lg:flex-row ">
          <FooterColumn title={DATA?.FOOTER_CONTACT_INFO.title}>
            {DATA?.FOOTER_CONTACT_INFO.links.map((contact) => (
              <Link
                href="/"
                key={contact.label}
                className=" flex gap-3">
                  <div className=" flex w-[50px]">
                  <p className="medium-12 text-blue-80 ">
                      {contact.label}:
                  </p>
                  </div>

                  <div className="flex">
                  <p className="medium-12 whitespace-nowrap text-white text-justify">
                      {contact.value}
                  </p>
                  </div>
                </Link>
          ))}
          </FooterColumn> 
        </div>

        </div>       
      </div>
      <div className="border bg-gray-20"/>
        <p className="regular-14 w-full text-center text-white">{DATA?.RIGHTS}</p>

    </div>
  </footer>
  )
}

type FooterColumnProps = {
  title?: string;
  children: React.ReactNode;
}

const FooterColumn = ({ title, children }:  FooterColumnProps )=> {
    return (
      <div className="flex flex-col gap-3">
        <h4 className="bold-18 whitespace-nowrap text-blue-80">{title}</h4>
        {children}
      </div>
)
}


export default Footer