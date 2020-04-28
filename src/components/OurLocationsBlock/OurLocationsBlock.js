import React, { useState, useEffect } from 'react'
import Button from './../shared/Button/Button'
import Swiper from 'react-id-swiper'
import './OurLocationsBlock.css'
import './OurLocationsBlock.scss'

const OurLocationsBlock = ({ mainTitle, imgs, button, mainText, locationTitle, locationText }) => {

    const images = [...imgs].map( (item)=> {
        return(
            <div key={Math.random()*10}>
                <img src={`./img/${item}`} alt="Slider" />
            </div>
        )
    })
   
    const sliderParams = {
        loop: true,
        centeredSlides: true,
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

    return(
        <div className="container">
            <div className="our-location-block">

                <div className="our-location-block-content">
                    <div className="slider">                     
                        <Swiper {...sliderParams}>
                                {images}
                        </Swiper>
                    </div>
                    <div className="our-location-block-text-content">                   
                        <h2>{mainTitle}</h2>
                        <p>{mainText}</p>
                        <div className="divider"></div>
                        <p className="location-title">{locationTitle}</p>
                        <p className="location-text">{locationText}</p>
                        <Button 
                            classList="btn-main"
                            text="learn more"
                        />
                    </div>
                </div>
                <div className="our-location-block-background"></div>
            </div>
        </div>
    )
}

export default OurLocationsBlock;