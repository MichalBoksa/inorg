import { PRODUCTS } from '@/constants';
import Image from 'next/image';
import React from 'react';

const ChosenProducts = () => {
  return (
    <section className=' overflow-hidden mb-4'>
      <div className='bg-sand-50 max-container relative w-full py-2 px-12'>

        <div className='flex justify-center md:mt-8'>
          <h3 className=' text-blue-80 text-center font-bold text-3xl lg:text-5xl'>Nasze wybrane produkty</h3>
        </div>

        <div className='flex md:mt-8 mb-8'>
          <ul className='grid md:gap-8 md:grid-cols-2 lg:grid-cols-4'>
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
      <div className='flex flex-col items-center w-full h-full'>
      <div className='md:mb-4 mt-5'>
        <Image src={icon} alt="map" width={100} height={100} />
      </div>

      <div className='w-full flex items-center justify-center mb-5 lg:h-[120px] px-6'>
        <h5 className='text-gray-500 font-bold text-xl lg:text-xl text-center'>{title}</h5>
      </div>

      <div className='flex mt-2 mb-2 items-center justify-center'>
        <p className="text-center text-black font-bold lg:text-sm text-sm">{description}</p>
      </div>
      </div>
    </li>
  );
};

export default ChosenProducts;
