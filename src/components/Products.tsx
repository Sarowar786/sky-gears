// // FeaturedProductsSlider.tsx
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import SwiperCore, { Navigation, Pagination } from 'swiper';


// type Product = {
//   id: number;
//   name: string;
//   price: number;
//   image: string;
// };

// const products: Product[] = [
//   { id: 1, name: 'G3X Touch™ for Experimental Aircraft GDU...', price: 1400, image: '../assets/images/product1.png' },
//   { id: 2, name: 'GNC 215 NAV/COMM', price: 2400, image: '../assets/images/product1.png' },
//   { id: 3, name: 'GARMIN GTR 205', price: 3900, image: '../assets/images/product1.png' },
//   { id: 4, name: 'D2™ Mach 1 PRO', price: 1400, image: '../assets/images/product1.png' },
//   { id: 5, name: 'BOSE A30 - XLRS PLUG, STRAIGHT CORD...', price: 1400, image: '../assets/images/product1.png' },
//   // Add more products as needed
// ];

// const Product: React.FC = () => {
//   return (
//     <div className="w-full max-w-5xl mx-auto p-4">
//       <h2 className="text-xl font-bold mb-4">Featured Products</h2>
//       <Swiper
//         modules={[Navigation, Pagination]}
//         navigation
//         pagination={{ clickable: true }}
//         spaceBetween={20}
//         slidesPerView={3}
//         breakpoints={{
//           640: { slidesPerView: 1 },
//           768: { slidesPerView: 2 },
//           1024: { slidesPerView: 3 },
//         }}
//       >
//         {products.map((product) => (
//           <SwiperSlide key={product.id} className="flex justify-center">
//             <div className="bg-white shadow-md rounded-md overflow-hidden w-64">
//               <img src={product.image} alt={product.name} className="h-40 w-full object-cover" />
//               <div className="p-4">
//                 <h3 className="text-sm font-medium mb-2">{product.name}</h3>
//                 <p className="text-lg font-bold mb-4">৳ {product.price}</p>
//                 <button className="bg-blue-500 text-white py-2 px-4 rounded w-full hover:bg-blue-600">
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default Product;
