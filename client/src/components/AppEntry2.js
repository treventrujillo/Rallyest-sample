
import React, { Component } from 'react';
import NavBar from './NavBar';
import App from './App';

const AppEntry2 = () => (
  <div style={styles.container}>
    <div style={styles.navbar}>
      <NavBar />
    </div>
    <div>
      <App/>
    </div>
  </div>
)
const styles = {
  container:{
    display: 'flex',
    flexDirection: 'column',
  },
  navbar: {
    height: '100%',
  },

}

export default AppEntry2;
