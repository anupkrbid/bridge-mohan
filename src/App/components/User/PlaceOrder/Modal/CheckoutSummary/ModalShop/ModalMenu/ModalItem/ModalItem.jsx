import React from 'react';

import './ModalItem.css';

const modalItem = props => {
  return (
    <div className="row menu_row">
      <div className="col-7 col-sm-7 col-md-7">
        <h3 className="menu_ttl_txt">Title text</h3>
        <p className="menu_dsc">This is demo text and will be replaced</p>
      </div>
      <div className="col-2 col-sm-2 col-md-2">
        <select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <div className="col-3 col-sm-3 col-md-3">
        LMC <b>20</b>
      </div>
    </div>
  );
};

export default modalItem;
