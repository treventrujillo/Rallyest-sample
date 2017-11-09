/*jshint esversion: 6 */

import React from 'react';
import LeftMenu from './LeftMenu';
import NavBar from './NavBar';
import App from './App';
import Flash from './Flash';
import { Container } from 'semantic-ui-react';

const AppEntry = () => (
  <div id="wrap">
    <div id="left-menu-container">
      <div id="left-menu-wrap">
        <div id="overlay">
          <LeftMenu/>
        </div>
      </div>
    </div>
    <div class="test">
      <div id="hero">
        <div id="hero-overlay">
          <NavBar/>
        </div>
      </div>
      <div id="project-one-container">
        <App/>
      </div>
    </div>
  </div>
);

export default AppEntry;
