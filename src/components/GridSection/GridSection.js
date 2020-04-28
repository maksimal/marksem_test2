import React from "react";
import "./GridSection.scss";
import GridItem from "../GridItem/GridItem";

function GridSection({ content, title, width = '1280px', coloumnsNumber }) {
  
  const getFlexBasis = number => {
    let result;

    switch (number) {
      case 2:
        result = "50%";
        break;
      case 3:
        result = "32%";
        break;
      default:
        result = "100%";
    }

    return result;
  };

  const flexBasis = getFlexBasis(coloumnsNumber);

  return (
    <section className="grid">
      <h2 className="grid__title">{title}</h2>
      <div className="grid__wrapper" style={{ width: width }}>
        {content.map((element, index) => (
          <GridItem
            key={index}
            icon={element.icon}
            title={element.title}
            text={element.text}
            flexBasis={flexBasis}
          />
        ))}
      </div>
    </section>
  );
}

export default GridSection;
