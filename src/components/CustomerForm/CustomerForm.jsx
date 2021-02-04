import React, { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert2';
import useGeolocation from 'react-hook-geolocation';
import './customerForm.css';

import Global from '../../Global';
import Button from '../Button/Button.jsx';

const CustomerForm = () => {
  const geolocation = useGeolocation();
  const [state, setState] = useState({
    name: '',
    clientDocument: '',
    species: '',
    petName: '',
    genre: '',
    serviceType: '',
    location: {
      latitude: geolocation.latitude,
      longitude: geolocation.longitude,
    },
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const requestService = () => {
    axios
      .post(Global.url + '/api/services', state)
      .then((res) => {
        const serviceId = res.data.data.serviceId;
        swal.fire({
          title: 'Servicio solicitado',
          text: `Este es tu número de servicio ${serviceId}`,
          icon: 'success',
          showCloseButton: true,
        });
      })
      .catch((err) => {
        console.log(err);
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
          <label htmlFor="clientDocument" className="label__title">
            Cédula
          </label>
          <input
            type="text"
            name="clientDocument"
            id="clientDocument"
            value={state.clientDocument}
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
          <select
            value={state.genre}
            name="genre"
            onChange={(e) => handleChange(e)}
            className="label__input"
            id="genre"
          >
            <option value="">--SELECCIONAR--</option>
            <option value="Macho">Macho</option>
            <option value="Hembra">Hembra</option>
          </select>
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
          <label htmlFor="location2" className="label__title">
            Dirección de recogida
          </label>
          <input
            type="text"
            name="location2"
            id="location2"
            value={state.location2}
            onChange={(e) => handleChange(e)}
            className="label__input"
          />
        </div>
      </div>
      <div className="form__footer">
        <Button text="Solicitar" onClick={requestService} />
      </div>
    </div>
  );
};

export default CustomerForm;
