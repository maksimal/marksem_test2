import React from 'react';
import "./ColorsGroup.scss"
import clsx from "clsx"

import { setOption } from "../../actions/housesActions"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const ColorsGroup = ({
  title,
  optionName,
  colors,
  className,
  houseType,
  ...attrs
}) => {

  const dispatch = useDispatch();
  const activeHouseType = useSelector(({ selectedOptions }) => selectedOptions[houseType]);

  useEffect(() => {
    dispatch(setOption(houseType, optionName, colors[0]))
  }, []);

  const classes = clsx(
    "constructor-colors",
    { className }
  )

  function getActiveOptionValue() {
    activeHouseType && console.log(activeHouseType[optionName])
    return activeHouseType && activeHouseType[optionName]
  }

  return (
    <div className={classes} {...attrs}>
      <h3 className="colors-title">{title}</h3>
      <div className="colors-wrapper">
        {colors.map((color, i) =>
          <Color
            color={color}
            key={i}
            isActive={color === getActiveOptionValue()}
            onClick={() => dispatch(setOption(houseType, optionName, color))}
          />
        )}
      </div>
    </div>
  );
}

export const Color = ({
  color = "blue",
  isActive,
  onClick,
  size = 40,
  className,
  ...attrs
}) => {

  const classes = clsx(
    "constructor-color",
    { "active-color": isActive },
    { className }
  )

  return (
    <div
      className={classes}
      style={{ backgroundColor: color, width: size, height: size }}
      onClick={onClick}
      {...attrs}
    >
      <svg width="60%" height="60%" className="checkbox-mark-color">
        <use href="./icons-sprite.svg#checkbox-mark-bold" />
      </svg>
    </div>
  )
}

export default ColorsGroup;
