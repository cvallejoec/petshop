import React, { useState } from 'react';
import './tabs.css';

import CustomerForm from '../CustomerForm/CustomerForm.jsx';
import VerifyService from '../VerifyService/VerifyService.jsx';

const Tabs = () => {
  const classTitle = 'tabs__title';
  const classTitleActive = 'tabs__title tabs__title--active';
  const [currentTab, setCurrentTab] = useState('customerForm');

  const toggleTab = () => {
    switch (currentTab) {
      case 'customerForm':
        return <CustomerForm />;
      case 'verifyService':
        return <VerifyService />;
      default:
        return null;
    }
  };

  return (
    <div className="tabs">
      <div className="tabs__container">
        <h3
          onClick={() => setCurrentTab('customerForm')}
          className={
            currentTab === 'customerForm' ? classTitleActive : classTitle
          }
        >
          Crear
        </h3>
        <h3
          onClick={() => setCurrentTab('verifyService')}
          className={
            currentTab === 'verifyService' ? classTitleActive : classTitle
          }
        >
          Verificar
        </h3>
      </div>
      {toggleTab()}
    </div>
  );
};

export default Tabs;
