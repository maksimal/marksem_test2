import React from 'react';
import "./Checkbox.scss";
import clsx from 'clsx';
import { useEffect } from 'react';

const Checkbox = ({
  labelText,
  checked,
  onClick,
  name,
  className,
  size = 26,
  ...other
}) => {

  const classes = clsx(
    "checkbox",
    { className }
  )

  useEffect(()=>{
    onClick(false)
  },[])

  const handleCheckboxClick = (e) => {
    onClick(e.target.checked)
  }

  return (
    <label htmlFor={name} className={classes} {...other}>
      <span className="label-text">{labelText}</span>
      <div className="checkbox-container">
        <input id={name} name={name} type="checkbox" checked={checked} onChange={handleCheckboxClick} />
        <span checked={checked} className="custom-checkbox" style={{ width: `${size}px`, height: `${size}px` }}></span>
        <svg width="22" height="22" className="checkmark-icon">
          <use href="./icons-sprite.svg#checkbox-mark" />
        </svg>
      </div>

    </label>
  );
}

export default Checkbox;
