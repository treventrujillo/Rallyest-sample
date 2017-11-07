
import React from 'react';
import LeftMenu from './LeftMenu';
import NavBar from './NavBar';
import AppEntry2 from './AppEntry2';

const AppEntry = () => (

  <div>
    <div style={styles.uiContainer}>

      <div style={styles.menu}>
        <div>
          <LeftMenu/>
        </div>
      </div>

      <div>
        <div>
          <div>
            <NavBar />
          </div>
        </div>
    
        <div style={styles.page}>
          <div>
            <AppEntry2/>
          </div>
        </div>
      </div>
    </div>
  </div>
);



const styles ={
  uiContainer:{
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  leftSide:{
    display: 'flex',
  },
  rightSide:{
    display: 'flex',
  },
  menu:{
    position: 'fixed',
  },
  page:{
  },
}
  
  // container:{
  //   display: 'flex',
  //   flexDirection: 'row',
  //   flex: 1,
  //   bottom: 0,

  // },
  // menu:{
  //   display: 'flex',
  // },
  // top_menu:{
  //   display: 'flex',
  //   minWidth: '100%',
  // },
  // page:{
  //   flexGrow: '2',
  //   display: 'flex',
  // }
// }

export default AppEntry;
