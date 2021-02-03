import React from 'react';
import './button.css';

const Button = ({
  className = 'button__primary',
  text = 'Enviar',
  onClick,
}) => {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
