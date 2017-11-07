
import React from 'react';
import LeftMenu from './LeftMenu';
import NavBar from './NavBar';
import App from './App';
import Flash from './Flash';
import { Container } from 'semantic-ui-react';
import AppEntry2 from './AppEntry2';

const AppEntry = () => (

  <div>
    <div style={styles.rowContainer}>

      <div style={styles.leftMenu}>
        <div>
          <LeftMenu/>
        </div>
      </div>

      <div style={styles.userPage}>
    </div>
    <div style={styles.columnContainer}>
      <div>
        <div tyle={styles.userNav}>
          <NavBar />
        </div>
      </div>

        <div>
          <div style={styles.page}>
            <Container>
            <Flash/>
            <App/>
            </Container> 
          </div>
        </div>

      </div>

    </div>
  </div>
)



const styles ={
  rowContainer:{
    display:'flex',
    flexDirection:'row',
    flex:1,
  },
  columnContainer:{
    display:'flex',
    flexDirection:'column',
    flex:1,
  },
  leftMenu:{
    display:'flex',
    position: 'fixed',
  },
  userPage:{
    display:'flex',
  },
  userNav:{
    display:'flex',
    flex:1,
  },
  page:{
    display:'flex',
    left:0,
    right:0,
    bottom:0,
    top:0,
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
}

export default AppEntry;
