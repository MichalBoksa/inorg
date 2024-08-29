'use client';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useLocale } from '@/lang/LocaleContext';
import { sendEmailImprove } from '@/app/utils/send-email';

export type FormDataImprove = {
    companyName: string;
    problemDesc: string;
    email: string;
};
const ImproveForm = () => {

    const { DATA } = useLocale();
    const { register, handleSubmit, formState: { errors } } = useForm<FormDataImprove>();

    function onSubmit(data: FormDataImprove) {
        sendEmailImprove(data);
    }

  return (
    <form className="flex flex-col md:col-span-8 p-10" onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col md:flex-row  w-full'>
             <div className="flex flex-col md:w-1/2 flex-wrap -mx-3 mb-6 md:px-16">
                <div className="w-full px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-first-name">
                            {DATA?.GOZ_PRACTICE_EXCHANGE_FORM2_COMPANY_NAME}
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="grid-first-name" type="text"
                            {...register('companyName', { required: DATA?.CONTACT_FORM_ERROR_MSG })} ></input>
                        {errors.companyName && <p className="text-red-500 text-xs italic">{errors.companyName.message}</p>}
                    </div>


                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-email">
                            {DATA?.CONTACT_FORM_EMAIL}
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="gridemail"  type="email" placeholder="********@*****.**" 
                            {...register('email', { required:   DATA?.CONTACT_FORM_ERROR_MSG })}/>
                        {errors.email && <p className="text-red-500 text-xs italic">{errors.email.message}</p>}
                    </div>
             </div>
             <div className='flex md:w-1/2'>
                <div className="w-full px-3 md:mb-12">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-password">
                            {DATA?.GOZ_PRACTICE_EXCHANGE_FORM2_PROBLEM_DESC}
                        </label>
                        <textarea rows={10}
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            {...register('problemDesc', { required:   DATA?.CONTACT_FORM_ERROR_MSG })}></textarea>
                        {errors.problemDesc && <p className="text-red-500 text-xs italic">{errors.problemDesc.message}</p>}
                </div>
            </div>     
        </div>
        <div className="flex w-full justify-end px-3">
                <button
                    className="shadow bg-indigo-600 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                    type="submit">
                    {DATA?.CONTACT_FORM_SEND_MESSAGE}
                </button>
            </div>    
     </form>
  )
}

export default ImproveForm