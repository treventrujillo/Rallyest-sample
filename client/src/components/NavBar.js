import React from 'react';
import {
   Menu,
   Icon,
   Input,
   Image,
   Dropdown,
  } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';
import { NavWrap } from './styles/styles';


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
      <Dropdown 
        fluid
        options={4}
        >
          <Image src={require('../assets/images/teamimg1.png')} alt='Home teams' />
      </Dropdown>
    </Menu.Item>
  </Menu>
)

export default NavBar;
