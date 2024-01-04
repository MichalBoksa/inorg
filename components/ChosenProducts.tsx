import { PRODUCTS } from '@/constants';
import Image from 'next/image';
import React from 'react';

const ChosenProducts = () => {
  return (
    <section className=' overflow-hidden py-12'>
      <div className='bg-sand-50 max-container padding-container relative w-full '>

        <h3 className=' text-blue-80 py-6 text-center font-bold text-3xl lg:text-5xl mb-10'>Nasze wybrane produkty</h3>
       
        <ul className='grid gap-10 md:grid-cols-2 lg:grid-cols-4'>
          {PRODUCTS.map((product) => (
            <ProductItem
              key={product.description}
              title={product.title}
              icon={product.icon}
              description={product.description}
            />
          ))}
      
      </ul>
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
    <li className='flex flex-col items-center'>
      <div className='p-4 lg:p-7 h-[150px]'>
        <Image src={icon} alt="map" width={100} height={100} />
      </div>

      <div className='h-[140px] w-full flex items-center justify-center'>
        <h5 className='text-gray-500 font-bold text-lg lg:text-2xl text-center'>{title}</h5>
      </div>

      <p className="text-center text-black font-bold text-base mt-5 mb-5">{description}</p>
    </li>
  );
};

export default ChosenProducts;
