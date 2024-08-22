'use client';
import React from 'react';
import { useLocale } from '@/lang/LocaleContext';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/app/utils/send-email';
import SolutionForm from './GOZForms/SolutionForm';
import ImproveForm from './GOZForms/ImproveForm';
   

const GoodPracticeExchangeGOZ = () => {
    const { DATA } = useLocale();
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    function onSubmit(data: FormData) {
       // sendEmail(data);
    }

  return (
<section className='max-container md:padding-container mb-10'>
      <div className='flex flex-col justify-center mt-6'>
        <h1 className='text-blue-800 font-semibold text-2xl sm:text-4xl md:text-5xl tracking-widest text-center'>
          {DATA?.GOZ_PRACTICE_EXCHANGE}
        </h1>
        <h3 className='font-semibold text-gray-500 px-4 mt-4 md:px-10 text-sm md:text-xl text-center'>
            {DATA?.GOZ_PRACTICE_EXCHANGE_DESC}
        </h3>
      </div>
           
      <SolutionForm/>

{/* Second form */}
        <div>
            <h3 className='font-semibold text-gray-500 px-4 md:px-10 text-base md:text-2xl text-left'>
                {DATA?.GOZ_PRACTICE_EXCHANGE_IMPROVE}
            </h3>
           <ImproveForm/>

        </div>
    </section>
  )
}

export default GoodPracticeExchangeGOZ