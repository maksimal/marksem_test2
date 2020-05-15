import React from 'react'
import StyledLink from '../shared/StyledLink'
import './InfoCard.scss'
import './media.scss'

const InfoCard = (props) => {
    const { type, img, title, text, linkText, linkURL } = props;

    return(
        <div className={`card-item card-item-type${type}`}>
        <div className={`card-image card-image-type${type}`}>
            <img src={img} alt="card"></img>
        </div>
        <div className="card-text-wrapper">
            <p className={`card-title card-title-type${type}`}>{title}</p>
            <p className={`card-text card-text-type${type}`}>{text}</p>
            {linkText ? <StyledLink linkText={linkText} linkURL={linkURL} /> : null}
        </div>
    </div>
    )
}

export default InfoCard 