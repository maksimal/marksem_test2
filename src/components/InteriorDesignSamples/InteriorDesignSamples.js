import React from 'react'
import Swiper from 'react-id-swiper'
import './InteriorDesignSamples.css'
import './InteriorDesignSamples.scss'
// import './media.scss'


const InteriorDesignSamples = ({ mainTitle, texts, imgs, button }) => {

    const images = [...imgs].map( (item)=> {
        return(
            <div key={Math.random()*10}>
                <div className="one-picture-block">
                    <img src={`./img/${item}`} alt="Slider" />
                </div>
            </div>
        )
    })
    
    const textes = [...texts].map( (text, i) => {
        return (
            <div className="interior-design-samples-text-block" key={Math.random()*10}>
                <div>
                    <div className="interior-design-samples-text-number">{i+1}</div>
                </div>
                <span className="interior-design-samples-text"><p>{text}</p></span>
            </div>
        )
    })
   
    const sliderParams = {
        loop: true,
        centeredSlides: true,
        updateOnWindowResize: true,
        setWrapperSize: true,
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
            <div className="interior-design-samples">
                <h2>{mainTitle}</h2>
                <div className="interior-design-samples-content">                     
                    <Swiper {...sliderParams}>
                            {images}
                    </Swiper>
                    <div className="interior-design-samples-text-content">                   
                        {textes}
                        {button}
                    </div>
                </div>
                <div className="interior-design-samples-background"></div>
            </div>
        </div>
    )
}

export default InteriorDesignSamples;