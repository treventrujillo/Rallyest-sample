import React from 'react';
import {
   Menu,
   Icon,
   Input,
   Image,
  } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';

const NavBar = () => (
  //TODO: Make links active 
  <Menu borderless>
    <Menu.Item position='right'>
      <Input className='icon' icon='search' placeholder='Search...' size='huge' />
    </Menu.Item>
    <Menu.Item>
      <Icon className='users' size='big' />
    </Menu.Item>
    <Menu.Item>
      <Image src={require('../assets/images/selected.png')} alt='Announcements' avatar />
    </Menu.Item>
    <Menu.Item>
      <Image src={require('../assets/images/teamimg1.png')} alt='Home teams' />
    </Menu.Item>
  </Menu>
)

const styles = {
  bar : {
    
  },
}

export default NavBar;
