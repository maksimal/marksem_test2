import React from 'react';
import "./StyledList.scss";
import StyledListItem from '../StyledListItem/StyledListItem';

export default function StyledList(
  {
    iconUrl,
    iconSize = 30,
    items = [
      ["First title", "First text"],
      ["Second title", "Second text"]
    ]
  }
) {
  return (
    <div className="styled-list">
      {
        items.map((item, i) => {
          return (
            <div key={i} className="styled-item" style={{ marginBottom: "20px" }}>
              <StyledListItem
                iconUrl={iconUrl}
                iconSize={iconSize}
                // if there is only one element in array than it will be considered as text whithout title
                title={item.length === 2 ? item[0] : false}
                text={item.length === 2 ? item[1] : item[0]}
              />
            </div>
          )
        })
      }
    </div>
  )
}