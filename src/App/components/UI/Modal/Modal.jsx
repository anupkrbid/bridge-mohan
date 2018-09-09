import React from 'react';

import './Modal.css';
import CheckoutSummary from '../../User/PlaceOrder/Modal/CheckoutSummary/CheckoutSummary';
import UserDetails from '../../User/PlaceOrder/Modal/UserDetails/UserDetails';

const modal = props => {
  let modalContent = null;
  if (props.orderState === 1) {
    modalContent = (
      <CheckoutSummary
        updateOrderState={props.updateOrderState}
        cart={props.cart}
      />
    );
  } else if (props.orderState === 2) {
    modalContent = <UserDetails updateOrderState={props.updateOrderState} />;
  }
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">{modalContent}</div>
      </div>
    </div>
  );
};

export default modal;
