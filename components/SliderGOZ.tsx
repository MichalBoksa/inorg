'use client';

import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { useLocale } from '@/lang/LocaleContext';
import { CldImage } from 'next-cloudinary';
import Link from 'next/link';

interface SliderGOZProps {}
interface SliderGOZHandle {
  goToSlide: (index: number) => void;
}

const SliderGOZ = forwardRef<SliderGOZHandle, SliderGOZProps>((props, ref) => {
  const { DATA } = useLocale();
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useImperativeHandle(ref, () => ({
    goToSlide: (index: number) => {
      setCurrentIndex(index);
    }
  }));

  if (!DATA || !DATA.GOZ_COMPANIES) {
    return <div>Loading...</div>;
  }

  const totalSlides = DATA.GOZ_COMPANIES.length;

  const prevSlide = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const nextSlide = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  return (
    <section className='flex order-2 lg:order-1 justify-center'>
      <div className="carousel w-[350px] h-[430px] sm:w-[500px] sm:h-[580px] rounded-xl overflow-hidden relative mt-6">
        {DATA.GOZ_COMPANIES.map((company: any, index: number) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          >
            <Link href={company.href} passHref legacyBehavior>
              <a className="block w-full h-full">
                <div className='max-w-[350px] sm:max-w-[500px] cursor-pointer'>
                  <CldImage src={company.img} className="w-full object-fill z-5 rounded-xl h-[250px] sm:h-[300px]" alt='' height={600} width={400} />
                </div>
                <div className='flex flex-col font-bold text-base w-[320px] sm:w-[460px] h-auto mt-3 text-center justify-center items-center z-10 tracking-wider'>
                  <h1 className='text-gray-500 px-8'>{company.name}</h1>
                  <p className='px-8 text-blue-80 mt-2'>{company.description}</p>          
                </div> 
              </a>
            </Link>
          </div>
        ))}
        <div className="absolute w-full flex justify-between transform -translate-y-1/2 top-1/4">
          <button onClick={prevSlide} className="btn btn-circle mx-2">❮</button>
          <button onClick={nextSlide} className="btn btn-circle mx-2">❯</button>
        </div>
      </div>
    </section>
  );
});

SliderGOZ.displayName = 'SliderGOZ';

export default SliderGOZ;
