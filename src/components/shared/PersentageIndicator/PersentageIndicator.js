import React, {useEffect, useState} from 'react';
import './PersentageIndicator.scss';

function debounce(handler, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    
    timer = setTimeout(() => {
      handler();
    }, ms)
  };
}


function PersentageIndicator({ progress, ...args }) {
  const [clientWidth, setClientWidth] = useState(window.innerWidth);
  const [outerRadius, setOuterRadius] = useState(0);
  const [innerRadius, setInnerRadius] = useState(0);
  const [stroke, setStroke] = useState(0);

  const outerRadiusMob = 76;
  const innerRadiusMob = 57;
  const strokeMob = 38;
  const outerRadiusDesk = 135;
  const innerRadiusDesk = 108;
  const strokeDesk = 54;

  useEffect(() => {
    const handleResize = debounce(() => {
      setClientWidth(window.innerWidth);
    }, 1000);
    
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  useEffect(() => {
    if(clientWidth < 1200){
      setOuterRadius(outerRadiusMob);
      setInnerRadius(innerRadiusMob);
      setStroke(strokeMob);
    } else {
      setOuterRadius(outerRadiusDesk);
      setInnerRadius(innerRadiusDesk);
      setStroke(strokeDesk);
    }
  }, [clientWidth]);

  return (
    <>
    <div className="indicator" {...args}>
    <div className="indicator__base-shadow"></div>
      <div className="indicator__base-outer">
        <div className="indicator__base-inner">
          <span>{progress}%</span>
        </div>
        <div className="indicator__base-dark"></div>
        <svg
          className="indicator__progress-layer"
          height={outerRadius * 2}
          width={outerRadius * 2}
        >
          <circle
            stroke="#254A93"
            fill="transparent"
            strokeWidth={stroke}
            strokeDasharray={innerRadius * 2 * Math.PI + ' ' + innerRadius * 2 * Math.PI}
            style={{ strokeDashoffset: innerRadius * 2 * Math.PI - progress / 100 * innerRadius * 2 * Math.PI }}
            r={innerRadius}
            cx={outerRadius}
            cy={outerRadius}
          />
        </svg>
      </div>
    </div>
    </>
  );
}

export default PersentageIndicator;