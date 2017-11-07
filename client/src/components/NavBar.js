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

const options = [
  { value: '0', text: <span><Icon name='protect' /> Team 1</span> },
  { value: '1', text: <span><Icon name='protect'/> Team 2</span> },
  { value: '2', text: <span><Icon name='protect' /> Team 3</span> },
]


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
    <Dropdown image='../assets/images/selected.png' options={options}/>
    </Menu.Item>
  </Menu>
)

export default NavBar;
