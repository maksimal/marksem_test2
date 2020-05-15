import React from 'react';

import './HouseWithKeysBlock.scss';

function HouseBlock({
  mobileDescription,
  desktopDescription,

}) {

  return(
    <div className="house-block">
      <h2 className="house-block__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </h2>
        <div className="house-block__background-layer">
          <img className="house-block__img desk-version" src={"./img/keysHouseDesk.png"} alt="house" />
          <img className="house-block__img mob-version" src={"./img/keysHouseMob.png"} alt="house" />
          {
            desktopDescription.map((deskription, i) => 
            <span key={i} className={`house-block__key house-block__key${++i} desk-version`}>{deskription}</span>
            )}
            <div className="house-block__values mob-version">
            {
            mobileDescription.map((description, i) => 
              <div className="house-block__value" key={i}>
                <div className="house-block__value-number">{++i}</div>
                <div className="house-block__value-text">{description}</div>
            </div>
            )}
          </div>
        </div>
      </div>
  )
}

export default HouseBlock;