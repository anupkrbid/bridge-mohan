import React from 'react';

import './ModalItem.css';

const modalItem = props => {
  return (
    <div className="row menu_row">
      <div className="col-7 col-sm-7 col-md-7">
        <h3 className="menu_ttl_txt">{props.product.name}</h3>
        {/* <p className="menu_dsc">This is demo text and will be replaced</p> */}
      </div>
      <div className="col-2 col-sm-2 col-md-2">
        <select
          value={props.product.quantity}
          onChange={event => {
            event.persist();
            props.updateCartState(event, props.shopIndex, props.productIndex);
          }}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div className="col-3 col-sm-3 col-md-3">
        LMC <b>{props.product.total}</b>
      </div>
    </div>
  );
};

export default modalItem;
