import React from 'react';

import './Shop.css';
import Menu from './Menu/Menu';

const shop = props => (
  <section className="menu_blk">
    <h2>{props.shop.name}</h2>
    <Menu
      shopIndex={props.shopIndex}
      products={props.shop.products}
      updatedCartStateIndex={props.updatedCartStateIndex}
    />
  </section>
);

export default shop;
