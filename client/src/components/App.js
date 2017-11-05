// Components
import React, { Component } from 'react';
import ProtectedRoute from './ProtectedRoute';
import AuthRoute from './AuthRoute';
import FetchUser from './FetchUser';
import { Switch, Route } from 'react-router-dom';

// Pages in Switch
import NoMatch from './NoMatch';
import Home from './Home';
import Files from './Files';
import Login from './Login';
import Photos from './Photos';
import Letters from './Letters';
import Goals from './Goals';
import Courses from './Courses';
import Announcements from './Announcements';
import Updates from './Updates';
import Assignments from './Assignments';
import Community from './Community';
import Settings from './Settings';
import Register from './Register';

class App extends Component {
  render() {
    return (
      <FetchUser>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/Files' component={Files} />
          <Route path='/Photos' component={Photos} />
          <Route path='/Letters' component={Letters} />
          <Route path='/Goals' component={Goals} />
          <Route path='/Courses' component={Courses} />
          <Route path='/Announcements' component={Announcements} />
          <Route path='/Updates' component={Updates} />
          <Route path='/Assignments' component={Assignments} />
          <Route path='/Community' component={Community} />
          <Route path='/Settings' component={Settings} />
          <AuthRoute exact path='/login' component={Login} />
          <AuthRoute exact path='/register' component={Register} />
          <Route component={NoMatch} />
        </Switch>
      </FetchUser>
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
}

export default App;
