// Components
import React, { Component } from 'react';
import ProtectedRoute from './ProtectedRoute';
import AuthRoute from './AuthRoute';
import FetchUser from './FetchUser';
import { Switch, Route } from 'react-router-dom';
import Flash from './Flash';
import NavBar from './NavBar';

// Pages in Switch
import NoMatch from './NoMatch';
import Home from './Home';
import Login from './Login';
import Register from './Register';

class App extends Component {
  render() {
    return (
      <div>

        <div>
          <NavBar />
          <Flash />
          <FetchUser>
            <Switch>
              <Route exact path='/' component={Home} />
              <AuthRoute exact path='/login' component={Login} />
              <AuthRoute exact path='/register' component={Register} />
              <Route component={NoMatch} />
            </Switch>
          </FetchUser>
        </div>
      </div>
    );
  }
}

export default App;
