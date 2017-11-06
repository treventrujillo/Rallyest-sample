import React, { Component } from 'react';
import NavBar from './NavBar';
import App from './App';
import Flash from './Flash';
import { Container } from 'semantic-ui-react';

const AppEntry2 = () => (
  <div style={styles.container}>
    <div style={styles.navbar}>
      <NavBar />
    </div>
    <div>
      <Container>
        <Flash/>
        <App/>
      </Container>
    </div>
  </div>
)
const styles = {
  container:{
    right: '0px',
  },
}

export default AppEntry2;
