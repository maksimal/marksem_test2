import React, { useState } from 'react';
import Swiper from 'react-id-swiper'
import './PhotoForConstructor.scss';
import { useSelector } from 'react-redux';

const PhotoForConstructor = ({
  images,
  title
}) => {
  const [mainPictureNumber, setMainPictureNumber] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const sliderThumbsParams = { 
    spaceBetween: 10,
    slidesPerView: 8,
    loop: true,
    freeMode: true,
    loopedSlides: 5, //looped slides should be the same
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    onInit: (swiper) => {
      console.log('SWIPER' + swiper)
      setThumbsSwiper(swiper)
    }
  }

  const sliderTopParams = {
    loop: true,
    centeredSlides: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    thumbs: {
      swiper: thumbsSwiper,
    }
  }

  console.log("thumbs " + thumbsSwiper)
  // const sliderTopParams = {
  //   loop: true,
  //   centeredSlides: true,
  //   pagination: {
  //     el: '.swiper-pagination',
  //     type: 'bullets',
  //     clickable: true
  //   },
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev'
  //   },
  //   thumbs: {
  //     swiper: sliderThumbsParams,
  //   }
  // }



  const mainImageHandler = (index) => {
    setMainPictureNumber(index)
  }

  const popupHandler = () => {
    setShowPopup( !showPopup)
  }

  const imageBlocks = images.map((item, index) => {
    if (index < 4) {
      return (
        <div key={index} onClick={mainImageHandler.bind(null, index)} className="photoForConstructor-photo-list-one-photo">
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
      <div className="photoForConstructor">
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
      {showPopup ? <div className="photoForConstructor-preview-photo">
        <div className="photoForConstructor-preview-photo-wrapper">
          <div className="photoForConstructor-preview-photo-wrapper-info">
            <p className="photoForConstructor-preview-photo-wrapper-info-header">
              {title}
            </p>
            <div onClick={popupHandler} className="photoForConstructor-preview-photo-info-wrapper-close-btn">
              <svg width="16" height="16">
                <use href="./icons-sprite.svg#constructor-modal-close-icon" />
              </svg>
            </div>
          </div>

          <Swiper {...sliderTopParams}>
            {sliderImageBlocks}
          </Swiper>

          <Swiper {...sliderThumbsParams} getSwiper={setThumbsSwiper}>
            {sliderImageBlocks}
          </Swiper>
        </div>
      </div> :
        null
      }
    </>
  )
}

export default PhotoForConstructor