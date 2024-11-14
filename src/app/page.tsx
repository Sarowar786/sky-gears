import Header from '@/components/Header';
import TopHeader from '../components/TopHeader';
import ImageSlider from '@/components/ImageSlider';
import bannerImage from '@/assets/images/bannerImage.png'

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
      
    </main>
  );
}
