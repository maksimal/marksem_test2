import React, { useState, useEffect } from "react";
import Swiper from "react-id-swiper";

import StyledList from "./../shared/StyledList/StyledList";
import PersentageIndicator from "./../shared/PersentageIndicator/PersentageIndicator";
import "./SliderWithBackground.scss";

function SliderWithBackground({ slides }) {
  const [swiper, setSwiper] = useState(null);
  const [slideAmmount, setSlideAmmount] = useState(slides.length + 1);

  const params = {
    speed: 600,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    spaceBetween: 20,
  };

  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };
  const calcActiveSlide = Math.ceil(slideAmmount / 2).toString();



  return (
    <section className="slider-with-bg">
      <h2 className="slider-with-bg__title">
        Інвестиційні плани MARKSEM — почни заробляти сьогодні.
      </h2>
      <div className="slider-with-bg__slider">
        <div
          className="slider-with-bg__bg-layer"
          style={{ backgroundImage: 'url("./img/inactive_card_long-time_growth.png")' }}
        >
          <button className="swiper-prev" onClick={goPrev}>
            <img src="./img/icons/arrow-left.svg" alt="next" />
          </button>
        </div>
        <Swiper {...params} activeSlideKey={calcActiveSlide} getSwiper={setSwiper}>
          {slides.map(slide => slide)}
        </Swiper>
        <div
          className="slider-with-bg__bg-layer"
          style={{ backgroundImage: 'url("./img/inactive_card_balanced_investment.png")' }}
        >
          <button className="swiper-next" onClick={goNext}>
            <img src="./img/icons/arrow-right.svg" alt="next" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default SliderWithBackground;