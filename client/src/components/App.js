/*jshint esversion: 6 */
// Components
import React, { Component } from 'react';
// import ProtectedRoute from './ProtectedRoute'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import Flash from './Flash'
import DashboardLayout from './Layouts/DashboardLayout';
import LoginLayout from './Layouts/LoginLayout';

// Pages in Switch
import NoMatch from './NoMatch';
import UserFeed from './UserFeed';
import Files from './Files/Files';
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
import Page1 from './NoAuth/Page1';
import Page2 from './NoAuth/Page2';
import Page3 from './NoAuth/Page3';

/*  Route wrapper  */
const DashboardRoute = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <DashboardLayout>
        <div>
          <div>
          <Flash />
          </div>
          <Component {...matchProps} />
        </div>
      </DashboardLayout>
    )} />
)};
const LoginLayoutRoute = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <LoginLayout>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexFlow: 'column',
          }}>

          <div>
            <Flash />
          </div>

          <div>
            <Component {...matchProps} />
          </div>

        </div>
      </LoginLayout>
    )} />
   
)};
const style= {
  flash: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',

  },
}

/*   App   */ 
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <LoginLayoutRoute exact path='/' component={Login}/>
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
