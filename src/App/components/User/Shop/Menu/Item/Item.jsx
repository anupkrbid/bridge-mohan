import React from 'react';

import './Item.css';

const item = props => {
  let checkbox = null;
  if (props.shopName.toLowerCase() !== 'khilonewala') {
    checkbox = (
      <input
        type="checkbox"
        style={{
          display:
            props.shopName.toLowerCase() === 'khilonewala' ? 'none' : 'block'
        }}
        onChange={event => {
          event.persist();
          props.updatedCartStateIndex(
            event,
            props.shopIndex,
            props.productIndex
          );
        }}
        aria-label={'Checkbox to to buy' + props.item.name}
      />
    );
  }
  return (
    <div className="row menu_row">
      <div className="col-1 col-sm-1 col-md-1">{checkbox}</div>
      <div className="col-7 col-sm-7 col-md-8">
        <h3 className="menu_ttl_txt">{props.item.name}</h3>
        {/* <p className="menu_dsc">This is demo text and will be replaced</p> */}
      </div>
      <div className="col-3 col-sm-3 col-md-3">
        LMC <b>{props.item.price}</b>
      </div>
    </div>
  );
};

export default item;
