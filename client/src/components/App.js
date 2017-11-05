// Components
import React, { Component } from 'react'
// import ProtectedRoute from './ProtectedRoute'
import AuthRoute from './AuthRoute'
import FetchUser from './FetchUser'
import { Switch, Route } from 'react-router-dom'

// Pages in Switch
import NoMatch from './NoMatch'
import Home from './Home'
import Files from './Files'
import Login from './Login'
import Photos from './Photos'
import Letters from './Letters'
import Goals from './Goals'
import Courses from './Courses'
import Announcements from './Announcements'
import Updates from './Updates'
import Assignments from './Assignments'
import Community from './Community'
import Settings from './Settings'
import Register from './Register'
import Page1 from './Tour/Page1'
import Page2 from './Tour/Page2'
import Page3 from './Tour/Page3'

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
          <Route path='/Tour_1' component={Page1} />
          <Route path='/Tour_2' component={Page2} />
          <Route path='/Tour_3' component={Page3} />
          <AuthRoute exact path='/login' component={Login} />
          <AuthRoute exact path='/register' component={Register} />
          <Route component={NoMatch} />
        </Switch>
      </FetchUser>
    );
  }
}

export default App;
