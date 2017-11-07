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


const options = [{
  value: '0', image: { avatar: true, src: '../assets/images/selected.png'}
}]

class NavBar extends React.Component {
  render() {
    return (
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
          options={4}>
          <Image src={require('../assets/images/teamimg1.png')} options={options}/>
        </Dropdown>
      </Menu.Item>
    </Menu>
    )
  }
};

export default NavBar;
