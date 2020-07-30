import React from "react";
import Swiper from 'react-id-swiper';
import StyledLink from './../shared/StyledLink';
import ToggleHouseBuilderButton from './../ToggleHouseBuilderButton/ToggleHouseBuilderButton';
import './SampleSliderNu.scss';
import './media.scss'

const SampleSliderNu = (props) => {
  const { type, title, text, images, houseType, showButtons = true, ...other } = props;

  const sliderParams = {
    loop: true,
    initialSlide: Math.floor([...images].length / 2),
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

  function renderImages() {
    console.log(images);
    return (
      [...images].map((image) => {
        return (
          <div key={Math.random() * 10}>
            <img data-src={image} alt="Slider" className="swiper-lazy" />
            <div className="swiper-lazy-preloader"></div>
          </div>
        )
      })
    )
  }

  return (
    <div className="sampleSliderNu" {...other}>
      <div className="container">
        <div className={`sampleSliderNu-text-content sampleSliderNu-text-content-type${type}`}>
          <h2 className={'sampleSliderNu-text-content-title'}>{title}</h2>
          <p className={'sampleSliderNu-text-content-text'}>{text}</p>
        </div>
        <div className={`sampleSliderNu-slider-content sampleSliderNu-slider-content-type${type}`}>
          <Swiper {...sliderParams}>
            {renderImages()}
          </Swiper>
        </div>

        {showButtons &&
          <div className={`sampleSliderNu-buttons-wrapper sampleSliderNu-buttons-wrapper-type${type}`}>
            <div className="sampleSliderNu-button-wrapper">
              <ToggleHouseBuilderButton
                text="select"
                buttonType="main"
                houseType={houseType}
              />
            </div>
            <div className="sampleSliderNu-styledlink-content">
              <StyledLink
                linkText="download catalog"
                linkURL="#"
                onClick={() => { console.log('click') }}
              />
            </div>
          </div>
        }

      </div>
    </div>
  )

}


export default SampleSliderNu;