import React, { Component } from 'react';

import './Admin.css';
import FakeWrapper from '../../hoc/fakeWrapper';
import DhabewalaOrders from './DhabewalaOrders/DhabewalaOrders';
import PaanwalaOrders from './PaanwalaOrders/PaanwalaOrders';

class Admin extends Component {
  state = {
    tabIndex: 0
  };

  updateTabIndexHandler = index => {
    this.setState({ tabIndex: index });
  };

  render() {
    const navs = ['Dhabewala', 'Paanwala'];

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

    return (
      <FakeWrapper>
        <nav className="nav nav-pills nav-fill">{navigations}</nav>
        <br />
        <br />
        {!this.state.tabIndex ? <DhabewalaOrders /> : <PaanwalaOrders />}
      </FakeWrapper>
    );
  }
}

export default Admin;
