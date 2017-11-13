/*jshint esversion: 6 */
import React, { Component } from 'react';
import NoAuthNav from '../NoAuth/NoAuthNav';
import NoAuthFooter from '../NoAuth/NoAuthFooter';
import TourBox from '../NoAuth/TourBox';

const LoginLayout = ({children, ...rest}) => {
  return (
    <div style={styles.LoginFlexContainer}>
      <div style={styles.header}>
        <NoAuthNav/>
      </div>
      <div>
        <div>
          <div style={styles.tourBox}>
            {children}
          </div>
        </div>
      </div>
      <div style={styles.footerContainer}>
        <div>
          <NoAuthFooter/>
        </div>
      </div>
    </div>
  );
}

const styles={
  LoginFlexContainer:{
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
    minHeight: '75vh',
    minWidth: '75vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: '20px',
    borderTopRightRadius: '20px',
  }
}

export default LoginLayout;
