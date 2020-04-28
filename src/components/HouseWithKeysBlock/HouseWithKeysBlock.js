import React from 'react';

import './HouseWithKeysBlock.scss';

function HouseBlock() {
  return(
    <div className="house-block">
        <div className="house-block__background-layer"></div>
        <h2 className="house-block__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </h2>
        <img className="house-block__img" src={"./img/KeysHouse.png"} alt="house" />
        <span className="house-block__key house-block__key1">Lorem</span>
        <span className="house-block__key house-block__key2">Lorem</span>
        <span className="house-block__key house-block__key3">Lorem</span>
        <span className="house-block__key house-block__key4">Lorem</span>
        <span className="house-block__key house-block__key5">Lorem</span>
    </div>
  )
}

export default HouseBlock