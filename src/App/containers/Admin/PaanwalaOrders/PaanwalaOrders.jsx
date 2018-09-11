import React, { Component } from 'react';
import firebase from '../../../../firebase';
import 'firebase/database';

import './PaanwalaOrders.css';

class PaanwalaOrders extends Component {
  state = {
    paanwala: []
  };

  componentDidMount() {
    this.paanwalaRef = firebase
      .database()
      .ref('orders')
      .child('paanwala');

    this.paanwalaRef.on('child_added', snap => {
      const paanwala = JSON.parse(JSON.stringify(this.state.paanwala));
      const data = snap.val();
      data.id = snap.key;
      paanwala.push(data);
      this.setState({ paanwala: paanwala });
    });

    this.paanwalaRef.on('child_changed', snap => {
      const paanwala = JSON.parse(JSON.stringify(this.state.paanwala));
      const data = snap.val();
      data.id = snap.key;
      const updatedPaanwala = paanwala.map(
        order => (order.id === snap.key ? data : order)
      );
      this.setState({ paanwala: updatedPaanwala });
    });
  }

  updateOrderStateHandler(state, id) {
    this.paanwalaRef.child(id).update({ status: state });
  }

  componentWillUnmount() {
    this.paanwalaRef.off();
  }

  render() {
    const paanwala = this.state.paanwala.map(order => {
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
                  <a
                    className="dropdown-item"
                    style={{ cursor: 'pointer' }}
                    onClick={this.updateOrderStateHandler.bind(
                      this,
                      1,
                      order.id
                    )}
                  >
                    Confirm Order
                  </a>
                  <a
                    className="dropdown-item"
                    style={{ cursor: 'pointer' }}
                    onClick={this.updateOrderStateHandler.bind(
                      this,
                      0,
                      order.id
                    )}
                  >
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
        <tbody>{paanwala}</tbody>
      </table>
    );
  }
}

export default PaanwalaOrders;
