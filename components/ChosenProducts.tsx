'use client';
import Image from 'next/image';
import React from 'react';
import { useLocale } from '../lang/LocaleContext';
import { CldImage } from 'next-cloudinary';

const ChosenProducts = () => {
  const { DATA } = useLocale();
  return (
    <section className=' overflow-hidden mb-4'>
      <div className='bg-sand-50 max-container relative w-full py-2 px-12'>

        <div className='flex justify-center md:mt-8'>
          <h3 className=' text-blue-80 text-center font-bold text-3xl lg:text-5xl'>{DATA?.CHOOSEN_PRODUCT_TITLE}</h3>
        </div>

        <div className='flex md:mt-8 mb-8'>
          <ul className='grid md:gap-8 md:grid-cols-2 lg:grid-cols-4 mb-4'>
            {DATA?.CHOOSEN_PRODUCTS.map((product) => (
              <ProductItem
                key={product.description}
                title={product.title}
                icon={product.icon}
                description={product.description}
              />
            ))}
        
        </ul>
      </div>
      </div>
    </section>
  );
};

type ProductItemProps = {
  title: string;
  icon: string;
  description: string;
};

const ProductItem = ({ title, icon, description }: ProductItemProps) => {
  return (
    <li className=''>
      <div className='flex flex-col items-center w-full h-full hover:shadow-2xl rounded-xl'>
      <div className='md:mb-4 mt-5'>
        <CldImage src={icon} alt="map" width={100} height={100} className=' min-w-24 min-h-24' />
      </div>

      <div className='w-full flex items-center justify-center mb-5 lg:h-[120px] px-6'>
        <h5 className='text-gray-500 font-bold text-xl lg:text-xl text-center'>{title}</h5>
      </div>

      <div className='flex mt-2 mb-2 items-center justify-center p-5'>
        <p className="text-center text-black font-medium lg:text-base text-sm">{description}</p>
      </div>
      </div>
    </li>
  );
};

export default ChosenProducts;
