import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Admin from './containers/Admin/Admin';
import User from './containers/User/User';
import './App.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={User} />
        <Route path="/admin" component={Admin} />
      </Switch>
    );
  }
}

export default App;
