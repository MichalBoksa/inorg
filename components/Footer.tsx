import { FOOTER_CONTACT_INFO, FOOTER_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import React from 'react'


const Footer = () => {
  return (
   <footer className="bg-gray-80 flexCenter py-5 ">
    <div className="padding-container max-container flex w-full flex-col gap-5">
      <div className="flex flex-col md:flex-row items-start justify-center gap-5 md:gap-12 ">

        <Link href="/" className="mb-1 lg:mr-4 2xl:mr-20" >
          <Image src="/logo.svg" alt="logo" width={74} height={29} /> 
        </Link>

        <div className="flex flex-wrap gap-2 sm:justify-between md:flex-1" >
          {FOOTER_LINKS.map((columns) => (
            <FooterColumn title={columns.title} key={columns.title}>
              <ul className="  regular-12 flex flex-col md:flex-row gap-4 text-white">
                {columns.links.map((link) => (
                    <Link href={link.href} key={link.label}>
                      {link.label}
                    </Link>
                       ))}                
              </ul>
            </FooterColumn>
          ))}  


        <div className=" flex flex-column lg:flex-row ">
          <FooterColumn title={FOOTER_CONTACT_INFO.title}>
            {FOOTER_CONTACT_INFO.links.map((contact) => (
              <Link
                href="/"
                key={contact.label}
                className=" flex gap-3">
                  <div className=" flex w-[50px]">
                  <p className="medium-12 ">
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
        <p className="regular-14 w-full text-center text-white">2024 INORG | All rights reserved</p>

    </div>
  </footer>
  )
}

type FooterColumnProps = {
  title: string;
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