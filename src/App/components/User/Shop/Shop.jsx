import React from 'react';

import './Shop.css';
import Menu from './Menu/Menu';

const shop = props => {
  let text =
    '50% off* on Khilonewala on pre order more than LMC 500. Show confirmation email to get your coupon. *T&C applicable.';
  if (props.shop.name.toLowerCase() === 'khilonewala') {
    text = 'Pre order not applicable for Khilonewala';
  }
  return (
    <section className="menu_blk">
      <h2>{props.shop.name}</h2>
      <Menu
        shopIndex={props.shopIndex}
        shopName={props.shop.name}
        products={props.shop.products}
        updatedCartStateIndex={props.updatedCartStateIndex}
      />
      <div>{text}</div>
    </section>
  );
};

export default shop;
