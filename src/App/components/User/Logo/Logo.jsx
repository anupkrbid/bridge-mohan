import React from 'react';

import './Logo.css';
import logoBridgeMohan from '../../../../assets/images/logo.jpg';

const logo = props => (
  <div className="logo_wrp">
    <div>
      <img src={logoBridgeMohan} alt="bridge mohan logo" />
    </div>
    <h1>Bridge Mohan</h1>
  </div>
);

export default logo;
