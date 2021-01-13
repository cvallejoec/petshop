import React from 'react';
import './step.css';

const Step = ({ icon, title, description }) => {
  return (
    <div className="step">
      <img src={icon} alt={`${icon}`} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Step;
