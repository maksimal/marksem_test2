import React from 'react';
import './PersentageIndicator.scss';

function PersentageIndicator({ progress, name }) {
  const outerRadius = 50;
  const innerRadius = 41;
  const stroke = 4;

  const circumference = innerRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - progress / 100 * circumference;

  return (
    <div className="indicator">
      <div className="indicator__cycle">
        <span>{progress}%</span>
        <svg
          className="indicator__color-layer"
          height={outerRadius * 2}
          width={outerRadius * 2}
        >
          <circle
            stroke="#061229"
            fill="transparent"
            strokeWidth={stroke}
            strokeDasharray={circumference + ' ' + circumference}
            style={{ strokeDashoffset }}
            r={innerRadius}
            cx={outerRadius}
            cy={outerRadius}
          />
        </svg>
      </div>
      <div className="indicator__title">{name}</div>
    </div>
  );
}

export default PersentageIndicator;