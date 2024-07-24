'use client';
import React from 'react'
import { useLocale } from '@/lang/LocaleContext'

const SiteUnderConstructionInfo = () => {
    const {DATA} = useLocale();
  return (
    <div className='flex w-full bg-blue-80 text-white items-center justify-center text-xl py-3'>{DATA?.WEBSITE_WORKS}</div>
  )
}

export default SiteUnderConstructionInfo