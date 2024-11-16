import Header from '@/components/Header';
import TopHeader from '../components/TopHeader';
import ImageSlider from '@/components/ImageSlider';
import bannerImage from '@/assets/images/bannerImage.png'
import Exclusive from '@/components/Exclusive';
import FeaturedProducts from '@/components/FeaturedProducts';
// import Products from '@/components/Products';

export default function HomePage() {
  const images = [
    bannerImage,
    bannerImage,
    bannerImage,
    bannerImage,
  ];

  return (
    <main>
      <TopHeader />
      <Header />
      <ImageSlider images={images} />
      <Exclusive/>
      {/* <Products/> */}
      <FeaturedProducts/>
    </main>
  );
}
