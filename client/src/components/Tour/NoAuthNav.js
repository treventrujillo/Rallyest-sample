import React from 'react'
import { Menu, Image } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const NoAuthNav = () => (
  <div style={styles.menu}>
    <Menu borderless style={styles.menu}>
      <Menu.Item name='Rallyest' borderless>  
        <Image 
          src={require('../../assets/images/logo_small.png')} 
          size='small'/>
      </Menu.Item>
      
      <Menu.Menu position='right'>
  
        <Menu.Item borderless>
          <Link to={'/'} style={styles.menu_item} as='h1'>Product</Link>
        </Menu.Item>
        
        <Menu.Item borderless>  
          <Link to={'/'} style={styles.menu_item} as='h1'>Support</Link>
        </Menu.Item>
        
        <Menu.Item borderless>  
          <Link to={'/'} style={styles.menu_item} as='h1'>Find your team</Link>
        </Menu.Item>
        
        <Menu.Item borderless style={styles.item_right}>  
          <Link to={'/'} style={styles.menu_item} as='h1'>Sign In</Link>
        </Menu.Item>
  
      </Menu.Menu>
    </Menu>
  </div>
)

const styles = {
  menu: {
    backgroundColor: '#2d618e',
    marginBottom: '1vh',
    height: '10vh',
  },
  item_right: {
    marginRight: '2vw',
  },
  header_container:{
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
  },
  header: {
    overflow: 'hidden',
    backgroundColor: '#2d618e',
    width: '90vw',
  },
  menu_item: {
    color: '#e1e6e7',
    fontSize: '15px',
    margin: '0px 7px 0px 7px',
  },
}

export default NoAuthNav;