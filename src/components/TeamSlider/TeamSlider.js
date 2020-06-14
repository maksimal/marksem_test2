import React, { useState } from 'react';
import Swiper from "react-id-swiper";
import "./TeamSlider.scss";
import 'swiper/css/swiper.css';

function TeamSlider({
  title = "Default title",
  secondaryText,
  teamMembers = []
}) {

  const params = {
    slidesPerView: 1,
    speed: 800,
    initialSlide: 1,
    spaceBetween: 20,
    centeredSlides: true,
    breakpoints: {
      320: {
        slidesPerView: 1
      },
      980: {
        slidesPerView: 3
      }
    }
  };

  const [swiper, setSwiper] = useState(null);

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

  return (
    <div className="team-section">
      <div className="container">
        <h2 className="team-section__title">{title}</h2>
        <h3 className="team-section__secondary-text">{secondaryText}</h3>
        <div className="slider-container">
          <Swiper {...params} getSwiper={setSwiper}>
            {teamMembers.map(({ imgUrl, name, role, facebookLink, linkdInLink, instagramLink }, i) => {
              return (
                <div key={i} className="team-section__card-wrapper">
                  <div className="team-section__card">
                    <img src={imgUrl} alt="face of member" />
                    <div className="member-details">
                      <h3 className="member-name">{name}</h3>
                      <p className="member-role">{role}</p>
                      <div className="member-links">
                        {facebookLink &&
                          <a href={facebookLink} className="member-links-icon">
                            <svg width={16} height={16}>
                              <use href="./icons-sprite.svg#icon-facebook" />
                            </svg>
                          </a>
                        }
                        {linkdInLink &&
                          <a href={linkdInLink} className="member-links-icon">
                            <svg width={16} height={16}>
                              <use href="./icons-sprite.svg#icon-linkedin" />
                            </svg>
                          </a>
                        }
                        {instagramLink &&
                          <a href={instagramLink} className="member-links-icon">
                            <svg width={16} height={16}>
                              <use href="./icons-sprite.svg#icon-instagram" />
                            </svg>
                          </a>
                        }
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </Swiper>

          <button className="slider-button slider-button-prev" onClick={goPrev}></button>
          <button className="slider-button slider-button-next" onClick={goNext}></button>
        </div>
      </div>
    </div>
  )
};

export default TeamSlider