import React from 'react';

import './Modal.css';
import CheckoutSummary from '../../User/PlaceOrder/Modal/CheckoutSummary/CheckoutSummary';
import UserDetails from '../../User/PlaceOrder/Modal/UserDetails/UserDetails';

const modal = props => (
  <div
    className="modal fade"
    id="exampleModal"
    tabIndex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <CheckoutSummary />
        {/* <UserDetails /> */}
      </div>
    </div>
  </div>
);

export default modal;
