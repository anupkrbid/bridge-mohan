import React, { Component } from 'react';
import firebase from '../../../../firebase';
import 'firebase/database';

import './DhabewalaOrders.css';

class DhabewalaOrders extends Component {
  state = {
    dhabewala: []
  };

  componentDidMount() {
    this.dhabewalaRef = firebase
      .database()
      .ref('orders')
      .child('dhabewala');

    this.dhabewalaRef.on('child_added', snap => {
      const dhabewala = JSON.parse(JSON.stringify(this.state.dhabewala));
      const data = snap.val();
      data.id = snap.key;
      dhabewala.push(data);
      this.setState({ dhabewala: dhabewala });
    });

    this.dhabewalaRef.on('child_changed', snap => {
      const dhabewala = JSON.parse(JSON.stringify(this.state.dhabewala));
      const data = snap.val();
      data.id = snap.key;
      const updatedDhabewala = dhabewala.map(
        order => (order.id === snap.key ? data : order)
      );
      this.setState({ dhabewala: updatedDhabewala });
    });
  }

  updateOrderStateHandler(state, id) {
    this.dhabewalaRef.child(id).update({ status: state });
  }

  componentWillUnmount() {
    this.dhabewalaRef.off();
  }

  render() {
    const dhabewala = this.state.dhabewala.map(order => {
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

      let updateStatusButton = null;
      if (order.status === -1) {
        updateStatusButton = (
          <div className="btn-group" role="group">
            <button
              id="btnGroupDrop1"
              type="button"
              className="btn btn-secondary dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Update Status
            </button>
            <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
              <a
                className="dropdown-item"
                style={{ cursor: 'pointer' }}
                onClick={this.updateOrderStateHandler.bind(this, 1, order.id)}
              >
                Confirm Order
              </a>
              <a
                className="dropdown-item"
                style={{ cursor: 'pointer' }}
                onClick={this.updateOrderStateHandler.bind(this, 0, order.id)}
              >
                Cancel Order
              </a>
            </div>
          </div>
        );
      }

      return (
        <tr key={order.id} className={tableRowClass}>
          <th scope="row">{order.id}</th>
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

              {updateStatusButton}
            </div>
          </td>
        </tr>
      );
    });

    return (
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
    );
  }
}

export default DhabewalaOrders;
