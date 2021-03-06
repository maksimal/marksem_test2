import React, { useState, useRef } from 'react'
import Button from './../shared/Button/Button'
import Swiper from 'react-id-swiper'
import './OurLocationsBlock.css'
import './OurLocationsBlock.scss'
import './media.scss'

const OurLocationsBlock = ({ mainTitle, imgs, mainText, locationText }) => {
    const [swiperLocation, setSwiperLocation] = useState(null)
    const [textDisplayed, setTextDisplayed] = useState(0)

    const images = [...imgs].map( (item)=> {
        return(
            <div key={Math.random()*10}>
                <img src={`./img/${item}`} alt="Slider" />
            </div>
        )
    })

    const sliderParams = {
        loop: false,
        centeredSlides: true,
        simulateTouch: false,
        noSwiping: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        }
    }

    const goNext = () => {
        swiperLocation.slideNext();
        setTimeout(()=> {
            setTextDisplayed(swiperLocation.activeIndex)
        },200)
    }

    const goPrev = () => {
        swiperLocation.slidePrev();
        setTimeout(()=>{
            setTextDisplayed(swiperLocation.activeIndex)
        },200)
    }

    return(
        <div className="container">


            <div className="our-location-block">

                <div className="our-location-block-content">
                    <div className="slider">         
                        <div onClick={goPrev} className="swiper-button-prev-custom"></div>            
                        <Swiper {...sliderParams} getSwiper={setSwiperLocation} >
                                {images}
                        </Swiper>
                        <div onClick={goNext} className="swiper-button-next-custom"></div>
                    </div>
                    <div className="our-location-block-text-content">                   
                        <h2>{mainTitle}</h2>

                        <p className="main-text">{mainText}</p>
                        <div className="divider"></div>
                        <p className="location-title">Location №{textDisplayed+1}</p>
                        <p className="location-text">{locationText[textDisplayed]}</p>
                        <Button 
                            classList="btn-main"
                            text="learn more"
                            onClick= {() => {}}
                        />
                    </div>
                </div>
                <div className="our-location-block-background"></div>
            </div>
        </div>
    )
}

export default OurLocationsBlock;