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
  <Menu>
    <Menu.Item position='right'>
      <Input className='icon' icon='search' placeholder='Search...' />
    </Menu.Item>
  </Menu>
)

export default NavBar;
