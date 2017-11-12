/*jshint esversion: 6 */
import React, { Component } from 'react';
import NoAuthNav from '../Tour/NoAuthNav';
import NoAuthFooter from '../Tour/NoAuthFooter';
import TourBox from '../Tour/TourBox';

const LoginLayout = ({children, ...rest}) => {
  return (
    <div style={styles.tourFlexContainer}>
      <div style={styles.header}>
        <NoAuthNav/>
      </div>
      <div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
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

export default LoginLayout;
