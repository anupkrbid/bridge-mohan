import React from 'react';

import './Item.css';

const item = props => (
  <div className="row menu_row">
    <div className="col-1 col-sm-1 col-md-1">
      <input type="checkbox" aria-label="Checkbox for following text input" />
    </div>
    <div className="col-7 col-sm-7 col-md-8">
      <h3 className="menu_ttl_txt">{props.item.name}</h3>
      <p className="menu_dsc">This is demo text and will be replaced</p>
    </div>
    <div className="col-3 col-sm-3 col-md-3">
      LMC <b>{props.item.price}</b>
    </div>
  </div>
);

export default item;
