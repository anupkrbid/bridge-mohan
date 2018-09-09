import React from 'react';

import './Menu.css';
import Item from './Item/Item';

const menu = props => {
  const products = props.products.map(item => (
    <Item key={item.name} item={item} />
  ));

  return products;
};

export default menu;
