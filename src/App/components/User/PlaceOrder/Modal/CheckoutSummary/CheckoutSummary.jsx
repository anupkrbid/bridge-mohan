import React from 'react';

import './CheckoutSummary.css';
import ModalShop from './ModalShop/ModalShop';
import FakeWrapper from '../../../../../hoc/fakeWrapper';

const checkoutSummary = props => {
  const modelShops = props.cart
    .filter(shop => !!shop.products.length)
    .map((shop, index) => (
      <ModalShop
        key={shop.shopName}
        shopIndex={index}
        shop={shop}
        updateCartState={props.updateCartState}
      />
    ));

  let total = null;
  if (!!props.cart.length) {
    total = props.cart
      .map(shop => shop.total)
      .reduce((accumulator, currentValue) => accumulator + currentValue);
  }

  return (
    <FakeWrapper>
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">
          Order Summery
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
          {modelShops}
          <hr />
          <section className="menu_blk">
            <div className="row menu_row">
              <div className="col-9 col-sm-9 col-md-9">
                <h3 className="menu_ttl_txt">Total</h3>
              </div>
              <div className="col-3 col-sm-3 col-md-3">
                LMC <b>{total}</b>
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
          onClick={() => props.updateOrderState(1)}
          className="btn btn-primary confirm"
        >
          Confirm
        </button>
      </div>
    </FakeWrapper>
  );
};

export default checkoutSummary;
