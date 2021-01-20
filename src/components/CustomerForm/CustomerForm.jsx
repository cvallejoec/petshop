import React, { useState } from 'react';
import './customerForm.css';

import Button from '../Button/Button.jsx';

const CustomerForm = () => {
  const [state, setState] = useState({
    name: '',
    species: '',
    petName: '',
    genre: '',
    serviceType: '',
    location: '',
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
      <h2 className="form__title">Crea tu servicio</h2>
      <div>
        <div className="label__container">
          <label htmlFor="name" className="label__title">
            Nombre
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={state.name}
            onChange={(e) => handleChange(e)}
            className="label__input"
          />
        </div>
        <div className="label__container">
          <label htmlFor="species" className="label__title">
            Especie
          </label>
          <input
            type="text"
            name="species"
            id="species"
            value={state.species}
            onChange={(e) => handleChange(e)}
            className="label__input"
          />
        </div>
        <div className="label__container">
          <label htmlFor="petName" className="label__title">
            Nombre mascota
          </label>
          <input
            type="text"
            name="petName"
            id="petName"
            value={state.petName}
            onChange={(e) => handleChange(e)}
            className="label__input"
          />
        </div>
        <div className="label__container">
          <label htmlFor="genre" className="label__title">
            Sexo
          </label>
          <input
            type="text"
            name="genre"
            id="genre"
            value={state.genre}
            onChange={(e) => handleChange(e)}
            className="label__input"
          />
        </div>
        <div className="label__container">
          <label htmlFor="serviceType" className="label__title">
            Tipo de Servicio
          </label>
          <select
            value={state.serviceType}
            name="serviceType"
            onChange={(e) => handleChange(e)}
            className="label__input"
          >
            <option value="">--SELECCIONAR--</option>
            <option value="Lavado">Lavado</option>
            <option value="Peluquería">Peluquería</option>
          </select>
        </div>
        <div className="label__container">
          <label htmlFor="location" className="label__title">
            Dirección de recogida
          </label>
          <input
            type="text"
            name="location"
            id="location"
            value={state.location}
            onChange={(e) => handleChange(e)}
            className="label__input"
          />
        </div>
      </div>
      <div className="form__footer">
        <Button text="Solicitar" />
      </div>
    </div>
  );
};

export default CustomerForm;
