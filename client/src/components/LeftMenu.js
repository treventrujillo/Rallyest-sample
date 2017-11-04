import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

class LeftMenu extends Component {
  state = { activeItem: 'Rallyest' }
// Handles the menu animationthat changes the selected item
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
  render() {
    const { activeItem } = this.state

    return (
      <div >
        <div style={styles.menu}>
          <Menu pointing secondary vertical >           
            <Menu.Item active={activeItem === 'Rallyest'} onClick={this.handleItemClick}>
              RALLYEST
            </Menu.Item>

            <Menu.Item name='Messages' active={activeItem === 'Messages'} onClick={this.handleItemClick}>

            </Menu.Item>

            <Menu.Item name='Photos' active={activeItem === 'Photos'} onClick={this.handleItemClick}>

            </Menu.Item>

            <Menu.Item name='Letters' active={activeItem === 'Letters'} onClick={this.handleItemClick}>

            </Menu.Item>

            <Menu.Item name='Goals' active={activeItem === 'Goals'} onClick={this.handleItemClick}>

            </Menu.Item>
           
            <Menu.Item name='Courses' active={activeItem === 'Courses'} onClick={this.handleItemClick}>

            </Menu.Item>
            
            <Menu.Item name='Announcements' active={activeItem === 'Announcements'} onClick={this.handleItemClick}>

            </Menu.Item>
           
            <Menu.Item name='Updates' active={activeItem === 'Updates'} onClick={this.handleItemClick}>

            </Menu.Item>
            
            <Menu.Item name='Assignments' active={activeItem === 'Assignments'} onClick={this.handleItemClick}>

            </Menu.Item>
           
            <Menu.Item name='Community' active={activeItem === 'Community'} onClick={this.handleItemClick}>

            </Menu.Item>
           
            <Menu.Item name='Settings' active={activeItem === 'Settings'} onClick={this.handleItemClick}>

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
  }
}


export default LeftMenu;
