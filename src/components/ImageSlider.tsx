"use client";
import React, { useState } from "react";
import Image from "next/image";
import Container from "./Container";

interface ImageSliderProps {
  images: any;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <Container className="relative mt-4">
      <div className=" w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <div key={index} className="min-w-full">
              <Image
                src={src}
                alt={`Slide ${index}`}
                width={1300}
                height={478}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="absolute -right-[1%] lg:-right-[2%] top-1/2 transform -translate-y-1/2  text-gray-700 p-2 rounded-full"
        >
          &#10095;
        </button>

        <div className="flex justify-center mt-4">
          {images.map((_, index) => (
            <div
              key={index}
              className={`h-5 w-5 rounded-full mx-1 transition-colors duration-300 ${
                index === currentIndex ? "bg-btnColor" : "bg-[#D9D9D9]"
              }`}
              onClick={() => setCurrentIndex(index)}
            ></div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ImageSlider;
