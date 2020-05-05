import React from "react";
import "./GridItem.scss";

function GridItem({ icon, title, text, additionalClass }) {
  return (
    <div className={`grid-item ${additionalClass}`}>
        <div className="grid-item__img">
          {icon}
        </div>
        <div className="grid-item__info">
          <div className="grid-item__title">{title}</div>
          <p className="grid-item__text">{text}</p>
        </div>
    </div>
  );
}

export default GridItem;
