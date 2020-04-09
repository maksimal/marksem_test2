import React from 'react';
import "./StyledListItem.scss";

export default function StyledListItem(
  {
    iconUrl,
    iconSize = 30,
    title = "Default title",
    text = "Default text"
  }
) {
  return (
    <div className="styled-list-item">
      <div className="styled-list-item__container">
        <div
          className="styled-list-item__icon"
          style={{
            backgroundImage: `url(${iconUrl})`,
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            width: iconSize + "px",
            height: iconSize + "px",
          }}
        >
        </div>
      </div>
      <div className="styled-list-item__text-container">
        {title &&
          <h3 className="styled-list-item__title">{title}</h3>
        }
        <p>{text}</p>
      </div>

    </div>
  )
}