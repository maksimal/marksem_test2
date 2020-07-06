import React from "react";
import "./HexagonBadge.scss";

function HexagonBadge({text, bg, ...atrs}){
  return (
    <div className="hexagon-badge" {...atrs}>
      <div className={`hexagon-badge__bg-layer hexagon-badge__bg-layer--${bg}`}></div>
      <div className="hexagon-badge__bsh-layer"></div>
      {text}
    </div>
  )}

  export default HexagonBadge;