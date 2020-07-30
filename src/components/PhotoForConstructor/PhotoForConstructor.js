import React, { useState } from 'react';
import Swiper from 'react-id-swiper'
import './PhotoForConstructor.scss';
import Modal from './../Modal/Modal';
import { useEffect } from 'react';
import SampleSliderNu from './../SampleSliderNu/index';

const PhotoForConstructor = ({
  images = [],
  title
}) => {
  const [mainPictureNumber, setMainPictureNumber] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [topSwiper, setTopSwiper] = useState(null);

  const sliderTopParams = {
    getSwiper: setTopSwiper,
    loop: true,
    loopedSlides: 8,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  };

  const sliderThumbsParams = {
    getSwiper: setThumbsSwiper,
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 8,
    loop: true,
    loopedSlides: 8,
    touchRatio: 0.2,
    slideToClickedSlide: true
  }


  useEffect(() => {
    if (
      topSwiper !== null &&
      topSwiper.controller &&
      thumbsSwiper !== null &&
      thumbsSwiper.controller
    ) {
      topSwiper.controller.control = thumbsSwiper;
      thumbsSwiper.controller.control = topSwiper;
    }
  }, [topSwiper, thumbsSwiper]);

  const mainImageHandler = (index) => {
    setMainPictureNumber(index)
  }

  const popupHandler = () => {
    setShowPopup(!showPopup)
  }

  const imageBlocks = images.map((item, index) => {
    if (index < 4) {
      return (
        <div key={index} onClick={(mainImageHandler.bind(null, index))} className="photoForConstructor-photo-list-one-photo">
          <img src={item} alt="Secondary constructor image" />
        </div>
      )
    }
  })

  const sliderImageBlocks = images.map(item => {
    return (
      <div>
        <img src={item} alt="Slider images" />
      </div>
    )
  })

  return (
    <>
      <div className="photoForConstructor photoForConstructor-desktop">
        <div className="photoForConstructor-photo-main">
          <img src={images[mainPictureNumber]} alt="Main constructor image" />
        </div>
        <div className="photoForConstructor-photo-list">
          {imageBlocks}
        </div>
        {images.length > 4 ? <div className="photoForConstructor-more-images" onClick={popupHandler}>
          <p>{`+${images.length - 4}`}</p>
        </div> : null}
      </div>

      <div className="photoForConstructor-mobile">
        <SampleSliderNu
          type="2"
          showButtons={false}
          images={images}
          style ={{marginBottom: "0", marginTop: "0"}}
        />
      </div>


      {
        showPopup &&
        <Modal
          width="90%"
          onClose={popupHandler}
        >
          <div className="photoForConstructor-preview-photo-wrapper">
            <div className="photoForConstructor-preview-photo-wrapper-info">
              <p className="photoForConstructor-preview-photo-wrapper-info-header">
                {title}
              </p>
            </div>

            <Swiper {...sliderTopParams}>
              {sliderImageBlocks}
            </Swiper>

            <Swiper {...sliderThumbsParams}>
              {sliderImageBlocks}
            </Swiper>
          </div>
        </Modal>
      }

    </>
  )
}

export default PhotoForConstructor