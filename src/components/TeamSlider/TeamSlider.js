import React, { useState } from 'react';
import Swiper from "react-id-swiper";
import "./TeamSlider.scss";
import 'swiper/css/swiper.css';

export default function TeamSlider({
  title = "Default title",
  secondaryText,
  teamMembers = []
}) {

  const params = {
    slidesPerView: 3,
    speed: 800,
    initialSlide: 1,
    spaceBetween: 20,
    centeredSlides: true
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
                          <a href={facebookLink}>
                            <span className="social-icon" style={{ backgroundImage: "url(./img/social-icons/facebook.svg)" }}></span>
                          </a>
                        }
                        {linkdInLink &&
                          <a href={linkdInLink}>
                            <span className="social-icon" style={{ backgroundImage: "url(./img/social-icons/linkedin.svg)" }}></span>
                          </a>
                        }
                        {instagramLink && <a href={instagramLink}>
                          <span className="social-icon" style={{ backgroundImage: "url(./img/social-icons/instagram.svg)" }}></span>
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