import React from 'react';

import FakeWrapper from '../../../hoc/fakeWrapper';

const placeOrder = props => (
  <FakeWrapper>
    <section className="button_wrp">
      <button
        type="button"
        className="btn btn-primary order_btn"
        onClick={props.placeOrder}
      >
        Place Order
      </button>
      <button
        type="button"
        className="btn btn-primary order_btn"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Place Order jQuery
      </button>
    </section>
    {/* <!-- Modal --> */}
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Order Summery
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="order_summery">
              <section className="menu_blk">
                <h2>Dhabewala</h2>
                <div className="row menu_row">
                  <div className="col-7 col-sm-7 col-md-7">
                    <h3 className="menu_ttl_txt">Title text</h3>
                    <p className="menu_dsc">
                      This is demo text and will be replaced
                    </p>
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
              </section>
              <section className="menu_blk">
                <h2>Khilonewala</h2>
                <div className="row menu_row">
                  <div className="col-7 col-sm-7 col-md-7">
                    <h3 className="menu_ttl_txt">Title text</h3>
                    <p className="menu_dsc">
                      This is demo text and will be replaced
                    </p>
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
              </section>
              <section className="menu_blk">
                <h2>Paanwala</h2>
                <div className="row menu_row">
                  <div className="col-7 col-sm-7 col-md-7">
                    <h3 className="menu_ttl_txt">Title text</h3>
                    <p className="menu_dsc">
                      This is demo text and will be replaced
                    </p>
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
              </section>
              <section className="menu_blk">
                <div className="row menu_row">
                  <div className="col-9 col-sm-9 col-md-9">
                    <h3 className="menu_ttl_txt">Total</h3>
                  </div>
                  <div className="col-3 col-sm-3 col-md-3">
                    LMC <b>60</b>
                  </div>
                </div>
              </section>
            </div>
            <section className="menu_blk user_details">
              <h2>User Details</h2>
              <div className="row menu_row">
                <div className="col-md-12">
                  <form>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Full Name</label>
                      <input
                        type="name"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Full Name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Phone Number"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </section>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary cancel"
              data-dismiss="modal"
            >
              Cancel
            </button>
            <button type="button" className="btn btn-primary confirm">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  </FakeWrapper>
);

export default placeOrder;
