import React from 'react';
import {
   Menu,
   Container,
   Icon,
   Input,
  } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';

const NavBar = () => (
  //TODO: Make links active 
  <Menu style={styles.bar} borderless>
    <Menu.Item position='right'>
      <Input className='icon' icon='search' placeholder='Search...' size='huge' />
    </Menu.Item>
    <Menu.Item>
      <Icon className='alarm' size='big' />
    </Menu.Item>
    <Menu.Item>
      <Icon className='users' size='big' />
    </Menu.Item>
    <Menu.Item>
      <Icon className='user circle' size='big' />
    </Menu.Item>
  </Menu>
)

const styles = {
  bar : {
    'height': '15vh',
  },
}

export default NavBar;
