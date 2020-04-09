import React from 'react'
import Button from '../shared/Button/Button'
//import '../../variables'
import './InfoCardList.scss'
import PropTypes from 'prop-types'

const InfoCardList = (props) => {
    const { type, mainTitle, infoCards, btnText } = props;

    const editMe = () => {
        console.log('pressed')
    }

    return(
        <div className="InfoCardList">
            <div className="container">
                <div className="InfoCardList-wrapper">
                    <h2 className={`main-title ${ type === 1 ? "main-title-type1" : "main-title-type2"}`}>{mainTitle}</h2>
                    <div className="cards-list">
                        
                        {infoCards.map( (card) => {
                            return (                  
                                    card
                                )
                            })
                        }
                    
                    </div>
                    <Button classList={'btn-main'} text={btnText} onClick={editMe}/>
                    <div className={`InfoCardList-background ${ type === 1 ? "InfoCardList-background-type1" : "InfoCardList-background-type2"}`}></div>
                </div>
            </div>
        </div>
    )
}


InfoCardList.propTypes = {
    type: PropTypes.number,
    mainTitle: PropTypes.string,
    infoCards: PropTypes.array,
    btnText: PropTypes.string
}

export default InfoCardList