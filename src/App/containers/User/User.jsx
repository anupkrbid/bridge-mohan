import React, { Component } from 'react';
import firebase from '../../../firebase';
import 'firebase/database';

import './User.css';
// import Spinner from '../../components/UI/Spinner/Spinner';
import FakeWrapper from '../../hoc/fakeWrapper';
import Logo from '../../components/User/Logo/Logo';
import Shop from '../../components/User/Shop/Shop';
import PlaceOrder from '../../components/User/PlaceOrder/PlaceOrder';

class User extends Component {
  state = {
    loading: true,
    shops: [],
    user: {},
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
          total: product.price,
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
        .map(product => product.total)
        .reduce((accumulator, currentValue) => accumulator + currentValue);

      return {
        shopName: shop.name,
        products: products,
        total: total,
        status: -1 // -1: Pemding. 0: Cancelled, 1: Confirmed
      };
    });

    this.setState({
      cart: cart,
      orderState: 1
    });
  };

  updateOrderStateHandler = val => {
    this.setState((prevState, props) => ({
      orderState: prevState.orderState + val
    }));
  };

  updateCartStateHandler = (event, shopIndex, productIndex) => {
    const updatedCartState = JSON.parse(JSON.stringify(this.state.cart));

    const actualPrice =
      updatedCartState[shopIndex].products[productIndex].price;

    updatedCartState[shopIndex].products[productIndex].quantity =
      event.target.selectedOptions[0].value;

    updatedCartState[shopIndex].products[productIndex].total =
      actualPrice * event.target.selectedOptions[0].value;

    const newTotal = updatedCartState[shopIndex].products
      .map(product => product.total)
      .reduce((accumulator, currentValue) => accumulator + currentValue);

    updatedCartState[shopIndex].total = newTotal;

    this.setState({ cart: updatedCartState });
  };

  updateUserHandler = event => {
    const user = { ...this.state.user };
    user[event.target.name] = event.target.value;
    this.setState({ user: user });
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
          user={this.state.user}
          cart={this.state.cart}
          orderState={this.state.orderState}
          updateOrderState={this.updateOrderStateHandler}
          updateUser={this.updateUserHandler.bind(this)}
          placeOrder={this.placeOrderHandler.bind(this)}
          updateCartState={this.updateCartStateHandler.bind(this)}
        />
      </FakeWrapper>
    );
  }
}

export default User;
