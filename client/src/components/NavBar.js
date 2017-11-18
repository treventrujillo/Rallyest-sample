/*jshint esversion: 6 */
import React from 'react';
import {
  Menu,
  Icon,
  Input,
  Image,
  Dropdown,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class NavBar extends React.Component {

  homeTeamOptions = [
    { key: 1, text: 'Hometeam1', value: 1 },
    { key: 2, text: 'Hometeam2', value: 2 },
    { key: 3, text: 'Hometeam3', value: 3 },
  ]

  announceOptions = [
    { key: 1, text: 'Announcement1', value: 1 },
    { key: 2, text: 'Announcement2', value: 2 },
    { key: 3, text: 'Announcement3', value: 3 },
  ]

  homeTrigger = (
    <span>
      <Image src={require('../assets/images/teamimg1.png')} />
    </span>
  )

  announceTrigger = (
    <span>
      <Image src={require('../assets/images/announcement_icon.png')} alt='Announcements' />
    </span>
  )

  render() {
    return (

      <div style={{ minWidth: '100%' }}>
        <Menu borderless style={{borderRadius: '0', paddingLeft: '10px'}}>

          <Menu.Item>
            <Link to='#'>
              ?
            </Link>
          </Menu.Item>

          <Menu.Item>
            <Link to='#'>
              ?
            </Link>
          </Menu.Item>

          <Menu.Item position='right'>
            <Input 
              className='icon' 
              icon='search' 
              placeholder='Search...' 
              size='huge' 
            />
          </Menu.Item>

          <Menu.Item>
            <Link to='/HomeTeam'>
              <Icon 
                className='users' 
                size='big' 
              />
            </Link>
          </Menu.Item>

          <Menu.Item>
            <Dropdown 
              trigger={this.announceTrigger} 
              options={this.announceOptions} 
              icon={null} 
              pointing='top right' 
            />
          </Menu.Item>

          <Menu.Item>
            <Dropdown 
              trigger={this.homeTrigger} 
              options={this.homeTeamOptions} 
              icon={null} 
              pointing='top right' 
            />
          </Menu.Item>

        </Menu>
      </div>

    )
  }
};

export default connect()(NavBar);
