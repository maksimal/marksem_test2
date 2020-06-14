import React, { useEffect } from 'react';
import "./Tip.scss";
import { useState } from 'react';
import clsx from "clsx";

const Tip = ({
  iconUrl,
  size = 20,
  children,
  className,
  position="bottom",
  ...attrs
}) => {

  const classes = clsx(
    "tip",
    { className }
  );

  return (
    <div
      className={classes}
      style={{
        width: `${size}px`,
        height: `${size}px`
      }}
      {...attrs}
    >
      <img className="tip-icon" src={iconUrl} alt="info-icon" />
      <div className={`tip-text-wrapper tip-text-wrapper-${position}`}>
        <p className={`tip-text`}>{children}</p>
      </div>
    </div>
  );
}

export default Tip;
