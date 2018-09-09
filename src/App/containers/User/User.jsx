import React, { Component } from 'react';
import firebase from '../../../firebase';
import 'firebase/database';

import './User.css';
import Spinner from '../../components/UI/Spinner/Spinner';
import FakeWrapper from '../../hoc/fakeWrapper';
import Logo from '../../components/User/Logo/Logo';
import Shop from '../../components/User/Shop/Shop';
import PlaceOrder from '../../components/User/PlaceOrder/PlaceOrder';

class User extends Component {
  state = {
    loading: true,
    shops: [],
    cart: [],
    orderState: 1, // 1: Show Order Summary, 2: Show User Details. 3: Show Info Modal
    initialCartStateIndex: [],
    updatedCartStateIndex: []
  };

  componentDidMount() {
    const shopsRef = firebase
      .database()
      .ref()
      .child('shops');

    shopsRef.once('value', snap => {
      const initialCartStateIndex = this.initializeCartStateIndex(snap.val());
      this.setState({
        loading: false,
        shops: snap.val(),
        initialCartStateIndex: initialCartStateIndex,
        updatedCartStateIndex: initialCartStateIndex
      });
    });
  }

  initializeCartStateIndex = shops => {
    return shops.map(shop => shop.products.map(product => false));
  };

  updatedCartStateIndexHandler = (event, shopIndex, productIndex) => {
    const updatedCartStateIndex = [...this.state.updatedCartStateIndex];
    const updatedCartStateIndexForSelectedShop = [
      ...this.state.updatedCartStateIndex[shopIndex]
    ];

    updatedCartStateIndexForSelectedShop[productIndex] = event.target.checked;
    updatedCartStateIndex[shopIndex] = updatedCartStateIndexForSelectedShop;

    this.setState({ updatedCartStateIndex: updatedCartStateIndex });
  };

  placeOrderHandler = () => {
    const cart = this.state.shops.map((shop, shopIndex) => {
      const products = shop.products
        .filter(
          (product, productIndex) =>
            this.state.updatedCartStateIndex[shopIndex][productIndex]
        )
        .map(product => ({
          ...product,
          quantity: 1
        }));

      if (!products.length) {
        return {
          shopName: shop.name,
          products: [],
          total: 0
        };
      }

      const total = products
        .map(product => product.price)
        .reduce((accumulator, currentValue) => accumulator + currentValue);

      return {
        shopName: shop.name,
        products: products,
        total: total
      };
    });

    this.setState({ cart: cart });
  };

  updateOrderStateHandler = val => {
    this.setState((prevState, props) => ({
      orderState: prevState.orderState + val
    }));
  };

  calculateTotal = () => {
    // this.cart.map()
  };

  render() {
    // if (this.state.loading) {
    //   return <Spinner />;
    // }

    const shops = this.state.shops.map((shop, index) => (
      <Shop
        key={shop.name}
        shop={shop}
        shopIndex={index}
        updatedCartStateIndex={this.updatedCartStateIndexHandler.bind(this)}
      />
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
        <PlaceOrder
          cart={this.state.cart}
          orderState={this.state.orderState}
          updateOrderState={this.updateOrderStateHandler}
          placeOrder={this.placeOrderHandler.bind(this)}
        />
      </FakeWrapper>
    );
  }
}

export default User;
