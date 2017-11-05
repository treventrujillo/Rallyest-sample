
import React from 'react';
import Flash from './Flash';
import LeftMenu from './LeftMenu';
import AppEntry2 from './AppEntry2';

const AppEntry = () => (

  <div style={styles.container}>
    <div style={styles.menu}>
      <LeftMenu/>
      <Flash />
    </div>
    <div style={styles.page}>
      <AppEntry2/>
    </div>
  </div>
)

const styles ={
  container:{
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    bottom: 0,

  },
  menu:{

  },
  page:{
    flexGrow: '2',
  }
}

export default AppEntry;
