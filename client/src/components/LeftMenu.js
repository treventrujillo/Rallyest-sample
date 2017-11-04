import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import ReactFontFace from 'react-font-face'
import ChunkFiveEx from '../assets/Fonts/chunkfive ex.ttf'

class LeftMenu extends Component {
  state = { activeItem: 'Rallyest' }
// Handles the menu animationthat changes the selected item
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
  render() {
    const { activeItem } = this.state

    return (
      <div >
        <div style={styles.menu}>
          <Menu pointing secondary vertical>           
            <Menu.Item  onClick={this.handleItemClick}>
              <Link to={'/'} style={styles.rally} as='h1'>Rally</Link><Link to={'/'} style={styles.est} as='h1'>est</Link>
            </Menu.Item>

            <Menu.Item name='Files' active={activeItem === 'Files'} onClick={this.handleItemClick}>
              <Link to={'/Files'} style={{color: '#e1e6e7'}}>Files</Link>
            </Menu.Item>

            <Menu.Item name='Photos' active={activeItem === 'Photos'} onClick={this.handleItemClick}>
              <Link to={'/Photos'} style={{color: '#e1e6e7'}}>Photos</Link>
            </Menu.Item>

            <Menu.Item name='Letters' active={activeItem === 'Letters'} onClick={this.handleItemClick}>
              <Link to={'/Letters'} style={{color: '#e1e6e7'}}>Letters</Link>
            </Menu.Item>

            <Menu.Item name='Goals' active={activeItem === 'Goals'} onClick={this.handleItemClick}>
              <Link to={'/Goals'} style={{color: '#e1e6e7'}}>Goals</Link>
            </Menu.Item>
           
            <Menu.Item name='Courses' active={activeItem === 'Courses'} onClick={this.handleItemClick}>
              <Link to={'/Courses'} style={{color: '#e1e6e7'}}>Courses</Link>
            </Menu.Item>
            
            <Menu.Item name='Announcements' active={activeItem === 'Announcements'} onClick={this.handleItemClick}>
              <Link to={'/Announcements'} style={{color: '#e1e6e7'}}>Announcements</Link>
            </Menu.Item>
           
            <Menu.Item name='Updates' active={activeItem === 'Updates'} onClick={this.handleItemClick}>
              <Link to={'/Updates'} style={{color: '#e1e6e7'}}>Updates</Link>
            </Menu.Item>
            
            <Menu.Item name='Assignments' active={activeItem === 'Assignments'} onClick={this.handleItemClick}>
              <Link to={'/Assignments'} style={{color: '#e1e6e7'}}>Assignements</Link>
            </Menu.Item>
           
            <Menu.Item name='Community' active={activeItem === 'Community'} onClick={this.handleItemClick}>
              <Link to={'/Community'} style={{color: '#e1e6e7'}}>Community</Link>
            </Menu.Item>
           
            <Menu.Item name='Settings' active={activeItem === 'Settings'} onClick={this.handleItemClick}>
              <Link to={'/Settings'} style={{color: '#e1e6e7'}}>Settings</Link>
            </Menu.Item>
          </Menu>
        </div>
      </div>
    )
  }
}

const styles = {
  menu: {
    backgroundColor: '#005687',
    height: '100%',
    left: 0,
    top: 0,
    overflowY: 'hidden',
    position: 'fixed',
  },
  rally: {
    fontFamily: 'chunkfive Ex',
    color: '#e1e6e7',
    fontSize: '4vh',
    flex: 1,
  },
  est: {
    fontFamily: 'chunkfive Ex',
    color: '#ffc713',
    fontSize: '4vh',
    flex: 1,
  },
}

export default LeftMenu;
