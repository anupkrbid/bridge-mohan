import React, { Component } from 'react';
import firebase from '../../../firebase';
import 'firebase/database';

import './Admin.css';
import FakeWrapper from '../../hoc/fakeWrapper';

class Admin extends Component {
  state = {
    dhabewala: [],
    khilonewala: [],
    paanwala: [],
    tabIndex: 0
  };

  componentDidMount() {
    const dhabewalaRef = firebase
      .database()
      .ref('orders')
      .child('dhabewala');

    const paanwalaRef = firebase
      .database()
      .ref('orders')
      .child('paanwala');

    const khilonewalaRef = firebase
      .database()
      .ref('orders')
      .child('khilonewala');

    dhabewalaRef.on('child_added', snap => {
      const data = snap.val();
      const dhabawala = JSON.parse(JSON.stringify(this.state.dhabewala));
      dhabawala.push(data);
      this.setState({ dhabewala: dhabawala });
    });
  }

  updateTabIndexHandler = index => {
    this.setState({ tabIndex: index });
  };

  render() {
    const navs = ['Dhabewala', 'Paanwala', 'Khilonewala'];

    const navigations = navs.map((nav, index) => {
      let classes = 'nav-item nav-link';
      if (this.state.tabIndex === index) {
        classes += ' active';
      }
      return (
        <a
          key={nav}
          className={classes}
          style={{ cursor: 'pointer' }}
          onClick={() => this.updateTabIndexHandler(index)}
        >
          {nav}
        </a>
      );
    });

    const dhabewala = this.state.dhabewala.map((order, index) => {
      const orderData = JSON.stringify({
        total: order.total,
        orders: order.orders,
        status: order.status
      });
      let tableRowClass = '';
      if (order.status === -1) {
        tableRowClass = 'table-warning';
      } else if (order.status === 0) {
        tableRowClass = 'table-danger';
      } else if (order.status === 1) {
        tableRowClass = 'table-success';
      }

      return (
        <tr key={index} className={tableRowClass}>
          <th scope="row">1</th>
          <td>{order.user.fullName}</td>
          <td>{order.user.email}</td>
          <td>{orderData}</td>
          <td>
            <div
              className="btn-group"
              role="group"
              aria-label="Button group with nested dropdown"
            >
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => window.open(`tel:${order.user.phoneNo}`)}
              >
                Call
              </button>

              <div className="btn-group" role="group">
                <button
                  id="btnGroupDrop1"
                  type="button"
                  className="btn btn-secondary dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Status Update
                </button>
                <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                  <a className="dropdown-item" style={{ cursor: 'pointer' }}>
                    Confirm Order
                  </a>
                  <a className="dropdown-item" style={{ cursor: 'pointer' }}>
                    Cancel Order
                  </a>
                </div>
              </div>
            </div>
          </td>
        </tr>
      );
    });

    return (
      <FakeWrapper>
        <nav className="nav nav-pills nav-fill">{navigations}</nav>
        <br />
        <br />
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Order</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>{dhabewala}</tbody>
        </table>
      </FakeWrapper>
    );
  }
}

export default Admin;
