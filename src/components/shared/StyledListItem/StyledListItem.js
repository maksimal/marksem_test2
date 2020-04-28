import React from 'react';
import "./StyledListItem.scss";

export default function StyledListItem(
  {
    iconUrl,
    iconSize = 30,
    title,
    text = "Default text",
    ...props
  }
) {
  return (
    <div className="styled-list-item" {...props}>
      <div className="styled-list-item__container">
        <div className="styled-list-item__icon">
          <svg width={iconSize} height={iconSize}>
            <use href={iconUrl}/>
          </svg>
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