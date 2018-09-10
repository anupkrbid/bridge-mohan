import React from 'react';

import './ModalMenu.css';
import ModalItem from './ModalItem/ModalItem';

const modalMenu = props => {
  const items = props.products.map((product, index) => (
    <ModalItem
      key={product.name}
      shopIndex={props.shopIndex}
      productIndex={index}
      product={product}
      updateCartState={props.updateCartState}
    />
  ));
  return items;
};

export default modalMenu;
