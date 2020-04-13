import React from 'react';
import PropTypes from 'prop-types';

import "./Button.scss";

function Button( {type, classList, onClick, text} ){
  
  return (
  <button 
    className={classList ? `btn btn-${type} ${classList}` : `btn btn-${type}`}
    onClick={onClick}>{text}</button>
  )
}

Button.propTypes = {
  classList: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string
}

export default Button;