import React, { Component } from 'react';
import firebase from '../../../../../../firebase';
import 'firebase/database';

import './Confirmation.css';
import FakeWrapper from '../../../../../hoc/fakeWrapper';

class Confirmation extends Component {
  constructor() {
    super();
    this.ordersRef = firebase
      .database()
      .ref()
      .child('orders');

    // this.ordersRef.on('child_added', snap => {
    //   window.location.reload();
    // });

    this.dhabewalaRef = this.ordersRef.child('dhabewala');
    this.paanwalaRef = this.ordersRef.child('paanwala');
    this.khilonewalaRef = this.ordersRef.child('khilonewala');
  }

  saveDataToDBHandler = () => {
    this.props.cart.forEach(shop => {
      if (!!shop.products.length) {
        this[`${shop.shopName.toLowerCase()}Ref`].push({
          user: this.props.user,
          orders: shop.products,
          status: shop.status,
          total: shop.total
        });
      }
    });
    // TODO: Refactor this
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  render() {
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
                  <h2>
                    Please check your email after the page refreshes on submit
                  </h2>
                  <pre>{JSON.stringify(this.props.user, null, 2)}</pre>
                  <pre>
                    {JSON.stringify(
                      this.props.cart.filter(shop => !!shop.products.length),
                      null,
                      2
                    )}
                  </pre>
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
