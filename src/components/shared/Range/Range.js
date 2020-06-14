import React, { useState, useEffect, useRef } from "react";
import {useDispatch} from "react-redux";
import "./Range.scss";

function Range({
  min,
  max,
  step,
  defaultValue,
  title,
  showRange,
  measureSign,
  action
}) {
  const [currentValue, setCurrentValue] = useState(defaultValue);
  const [progress, setProgress] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState(null);
  const [sliderWidth, setSliderWidth] = useState(null);
  const [valueFontSize, setValueFontSize] = useState(null);

  const slider = useRef(null);
  const sliderValue = useRef(null);

  const dispatch = useDispatch();

  useEffect(() => {
    /*
    * Get sizes that woun't be changed
    */
    setValueFontSize(parseInt(
      window
        .getComputedStyle(sliderValue.current)
        .getPropertyValue("font-size"),
        10
    ));

    setSliderWidth(slider.current.clientWidth);
  }, []);

  useEffect(() => {
      /*
      * Calc width of progress background
      */
     const range = max - min;
     const absValue = currentValue - min;
     const percent = absValue / range;

     /*
      * Calc position of tooltip
      */
      const valueWidth = sliderValue.current.clientWidth;
      let left = percent * (sliderWidth - valueFontSize) + valueFontSize / 2 - valueWidth / 2;

      setProgress(`${percent * 100}%`);
      setTooltipPosition({left: `${left}px`})
      
  }, [min, max, currentValue, slider, sliderValue, sliderWidth, valueFontSize]);

  const handleCurrentPrice = (e) => {
    setCurrentValue(e.target.value);
    dispatch({ 
      type: action,
      payload: parseInt(e.target.value) 
    })
  };

  return (
    <div className="custom-range">
      <div className="custom-range__slider">
        <div className="custom-range__header">
          <h5 className="custom-range__title">
            <label>{title}</label>
          </h5>
        </div>
        <div className="custom-range__background"></div>
        <div
          className="custom-range__progress"
          style={{ width: progress }}
        ></div>
        <input
          className="custom-range__input"
          type="range"
          min={min}
          max={max}
          step={step}
          defaultValue={currentValue}
          ref={slider}
          onChange={handleCurrentPrice}
        />
        <div className="custom-range__value-container">
          {showRange && (
            <>
              <div className="custom-range__value-label">від {min}{measureSign}</div>
              <div className="custom-range__value-label">до {max}{measureSign}</div>
            </>
          )}
          <div className="custom-range__value" ref={sliderValue} style={tooltipPosition}>
            {currentValue}{measureSign}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Range;
