import React, { Component } from 'react';

import firebase from '../../../firebase';
import 'firebase/database';

import './User.css';
import FakeWrapper from '../../hoc/fakeWrapper';
import Logo from '../../components/User/Logo/Logo';
import Shop from '../../components/User/Shop/Shop';
import PlaceOrder from '../../components/User/PlaceOrder/PlaceOrder';

class User extends Component {
  state = {
    shops: []
  };

  componentDidMount() {
    const shopsRef = firebase
      .database()
      .ref()
      .child('shops');

    shopsRef.once('value', snap => {
      console.log(snap.val());
      this.setState({ shops: snap.val() });
    });
  }

  render() {
    const shops = this.state.shops.map(shop => (
      <Shop key={shop.name} shop={shop} />
    ));

    return (
      <FakeWrapper>
        <div className="container">
          <div className="flex_container">
            <div className="l_cntr">{/* ... */}</div>
            <div className="text_cntr">
              <Logo />
              {shops}
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
