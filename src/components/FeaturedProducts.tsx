'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import product1 from '@/assets/images/product1.png';
import product2 from '@/assets/images/product2.png';
import product3 from '@/assets/images/product3.png';
import product4 from '@/assets/images/product4.png';
import Container from './Container';

type Product = {
  id: number;
  name: string;
  price: number;
  image: any; 
};

const products: Product[] = [
  { id: 1, name: 'G3X Touch™ for Experimental Aircraft GDU...', price: 1400, image: product1 },
  { id: 2, name: 'GNC 215 NAV/COMM', price: 2400, image: product2 },
  { id: 3, name: 'GARMIN GTR 205', price: 3900, image: product3 },
  { id: 4, name: 'D2™ Mach 1 PRO', price: 1400, image: product4 },
  { id: 5, name: 'G3X Touch™ for Experimental Aircraft GDU...', price: 1400, image: product1 },
  { id: 6, name: 'GNC 215 NAV/COMM', price: 2400, image: product2 },
  { id: 7, name: 'GARMIN GTR 205', price: 3900, image: product3 },
  { id: 8, name: 'D2™ Mach 1 PRO', price: 1400, image: product4 },
];

const FeaturedProducts: React.FC = () => {
  return (
    <div className='bg-[#F4F5F5] relative pb-14 '>
      <Container className="w-full relative ">
        <h2 className="text-btnColor text-2xl font-bold pt-12 pb-8">Featured Products</h2>
        
        {/* Custom navigation buttons */}
        <div className="absolute top-0 right-0 flex items-center lg:px-14 px-10 mt-16 z-10">
          <button className="w-1 h-1 swiper-button-prev transition-transform transform hover:scale-110">
          </button>
          <button className="w-1 h-1 swiper-button-next transition-transform transform hover:scale-110">
          </button>
        </div>

        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
        //   spaceBetween={30}
          slidesPerView={3}
          breakpoints={{
            320: { slidesPerView: 1 },
            550: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1440: { slidesPerView: 5 },
          }}
        >
          <div className=''>
          {products.map((product) => (
            <SwiperSlide key={product.id} className="flex justify-center">
              <div className="bg-white shadow-md rounded-lg  w-60 h-[378px] border p-2 mb-6 flex flex-col justify-center items-center">
                <Image src={product.image} alt={product.name} width={228} height={228} className="h-[228px] w-full object-contain rounded-t-lg" />
                <div className="py-3 px-3 h-[40px]">
                  <h3 className="text-sm font-medium mb-2">{product.name}</h3>
                  
                </div>
                  <p className="text-lg font-medium mt-3 text-btnColor ">৳ {product.price}</p>
                <button className="bg-blue-500 text-white py-2 px-4 rounded w-full hover:bg-blue-600 ">
                    Add to Cart
                  </button>
              </div>
            </SwiperSlide>
          ))}
          </div>
        </Swiper>
      </Container>
    </div>
  );
};

export default FeaturedProducts;
