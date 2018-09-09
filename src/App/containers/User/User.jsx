import React, { Component } from 'react';

import './User.css';
import FakeWrapper from '../../hoc/fakeWrapper';
import Logo from '../../components/User/Logo/Logo';
import Shop from '../../components/User/Shop/Shop';
import PlaceOrder from '../../components/User/PlaceOrder/PlaceOrder';

class User extends Component {
  render() {
    return (
      <FakeWrapper>
        <div className="container">
          <div className="flex_container">
            <div className="l_cntr">{/* ... */}</div>
            <div className="text_cntr">
              <Logo />
              <Shop />
              <Shop />
              <Shop />
            </div>
            <div className="r_cntr">{/* ... */}</div>
          </div>
        </div>
        <PlaceOrder />
      </FakeWrapper>
    );
  }
}

export default User;
