import React from 'react';

import './Modal.css';
import CheckoutSummary from '../../User/PlaceOrder/Modal/CheckoutSummary/CheckoutSummary';
import UserDetails from '../../User/PlaceOrder/Modal/UserDetails/UserDetails';
import ConformOrder from '../../User/PlaceOrder/Modal/Confirmation/Confirmation';

const modal = props => {
  let modalContent = null;
  if (props.orderState === 1) {
    modalContent = (
      <CheckoutSummary
        updateOrderState={props.updateOrderState}
        cart={props.cart}
        updateCartState={props.updateCartState}
      />
    );
  } else if (props.orderState === 2) {
    modalContent = (
      <UserDetails
        validation={props.validation}
        updateOrderState={props.updateOrderState}
        updateUser={props.updateUser}
      />
    );
  } else if (props.orderState === 3) {
    modalContent = (
      <ConformOrder
        maxLimit={props.maxLimit}
        cart={props.cart}
        user={props.user}
      />
    );
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
