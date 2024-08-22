'use client';
import { useLocale } from '@/lang/LocaleContext';
import React from 'react'
import { useForm } from 'react-hook-form';

export type FormData = {
    companyName: string;
    solutionDesc: string;
    website: string;
    address:string
    email: string;
    //add img
};

const SolutionForm = () => {

    const { DATA } = useLocale();
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    function onSubmit(data: FormData) {
       // sendEmail(data);
    }
  return (
    <form className="flex flex-col md:col-span-8 p-10" onSubmit={handleSubmit(onSubmit)}>
     <div className='flex flex-col md:flex-row w-full'>
        <div className="flex md:w-1/2 flex-col flex-wrap -mx-3 mb-6 md:px-16">
            <div className="w-full px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-first-name">
                    {DATA?.GOZ_PRACTICE_EXCHANGE_FORM_COMPANY_NAME}
                </label>
                <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name" type="text"
                    {...register('companyName', { required: DATA?.CONTACT_FORM_ERROR_MSG })} ></input>
                {errors.companyName && <p className="text-red-500 text-xs italic">{errors.companyName.message}</p>}
            </div>


        <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name">
                {DATA?.GOZ_PRACTICE_EXCHANGE_FORM_WEBSITE}
            </label>
            <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name" type="text" 
                {...register('website', { required:   DATA?.CONTACT_FORM_ERROR_MSG })}/>
            {errors.website && <p className="text-red-500 text-xs italic">{errors.website.message}</p>}
        </div>
  

   
        <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password">
                {DATA?.GOZ_PRACTICE_EXCHANGE_FORM_ADDRESS}
            </label>
            <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-company" type="text"
                {...register('address', { required:   DATA?.CONTACT_FORM_ERROR_MSG })}/>
            {errors.address && <p className="text-red-500 text-xs italic">{errors.address.message}</p>}
        </div>
   

        <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password">
                {DATA?.CONTACT_FORM_EMAIL}
            </label>
            <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-email" type="email" placeholder="********@*****.**"
                {...register('email', { required:   DATA?.CONTACT_FORM_ERROR_MSG })}/>
            {errors.email && <p className="text-red-500 text-xs italic">{errors.email.message}</p>}
        </div>
    </div>
        <div className='flex md:w-1/2'>
            <div className="w-full px-3 ">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-password">
                        {DATA?.GOZ_PRACTICE_EXCHANGE_FORM_SOLUTION_DESC}
                    </label>
                    <textarea rows={10}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        {...register('solutionDesc', { required:   DATA?.CONTACT_FORM_ERROR_MSG })}></textarea>
                    {errors.solutionDesc && <p className="text-red-500 text-xs italic">{errors.solutionDesc.message}</p>}
                </div>
            </div>
 </div>
        <div className="flex w-full justify-end px-3">
            <button
                className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                type="submit">
                {DATA?.CONTACT_FORM_SEND_MESSAGE}
            </button>
        </div>           
</form>
  )
}

export default SolutionForm