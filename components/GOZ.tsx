'use client';

import React, { useRef, useEffect } from 'react';
import SliderGOZ from './SliderGOZ';
import { markerMappings, Coordinate } from '../constants/GOZCoordinates';
import { useLocale } from '@/lang/LocaleContext';

const GOZ: React.FC = () => {
  const { DATA } = useLocale();
  const sliderRef = useRef<{ goToSlide: (index: number) => void }>(null);

  const handleMarkerClick = (x: number, y: number) => {
    const markerKey: Coordinate = `${x},${y}`;
    const slideIndex = markerMappings[markerKey];
    if (markerMappings[markerKey] !== undefined && sliderRef.current) {
      sliderRef.current.goToSlide(slideIndex - 1);
    }
  };

  useEffect(() => {
    const svgElement = document.getElementById('poland-map');
    if (svgElement) {
      Object.keys(markerMappings).forEach(key => {
        const [x, y] = key.split(',').map(Number);
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z');
        path.setAttribute('transform', `translate(${x - 12}, ${y - 24}) scale(1.5)`);
        path.style.cursor = 'pointer';
        path.setAttribute('fill', 'green');
        path.classList.add('svg-marker');
        path.addEventListener('click', () => handleMarkerClick(x, y));
        svgElement.appendChild(path);
      });
    } else {
      console.log('SVG element not found');
    }
  }, []);

  return (
    <section className='padding-container max-container mb-10'>
       <div className='flex justify-start items-start text-gray-20  mt-6 mb-4'>
          <p className=''>{DATA?.GOZ}</p>
      </div>
      <div className='flex'>
        
        <SliderGOZ ref={sliderRef} />
        <div className='ml-auto mr-10'>
          <div className='relative'>
            <svg
              id="poland-map"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 500 500"
              width="550"
              height="400"
              className='object-fill'
            >
              <image
                href='https://res.cloudinary.com/dvbvaj9hu/image/upload/v1234/INORG/goz/ycfjhtltfz2yiazyyiop.svg'
                width="100%"
                height="100%"
                preserveAspectRatio="xMidYMid meet"
              />
            </svg>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default GOZ;
