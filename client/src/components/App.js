/*jshint esversion: 6 */
// Components
import React, { Component } from 'react';
// import ProtectedRoute from './ProtectedRoute'
import AuthRoute from './AuthRoute';
import FetchUser from './FetchUser';
import { BrowserRouter as Router, Route, Link, Match, Redirect, Switch } from 'react-router-dom'

import DashboardLayout from './Layouts/DashboardLayout';
import LoginLayout from './Layouts/LoginLayout';

// Pages in Switch
import NoMatch from './NoMatch';
import UserFeed from './UserFeed';
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
import Page1 from './Tour/Page1';
import Page2 from './Tour/Page2';
import Page3 from './Tour/Page3';

/*  Route wrapper  */
const DashboardRoute = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <DashboardLayout>
          <Component {...matchProps} />
      </DashboardLayout>
    )} />
)};
const LoginLayoutRoute = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <LoginLayout>
          <Component {...matchProps} />
      </LoginLayout>
    )} />
)};

/*   App   */ 
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/'>
            <Redirect to='/Login'/>
          </Route>
          <LoginLayoutRoute path='/login' component={Login}/>
          <LoginLayoutRoute path='/Tour_1' component={Page1}/>
          <LoginLayoutRoute path='/Tour_2' component={Page2}/>
          <LoginLayoutRoute path='/Tour_3' component={Page3}/>
          <DashboardRoute exact path='/Feed' component={UserFeed} />
          <DashboardRoute path='/Files' component={Files} />
          <DashboardRoute path='/Photos' component={Photos} />
          <DashboardRoute path='/Letters' component={Letters} />
          <DashboardRoute path='/Goals' component={Goals} />
          <DashboardRoute path='/Courses' component={Courses} />
          <DashboardRoute path='/Announcements' component={Announcements} />
          <DashboardRoute path='/Updates' component={Updates} />
          <DashboardRoute path='/Assignments' component={Assignments} />
          <DashboardRoute path='/Community' component={Community} />
          <DashboardRoute path='/Settings' component={Settings} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    );
  }
}

export default App;
