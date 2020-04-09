import React from 'react';
import PropTypes from 'prop-types';

import "./Button.scss";

function Button( {classList, onClick, text} ){
  
  return (
  <button className={`btn ${classList}`} onClick={onClick}>{text}</button>
  )
}

Button.propTypes = {
  classList: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string
}

export default Button;