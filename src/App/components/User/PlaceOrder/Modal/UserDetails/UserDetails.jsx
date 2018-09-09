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
                  <label htmlFor="exampleInputPassword1">Phone Number</label>
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
  </FakeWrapper>
);

export default userDetails;
