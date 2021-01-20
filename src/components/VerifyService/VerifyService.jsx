import React, { useState } from 'react';
import './verifyService.css';

import Button from '../Button/Button';

const VerifyService = () => {
  const [state, setState] = useState({
    slug: '',
  });

  const handleChange = (e) => {
    console.log(e.target.value);
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="form">
      <h2 className="form__title">Verifica tu servicio</h2>
      <div>
        <div className="label__container">
          <label htmlFor="name" className="label__title">
            Código de verificación:
          </label>
          <input
            type="number"
            name="slug"
            id="slug"
            value={state.slug}
            onChange={(e) => handleChange(e)}
            className="label__input"
          />
        </div>
      </div>
      <div className="form__footer">
        <Button text="Verificar" />
      </div>
    </div>
  );
};

export default VerifyService;
