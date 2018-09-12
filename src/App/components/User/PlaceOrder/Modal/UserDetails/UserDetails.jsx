import React from 'react';

import './UserDetails.css';
import FakeWrapper from '../../../../../hoc/fakeWrapper';

const userDetails = props => (
  <FakeWrapper>
    <div className="modal-header">
      <h5 className="modal-title" id="exampleModalLabel">
        User Details
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
        <section className="menu_blk user_details">
          <div className="row menu_row">
            <div className="col-md-12">
              <form>
                <div
                  className={`form-group ${props.validation.fullName
                    .isInvalid && 'has-error'}`}
                >
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    onInput={event => {
                      event.persist();
                      props.updateUser(event);
                    }}
                    name="fullName"
                    className="form-control"
                    id="name"
                    aria-describedby="emailHelp"
                    placeholder="eg: Bridge Mohan"
                  />
                  <span className="help-block">
                    {props.validation.fullName.message}
                  </span>
                </div>
                <div
                  className={`form-group ${props.validation.phoneNo.isInvalid &&
                    'has-error'}`}
                >
                  <label htmlFor="pno">Phone Number</label>
                  <input
                    type="text"
                    onInput={event => {
                      event.persist();
                      props.updateUser(event);
                    }}
                    name="phoneNo"
                    className="form-control"
                    id="pno"
                    placeholder="eg: +919845623698"
                  />
                  <span className="help-block">
                    {props.validation.phoneNo.message}
                  </span>
                </div>
                <div
                  className={`form-group ${props.validation.email.isInvalid &&
                    'has-error'}`}
                >
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    onInput={event => {
                      event.persist();
                      props.updateUser(event);
                    }}
                    name="email"
                    className="form-control"
                    id="email"
                    placeholder="eg: bridge.mohan@learningmate.com"
                  />
                  <span className="help-block">
                    {props.validation.email.message}
                  </span>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>

    <div className="modal-footer">
      <button
        type="button"
        className="btn btn-secondary cancel"
        data-dismiss="modal"
      >
        Cancel
      </button>
      <button
        type="button"
        onClick={() => props.updateOrderState(1)}
        className="btn btn-primary confirm"
      >
        Confirm
      </button>
    </div>
  </FakeWrapper>
);

export default userDetails;
