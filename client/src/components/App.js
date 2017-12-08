/* jshint esversion: 6 */
// Components
import React, { Component } from 'react'
// import ProtectedRoute from './ProtectedRoute'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import Flash from './Flash'
import DashboardLayout from './Layouts/DashboardLayout'
import LoginLayout from './Layouts/LoginLayout'

import store from '../store'
import { setFlash } from '../actions/flash'
import { withCookies, Cookies } from 'react-cookie'
import { instanceOf } from 'prop-types'

// Pages in Switch
import NoMatch from './NoMatch'
import UserFeed from './UserFeed'
import Files from './Files/Files'
import Login from './Login'
import Photos from './Photos/Photos'
import Letters from './Letters'
import Goals from './Goals'
import Courses from './Courses'
import Announcements from './Announcements'
import Updates from './Updates'
import Assignments from './Assignments'
import Community from './Community'
import Settings from './Settings'
import Page1 from './NoAuth/Page1'
import Page2 from './NoAuth/Page2'
import Page3 from './NoAuth/Page3'

const flash = () => {
  store.dispatch(setFlash('Login to continue', 'red'))
}

/*  Route wrapper  */
const DashboardRoute = ({component: Component, ...rest, authenticated }) => {
  if (!authenticated) {
    return (
      <div>
        {flash()}
        <Redirect to='/' />
      </div>
    )
  } else {
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
    )
  }
}

const LoginLayoutRoute = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <LoginLayout>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexFlow: 'column'
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
    )
  }
  

/*   App   */
class App extends Component {
  constructor(props) {
    super()
    
    this.state = {
      authenticated: false
    }
    this.authCookie = this.authCookie.bind(this)
  }
  
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  }
  
  componentWillMount () {
    this.authCookie()    
  }

  authCookie () {
    const { cookies } = this.props
    const token = cookies.get('access_token')
    
    if (token) {
      this.setState({ authenticated: true })
    } else {
      return
    }
  }

  render () {
    const { authenticated } = this.state
    return (
      <Router>
        <Switch>
          <LoginLayoutRoute exact path='/' component={Login} />
          <LoginLayoutRoute path='/login' component={Login} />
          <LoginLayoutRoute path='/Tour_1' component={Page1} />
          <LoginLayoutRoute path='/Tour_2' component={Page2} />
          <LoginLayoutRoute path='/Tour_3' component={Page3} />
          <DashboardRoute exact path='/Feed' component={UserFeed} authenticated={authenticated} />
          <DashboardRoute path='/Files' component={Files} authenticated={authenticated} />
          <DashboardRoute path='/Photos' component={Photos} authenticated={authenticated} />
          <DashboardRoute path='/Letters' component={Letters} authenticated={authenticated} />
          <DashboardRoute path='/Goals' component={Goals} authenticated={authenticated} />
          <DashboardRoute path='/Courses' component={Courses} authenticated={authenticated} />
          <DashboardRoute path='/Announcements' component={Announcements} authenticated={authenticated} />
          <DashboardRoute path='/Updates' component={Updates} authenticated={authenticated} />
          <DashboardRoute path='/Assignments' component={Assignments} authenticated={authenticated} />
          <DashboardRoute path='/Community' component={Community} authenticated={authenticated} />
          <DashboardRoute path='/Settings' component={Settings} authenticated={authenticated} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    )
  }
}

export default withCookies(App)
