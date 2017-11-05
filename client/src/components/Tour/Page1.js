import React from 'react'
import { Header } from 'semantic-ui-react';

const Page1 = () => (
  <div>
    
    <div style={styles.header}>
      <img 
        src={require('../../assets/images/logo_small.png')} 
        style={{height: '15%', width: '15%'}}
      />
    </div>
    
    <div style={styles.Body}>

    </div>
    
    <div style={styles.footer}>
    
    </div>
  
  </div>
)

const styles = {
  header_container:{
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
  },
  header: {
    height: '30%',
    overflow: 'hidden',
    backgroundColor: '#00aadf',
    width: '90%',
  },
}

export default Page1;