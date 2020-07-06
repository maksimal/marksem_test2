import React from 'react';
import "./OptionsGroup.scss";
import clsx from 'clsx';
import { useEffect } from 'react';

import { setOption } from "../../actions/housesActions"
import { useDispatch, useSelector } from 'react-redux';

const OptionsGroup = ({
  title,
  optionName,
  houseType,
  optionValues = []
}) => {

  const dispatch = useDispatch();
  const activeHouseType = useSelector(({ selectedOptions }) => selectedOptions[houseType]);

  function getActiveOptionValue(){
    // activeHouseType && console.log(activeHouseType[optionName])
    return activeHouseType && activeHouseType[optionName]
  }

  useEffect(() => {
    dispatch(setOption(houseType, optionName, optionValues[0]))
  }, []);

  return (
    <div className="constructor-options">
      <h3 className="title">{title}</h3>
      <div className="options-wrapper">
        {optionValues.map((value, i) =>
          <button
            key={i}
            onClick={() => dispatch(setOption(houseType, optionName, value))}
            className={getActiveOptionValue() === value ? "active-option constructor-option" : "constructor-option"}
          >{value}</button>
        )}
      </div>
    </div>
  );
}

export default OptionsGroup;
