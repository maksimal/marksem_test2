import React, { useState } from 'react'
import './ScrollToTop.css'

const ScrollToTop = (props) => {
    const [scrolled, setScrolled] = useState(false)

    const scroll = (e) => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > window.innerHeight) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        })
    }

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }
    
    return (
        <div 
            onScroll={scroll()} 
            className={scrolled ? 'scroll-to-top' : 'scroll-to-top-hide'} 
            onClick={scrollToTop}>
        </div>
    )
}

export default ScrollToTop