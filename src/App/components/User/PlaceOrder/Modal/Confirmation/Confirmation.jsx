import React, { Component } from 'react';
import firebase from '../../../../../../firebase';
import 'firebase/database';
import axios from 'axios';

import './Confirmation.css';
import FakeWrapper from '../../../../../hoc/fakeWrapper';

class Confirmation extends Component {
  ordersRef = firebase
    .database()
    .ref()
    .child('orders');

  saveDataToDBHandler = () => {
    this.ordersRef.once('value', snap => {
      const data = snap.val();
      const dhabawalaLength =
        !data || !data.dhabewala ? 0 : Object.keys(data.dhabewala).length;
      const paanwalaLength =
        !data || !data.paanwala ? 0 : Object.keys(data.paanwala).length;

      if (!data || dhabawalaLength + paanwalaLength < this.props.maxLimit) {
        const newPushKey = this.ordersRef
          .child(this.props.cart[0].shopName)
          .push().key;

        var updates = {};
        this.props.cart.forEach(shop => {
          updates[`${shop.shopName.toLowerCase()}/${newPushKey}`] = {
            user: this.props.user,
            orders: shop.products,
            status: shop.status,
            total: shop.total
          };
        });
        this.ordersRef.update(updates).then(() => {
          axios
            .post('https://bridgemohan.herokuapp.com/api/v1/send-mail', {
              cart: this.props.cart,
              user: this.props.user
            })
            .then(function(response) {
              console.log(response);
              window.scrollTo(0, 0);
              window.location.reload();
            })
            .catch(function(error) {
              console.log(error);
              window.location.reload();
            });
          setTimeout(
            () => alert('Processing!, Click ok to continue and Please wait!'),
            1000
          );
        });
      } else {
        alert('Preorder Limit Crossed!, Click ok to continue!');
        window.scrollTo(0, 0);
        window.location.reload();
      }
    });
  };

  render() {
    const grandTotal = this.props.cart
      .map(shop => shop.total)
      .reduce((acc, curr) => curr + acc);

    const orderDetails = this.props.cart
      .filter(shop => !!shop.products.length)
      .map(shop => {
        const productDetail = shop.products.map(product => {
          return (
            <div key={product.name} className="row menu_row">
              <div className="col-7 col-sm-7 col-md-7">
                <h3 className="menu_ttl_txt">{product.name}</h3>
              </div>
              <div className="col-2 col-sm-2 col-md-2">{product.quantity}</div>
              <div className="col-3 col-sm-3 col-md-3">
                LMC <b>{product.total}</b>
              </div>
            </div>
          );
        });
        return (
          <section key={shop.shopName} className="menu_blk">
            <h2>{shop.shopName}</h2>
            {productDetail}
            <div className="row menu_row">
              <div className="col-7 col-sm-7 col-md-7">
                <h3 className="menu_ttl_txt">
                  <strong>Sub Total</strong>
                </h3>
              </div>
              <div className="col-2 col-sm-2 col-md-2" />
              <div className="col-3 col-sm-3 col-md-3">
                <strong>LMC {shop.total}</strong>
              </div>
            </div>
          </section>
        );
      });

    return (
      <FakeWrapper>
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Confirm Order
          </h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <div className="modal-body">
          <div className="order_summery">
            <section className="menu_blk user_details">
              <div className="row menu_row">
                <div className="col-md-12">
                  <div className="alert alert-primary" role="alert">
                    <h2>
                      Your order will be placed once the page refreshes on
                      submit
                    </h2>
                  </div>

                  <section className="menu_blk">
                    <p>
                      Full Name: <strong>{this.props.user.fullName}</strong>
                    </p>
                    <p>
                      Phone Number: <strong>{this.props.user.phoneNo}</strong>
                    </p>
                    <p>
                      Email Address: <strong>{this.props.user.email}</strong>
                    </p>
                  </section>
                  {orderDetails}

                  <hr />
                  <div className="row menu_row">
                    <div className="col-7 col-sm-7 col-md-7">
                      <h3 className="menu_ttl_txt">
                        <strong>Grand Total</strong>
                      </h3>
                    </div>
                    <div className="col-2 col-sm-2 col-md-2" />
                    <div className="col-3 col-sm-3 col-md-3">
                      <strong>LMC {grandTotal}</strong>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary cancel"
            data-dismiss="modal"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={this.saveDataToDBHandler}
            className="btn btn-primary confirm"
          >
            Submit
          </button>
        </div>
      </FakeWrapper>
    );
  }
}

export default Confirmation;
