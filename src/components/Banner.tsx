// import bannerImage from '../assets/images/bannerImage.png';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import Slider from 'react-slick';
// import Image from 'next/image';
// import Container from './Container';

// export default function Banner() {
//     const banner = [
//         { image: bannerImage },
//         { image: bannerImage },
//         { image: bannerImage },
//     ];

//     const sliderSettings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//     };

//     return (
//         <div className="w-full max-h-[600px]">
//             <Container>
//                 <Slider {...sliderSettings}>
//                     {banner.map((item, i) => (
//                         <div key={i} className="relative">
//                             <Image
//                                 src={item.image}
//                                 alt="banner image"
//                                 width={1400}
//                                 height={500}
//                                 className="h-full lg:h-[550px] w-full object-cover"
//                             />
//                         </div>
//                     ))}
//                 </Slider>
//             </Container>
//         </div>
//     );
// }
