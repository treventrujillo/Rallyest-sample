// Components
import React, { Component } from 'react';
import Flash from './Flash';
import LeftMenu from './LeftMenu';
import AppEntry2 from './AppEntry2';

class AppEntry extends Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.menu}>
          <LeftMenu/>
          <Flash />
        </div>
        <div style={styles.page}>
          <AppEntry2/>
        </div>
      </div>
    );
  }
}

const styles ={
  container:{
    display: 'flex',
    overflow: 'hidden',
  },
  menu:{
    width:'210px', 
  },
  page:{
    width:'100%',
  },
}

export default AppEntry;
