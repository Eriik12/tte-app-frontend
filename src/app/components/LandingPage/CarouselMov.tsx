import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

const CarouselMov: React.FC<{ slides: { url: string }[] }> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className='max-w-full w-full my-28 relative group lg:hidden flex z-0'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-[30rem] bg-center bg-cover duration-500 z-0'
      ></div>
      <div className='flex justify-center absolute bottom-5 left-0 right-0 z-10'>
        <button className='text-white mr-2' onClick={prevSlide}>
          <BsChevronCompactLeft size={30} />
        </button>
        <button className='text-white' onClick={nextSlide}>
          <BsChevronCompactRight size={30} />
        </button>
      </div>
    </div>
  );
};

export default CarouselMov;
