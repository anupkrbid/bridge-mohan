import React from 'react';

import FakeWrapper from '../../../hoc/fakeWrapper';
import Modal from '../../UI/Modal/Modal';

const placeOrder = props => (
  <FakeWrapper>
    <section className="button_wrp">
      <button
        type="button"
        onClick={props.placeOrder}
        className="btn btn-primary order_btn"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Place Order
      </button>
    </section>
    <Modal
      cart={props.cart}
      orderState={props.orderState}
      updateOrderState={props.updateOrderState}
    />
  </FakeWrapper>
);

export default placeOrder;
