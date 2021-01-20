import React from 'react';
import './button.css';

const Button = ({ className = 'button__primary', text = 'Enviar' }) => {
  return <button className={className}>{text}</button>;
};

export default Button;
