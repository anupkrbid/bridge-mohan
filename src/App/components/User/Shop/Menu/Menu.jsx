import React from 'react';

import './Menu.css';
import Item from './Item/Item';

const menu = props => {
  const products = props.products.map((item, index) => (
    <Item
      key={item.name}
      shopName={props.shopName}
      shopIndex={props.shopIndex}
      productIndex={index}
      item={item}
      updatedCartStateIndex={props.updatedCartStateIndex}
    />
  ));

  return products;
};

export default menu;
