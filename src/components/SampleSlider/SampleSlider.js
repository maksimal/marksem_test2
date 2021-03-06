import React from 'react'
import Swiper from 'react-id-swiper'
import Button from './../shared/Button/Button'
import StyledLink from './../shared/StyledLink/'
import './SampleSlider.scss'
import './SampleSlider.css'
import './media.scss'
import ToggleHouseBuilderButton from './../ToggleHouseBuilderButton/ToggleHouseBuilderButton';

const SamplesSlider = (props) => {
  const { type, title, text, img, houseType } = props;

  let images = [...img].map((item) => {
    return (
      <div key={Math.random() * 10}>
        <img data-src={`${item}`} alt="Slider" className="swiper-lazy" />
        <div className="swiper-lazy-preloader"></div>
      </div>
    )
  })

  const sliderParams = {
    loop: true,
    initialSlide: Math.floor([...img].length / 2),
    preloadImages: false,
    lazy: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  }
  return (
    <div className="sampleslider">
      <div className="container">
        <div className="sampleslider-content">
          <div className={`sampleslider-text-content sampleslider-text-content-type${type}`}>
            <h2 className={'sampleslide-title'}>{title}</h2>
            <p className={'sampleslider-text'}>{text}</p>
          </div>

          <div className={`sampleslider-button-styledlink-wrapper sampleslider-button-styledlink-wrapper-type${type}`}>
            <div className="sampleslider-button-wrapper">
              <ToggleHouseBuilderButton
                text="select"
                buttonType="main"
                houseType={houseType}
              />
            </div>
            <div className="sampleslider-styledlink-content">
              <StyledLink
                linkText="download catalog"
                linkURL="#"
                onClick={() => { console.log('click') }}
              />
            </div>
          </div>
        </div>


        <div className={`sampleslider-slider-content sampleslider-slider-content-type${type}`}>
          <Swiper {...sliderParams}>
            {images}
          </Swiper>
        </div>


      </div>
      <div className={`sampleslider-background sampleslider-background-type${type}`}>
      </div>
    </div>
  )
}

export default SamplesSlider