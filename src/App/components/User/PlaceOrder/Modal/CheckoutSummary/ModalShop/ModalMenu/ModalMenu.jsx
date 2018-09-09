import React from 'react';

import './ModalMenu.css';
import ModalItem from './ModalItem/ModalItem';

const modalMenu = props => {
  const items = props.products.map(product => (
    <ModalItem key={product.name} product={product} />
  ));
  return items;
};

export default modalMenu;
