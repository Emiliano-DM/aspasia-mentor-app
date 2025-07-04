import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`button ${className}`}
      aria-label={text}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Button;
