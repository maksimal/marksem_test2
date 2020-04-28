import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css/animate.min.css'

const AnimationOnScroll = (AnimatedComponent ) => ({...props}) => {
    return(
        <ScrollAnimation
            animateIn="fadeIn"
            animateOut="fadeOut">
            <AnimatedComponent {...props} />
        </ScrollAnimation>
    )
}

export default AnimationOnScroll;