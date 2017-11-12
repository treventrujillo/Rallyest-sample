/*jshint esversion: 6 */

import React, { Component } from 'react';
import NavBar from '../NavBar';
import LeftMenu from '../LeftMenu';
import Flash from '../Flash';
import { Container } from 'semantic-ui-react';

const DashboardLayout =({children, ...rest}) => {
  return (
    <div className="page page-dashboard">
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
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

const styles={
  tourFlexContainer:{
    display: 'flex',
    flexDirection: 'column',
  },
  header:{
    height: '10vh',
  },
  footerContainer:{
    paddingBottom: '20px',
    paddingLeft: '20px',
    paddingRight: '20px',
    backgroundColor: 'white',
  },
  tourBox:{
    minHeight: '600px',
    minWidth: '600px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: '20px',
    borderTopRightRadius: '20px',
  }
}

export default DashboardLayout;
