// Components
import React, { Component } from 'react';
import ProtectedRoute from './ProtectedRoute';
import AuthRoute from './AuthRoute';
import FetchUser from './FetchUser';
import { Switch, Route } from 'react-router-dom';
import { Grid } from 'semantic-ui-react'
import NavBar from './NavBar';
import App from './App';

class AppEntry2 extends Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.navbar}>
          <NavBar />
        </div>
        <div>
          <App/>
        </div>
      </div>
    );
  }
}

const styles = {
  container:{
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  navbar: {
    height: '100%',
    overflow: 'hidden',
  },

}

export default AppEntry2;
