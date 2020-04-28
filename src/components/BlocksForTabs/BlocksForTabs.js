import React, { useState, useEffect } from 'react'
import Swiper from 'react-id-swiper'
import './BlocksForTabs.css'
import './BlocksForTabs.scss'

const OptionsWithTabs = ({ texts, imgs }) => {

    const images = [...imgs].map( (item)=> {
        return(
            <div key={Math.random()*10}>
                <img src={`./img/${item}`} alt="Slider" />
            </div>
        )
    })
    
    const textes = [...texts].map( (text, i) => {
        return (
            <div className="blocks-for-tabs-text-block">
                <div>
                    <div className="blocks-for-tabs-text-number">{i+1}</div>
                </div>
                <span className="blocks-for-tabs-text"><p>{text}</p></span>
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
        <div className="blocks-for-tabs">
              <div className="blocks-for-tabs-content">                     
                <Swiper {...sliderParams}>
                        {images}
                </Swiper>
                <div className="blocks-for-tabs-text-content">                   
                    {textes}
                </div>
            </div>
        </div>
    )
}

export default OptionsWithTabs;