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
    ],
    alignIcon = "top"
  }
) {

  let alignItems;
  alignIcon === "center" ?  alignItems = "center" :  alignItems = "flex-start";

  return (
    <div className="styled-list">
      {
        items.map(({title, text}, i) => {
          return (
            <div key={i} className="styled-item" style={{ marginBottom: "20px" }}>
              <StyledListItem
                style={{alignItems}}
                iconUrl={iconUrl}
                iconSize={iconSize}
                title={title}
                text={text}
              />
            </div>
          )
        })
      }
    </div>
  )
}