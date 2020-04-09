import React from "react";
import PropTypes from "prop-types";
import "./GridItem.scss";

function GridItem({ img, title, text, flexBasis }) {
  return (
    <div className="grid-item" style={{flexBasis: flexBasis}}>
        <div className="grid-item__img">
          <img className="img" src={img} alt=" " />
        </div>
        <div className="grid-item__info">
          <div className="grid-item__title">{title}</div>
          <p className="grid-item__text">{text}</p>
        </div>
    </div>
  );
}

export default GridItem;
