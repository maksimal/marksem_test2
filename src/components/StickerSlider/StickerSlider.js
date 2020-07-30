import React from 'react';
import Swiper from "react-id-swiper";
import "./StickerSlider.scss";
import { useState } from 'react';
import { useEffect } from 'react';

const StickerSlider = ({ children }) => {

  const params = {
    slidesPerView: 1,
    speed: 800,
    initialSlide: 0,
    centeredSlides: true,
    loop: true,
    spaceBetween: 20
  };

  const [swiper, setSwiper] = useState(null);
  const [activeSlideNumber, setActiveSlideNumber] = useState(1);

  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    };
    setActiveSlideNumber(swiper.realIndex + 1);
  };

  let slidesNumber = 0;


  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
    setActiveSlideNumber(swiper.realIndex + 1);
  };

  return (
    <div className="sticker-slider__container">
      <Swiper {...params} getSwiper={setSwiper}>
        {children.map((child, i) => {
          slidesNumber++;
          return (
            <div key={i}>
              {child}
            </div>
          )
        }

        )}
      </Swiper>
      <div className="sticker-slider__controls">
        <button onClick={goPrev} className="sticker-slider__controls__prev"></button>
        <p className="sticker-slider__controls__numbers">
          <span className="sticker-slider__controls__active-slide">{activeSlideNumber}</span>
          <span className="sticker-slider__controls__slash">/</span>
          <span>{slidesNumber}</span>
        </p>
        <button onClick={goNext} className="sticker-slider__controls__next"></button>
      </div>
    </div>
  );
}

export default StickerSlider;
