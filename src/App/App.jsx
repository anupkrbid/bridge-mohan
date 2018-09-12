import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Admin from './containers/Admin/Admin';
import User from './containers/User/User';
import './App.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={User} />
        <Route
          path="/admin"
          render={() => {
            const pass = window.prompt('Password for Admin Access');
            if (pass === 'toor') {
              return <Admin />;
            }
            return <Redirect to="/" />;
          }}
        />
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default App;
