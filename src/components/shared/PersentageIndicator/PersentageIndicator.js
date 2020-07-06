import React from 'react';
import './PersentageIndicator.scss';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

function PersentageIndicator({ progress, ...args }) {
  const outerRadiusMob = 50;
  const innerRadiusMob = 41;
  const strokeMob = 4;

  const circumferenceMob = innerRadiusMob * 2 * Math.PI;
  const strokeDashoffsetMob = circumferenceMob - progress / 100 * circumferenceMob;

  const outerRadiusDesk = 135;
  const innerRadiusDesk = 108;
  const strokeDesk = 54;

  const circumferenceDesk = innerRadiusDesk * 2 * Math.PI;
  const strokeDashoffsetDesk = circumferenceDesk - progress / 100 * circumferenceDesk;

  return (
    <>
    <BrowserView>
    <div className="indicator" {...args}>
    <div className="indicator__base-shadow"></div>
      <div className="indicator__base-outer">
        <div className="indicator__base-inner">
          <span>{progress}%</span>
        </div>
        <div className="indicator__base-dark"></div>
        <svg
          className="indicator__progress-layer"
          height={outerRadiusDesk * 2}
          width={outerRadiusDesk * 2}
        >
          <circle
            stroke="#254A93"
            fill="transparent"
            strokeWidth={strokeDesk}
            strokeDasharray={circumferenceDesk + ' ' + circumferenceDesk}
            style={{ strokeDashoffset: strokeDashoffsetDesk }}
            r={innerRadiusDesk}
            cx={outerRadiusDesk}
            cy={outerRadiusDesk}
          />
        </svg>
      </div>
    </div>
    </BrowserView>
    <MobileView>
    <div className="indicator">
      <div className="indicator__cycle">
        <span>{progress}%</span>
        <svg
          className="indicator__color-layer"
          height={outerRadiusMob * 2}
          width={outerRadiusMob * 2}
        >
          <circle
            stroke="#061229"
            fill="transparent"
            strokeWidth={strokeMob}
            strokeDasharray={circumferenceMob + ' ' + circumferenceMob}
            style={{ strokeDashoffset: strokeDashoffsetMob }}
            r={innerRadiusMob}
            cx={outerRadiusMob}
            cy={outerRadiusMob}
          />
        </svg>
      </div>
    </div>
    </MobileView>
    </>
  );
}

export default PersentageIndicator;