import React from "react";
import "./GridSection.scss";
import GridItem from "../GridItem/GridItem";

function GridSection({ content, title, size }) {
  

  return (
    <section className="grid">
      <h2 className="grid__title">{title}</h2>
      <div className="grid__wrapper">
        {content.map((element, index) => (
          <GridItem
            additionalClass={`grid-item-type${size}`}
            key={index}
            icon={element.icon}
            title={element.title}
            text={element.text}
          />
        ))}
      </div>
    </section>
  );
}

export default GridSection;
