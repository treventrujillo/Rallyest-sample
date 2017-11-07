import React, { Component } from 'react';
import App from './App';
import Flash from './Flash';
import NavBar from './NavBar';
import { Container } from 'semantic-ui-react';

const AppEntry2 = () => (
  <div>
    <div style={{ position: 'static', alignItems: 'stretch', minWidth: '100%', overflow:'hidden'}}>
      <div>
        <div>
          <Container>
          <Flash/>
          <App/>
          </Container> 
        </div>
      </div>
    </div>
  </div>
)
const styles = {
  container:{
  },
}

export default AppEntry2;
