import React, { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert2';
import './verifyService.css';

import Global from '../../Global';
import Button from '../Button/Button';

const VerifyService = () => {
  const [state, setState] = useState({
    slug: '',
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const getVerification = () => {
    axios
      .get(`${Global.url}/api/services/${state.slug}`)
      .then((res) => {
        const service = res.data.data;
        swal.fire({
          title: 'Este es el estado de tu servicio',
          html: ` <div>
              <div>
              
              <label>Nombre mascota: ${service.petName}</label>
              </div>
              <div>

              <label>Status: ${service.status}</label>
              </div>
            </div>`,
          icon: 'success',
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="form">
      <h2 className="form__title">Verifica tu servicio</h2>
      <div>
        <div className="label__container">
          <label htmlFor="name" className="label__title">
            Ingresa tu código:
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
        <Button text="Verificar" onClick={getVerification} />
      </div>
    </div>
  );
};

export default VerifyService;
