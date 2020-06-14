import React from 'react';
import PropTypes from 'prop-types';

import "./Button.scss";

function Button({ classList, onClick, text, ...attrs }) {
  return (
    <button
      className={`btn ${classList}`}
      onClick={onClick}
      {...attrs}
    >
      {text}
    </button>
  )
}

Button.propTypes = {
  classList: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string
}

export default Button;