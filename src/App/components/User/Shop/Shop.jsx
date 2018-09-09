import React from 'react';

import './Shop.css';
import Menu from './Menu/Menu';

const shop = props => (
  <section className="menu_blk">
    <h2>{props.shop.name}</h2>
    <Menu products={props.shop.products} />
  </section>
);

export default shop;
