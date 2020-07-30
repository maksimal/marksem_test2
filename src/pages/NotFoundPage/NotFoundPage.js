import React, { useState } from 'react'
import Button from './../../components/shared/Button/Button'
import './NotFoundPage.scss'
import './media.scss'

const NotFound = () => {
    useState( () => {
        window.scrollTo(0, 0);
    })

    return(
        <div className="notfound-wrapper">
            <div className="container">
                <div className="notfound-text-wrapper">
                    <div>
                        <p className="notfound-main-title">404</p>
                        <p className="notfound-title">Something went wrong</p>
                        <p className="notfound-text">We couldn’t find what you’re looking for.</p>
                        <div className="notfound-button-wrapper">
                            <Button classList='btn-pagenotfound-back' text="go back" />
                            <Button classList='btn-pagenotfound-home' text="home page" />
                        </div>
                    </div>
                </div>


                <div className="notfound-background">
                    <img src="./img/pagenotfound.svg" alt="page not found background"/>
                </div>
            </div>
        </div>
    )
}

export default NotFound;