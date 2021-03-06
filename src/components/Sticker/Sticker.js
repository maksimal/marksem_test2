import React from 'react';
import "./Sticker.scss";

const Sticker = ({ title, text }) => {
  return (

      <div className="sticker">
        <div className="content">
          <h3 className="title">{title}</h3>
          <div className="text">{text}</div>
        </div>

        <svg id="sticker" viewBox="0 0 395 429"   preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d)">
            <path d="M391 0V390.069H380.927L376.357 387.491L368.123 386.628L361.714 389.205H357.144L351.655 391.783L346.166 392.646H327.872C327.872 392.646 330.617 389.205 324.208 390.069C317.799 390.932 317.799 390.932 317.799 390.932L309.565 390.069L305.915 389.205H300.426L294.936 387.491H286.702L282.119 388.355L274.804 390.932L265.65 395.224L260.161 397.802C260.161 397.802 257.416 398.665 256.511 401.243C255.591 403.82 251.927 402.957 251.927 402.957L248.277 404.671L243.693 405.534H240.043L235.459 403.82L230.889 401.243H227.225C222.655 400.379 222.655 400.379 222.655 400.379L218.991 401.243L212.596 405.534L207.106 407.248L203.442 408.112L198.872 407.248L195.208 404.671L190.638 403.82L186.974 402.093L183.31 401.243H173.251C173.251 401.243 171.426 400.379 168.681 401.243C165.936 402.093 162.272 401.243 162.272 401.243L157.702 402.957L150.374 405.534L139.285 409.555L128.416 414.981H122.021L116.532 418.422L112.868 420.136L107.378 421H103.714L99.1444 420.136L92.7355 413.267L87.2462 412.404H78.1064L73.5228 413.267H67.1277C50.6596 423.152 29.6079 407.248 29.6079 407.248V401.243C29.6079 401.243 25.038 394.36 22.2933 394.36C19.5486 394.36 15.8845 391.783 15.8845 391.783L8.56989 386.628L5.82521 382.336L4.90574 376.317L4 366.87V0H391Z" fill="white" />
          </g>
          <defs>
            <filter id="filter0_d" x="0" y="0" width="395" height="429" filterUnits="userSpaceOnUse">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
          </defs>
        </svg>

      </div>


  );
}

export default Sticker;
