import React from 'react';
import './customer.css';

import HeroSVG from '../../static/svg/hero.svg';
import Step from '../../components/step/Step.jsx';
import Step1 from '../../static/svg/1-step.svg';
import Step2 from '../../static/svg/2-step.svg';
import Step3 from '../../static/svg/3-step.svg';
import Step4 from '../../static/svg/4-step.svg';
import CustomerForm from '../../components/CustomerForm/CustomerForm';

const Customer = () => {
  return (
    <div className="customer">
      <section className="hero">
        <div className="hero__left">
          <h1>Te ayudamos con el cuidado de tus mascotas</h1>
          <p>Ponemos atención a los más mínimos detalles.</p>
        </div>
        <div className="hero__right">
          <img src={HeroSVG} alt="hero" />
        </div>
      </section>
      <section className="workflow">
        <h2>¿Cómo funciona?</h2>
        <div className="workflow__steps">
          <Step
            icon={Step1}
            title="Tus datos y los de tu mascota"
            description="Llena el formulario con tu nombre, número de contacto y el nombre de tu mascota."
          />
          <Step
            icon={Step2}
            title="Selecciona el servicio"
            description="Tenemos gran variedad de servicios para ti. Escoge el que se ajuste a tus necesidades."
          />
          <Step
            icon={Step3}
            title="Lugar de recogida"
            description="Nos integramos con Google para que puedas seleccionar un punto en el mapa en donde podremos recoger a tu mascota."
          />
          <Step
            icon={Step4}
            title="Guarda el código"
            description="Cada servicio tiene un código único con el que podrás ver el status de tu servicio."
          />
        </div>
      </section>
      <section className="customer__form">
        <CustomerForm />
      </section>
    </div>
  );
};

export default Customer;
