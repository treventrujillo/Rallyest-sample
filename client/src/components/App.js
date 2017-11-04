// Components
import React, { Component } from 'react';
import ProtectedRoute from './ProtectedRoute';
import AuthRoute from './AuthRoute';
import FetchUser from './FetchUser';
import { Switch, Route } from 'react-router-dom';
import { Grid } from 'semantic-ui-react'
import Flash from './Flash';
import NavBar from './NavBar';
import LeftMenu from './LeftMenu';

// Pages in Switch
import NoMatch from './NoMatch';
import Home from './Home';
import Login from './Login';
import Register from './Register';

class App extends Component {
  render() {
    return (
      <div style={styles.container}>
        <div>
          <LeftMenu/>
        </div >
        <div style={styles.page}>
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

const styles = {
  container: {
    height: '100%',
    width:'100%',
    padding: 0,
    margin: 0,
    overflow: 'hidden',
    display: 'flex',
    backgroundColor: '#e1e6e7',
  },
  page: {
    width: '100%',
  },
  menu: {
    
  }
}

export default App;
