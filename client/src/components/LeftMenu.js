/*jshint esversion: 6 */
import React, { Component } from 'react';
import { Menu, Image, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { handleLogout } from '../actions/auth';
import '../assets/Fonts/chunkfive ex.ttf';

class LeftMenu extends Component {
  state = { activeItem: 'Rallyest' }
// Handles the menu animationthat changes the selected item
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  handleClick = () => {
    const { dispatch } = this.props;
    dispatch(handleLogout())
  }
  render() {
    const { activeItem } = this.state;

    return (
      <div style={{ backgroundColor: '#0d6192', minHeight: '100vh'}}>
        <div>

          <div style={{ height: '93vh', overflow: 'hidden'}}>
            <Menu secondary vertical>
             <Menu.Item>
                <Link to={'/Feed'}>
                  <Image src={require('../assets/images/Logo_White.png')}/>
                </Link>
              </Menu.Item>

              <Menu.Item 
                name='Files' 
                active={activeItem === 'Files'} 
                onClick={this.handleItemClick}
                >
                <Image 
                  style={styles.icoimage} 
                  src={require('../assets/images/ICON_Files.png')}
                  />
                <Link to={'/Files'} style={{color: '#e1e6e7'}}> Files</Link>
              </Menu.Item>

              <Menu.Item 
                name='Photos' 
                active={activeItem === 'Photos'} 
                onClick={this.handleItemClick}
                >
                <Image 
                  style={styles.icoimage} 
                  src={require('../assets/images/ICON_Photos.png')}
                  />
                <Link to={'/Photos'} style={{color: '#e1e6e7'}}> Photos</Link>
              </Menu.Item>

              <Menu.Item 
                name='Letters' 
                active={activeItem === 'Letters'} 
                onClick={this.handleItemClick}
                >
                <Image 
                  style={styles.icoimage} 
                  src={require('../assets/images/ICON_Letters.png')}
                  />
                <Link to={'/Letters'} style={{color: '#e1e6e7'}}> Letters</Link>
              </Menu.Item>

              <Menu.Item 
                name='Goals' 
                active={activeItem === 'Goals'} 
                onClick={this.handleItemClick}
                >
                <Image 
                  style={styles.icoimage} 
                  src={require('../assets/images/ICON_Goals.png')}
                  />
                <Link to={'/Goals'} style={{color: '#e1e6e7'}}> Goals</Link>
              </Menu.Item>

              <Menu.Item 
                name='Courses' 
                active={activeItem === 'Courses'} 
                onClick={this.handleItemClick}
                >
                <Image 
                  style={styles.icoimage} 
                  src={require('../assets/images/ICON_Library.png')}
                  /> 
                <Link to={'/Courses'} style={{color: '#e1e6e7'}}> Courses</Link>
              </Menu.Item>

              <Menu.Item 
                name='Announcements' 
                active={activeItem === 'Announcements'} 
                onClick={this.handleItemClick}
                >
                <Image 
                  style={styles.icoimage} 
                  src={require('../assets/images/ICON_Announcements.png')}
                  /> 
                <Link to={'/Announcements'} style={{color: '#e1e6e7'}}> Announcements</Link>
              </Menu.Item>

              <Menu.Item 
                name='Updates' 
                active={activeItem === 'Updates'} 
                onClick={this.handleItemClick}
                >
                <Image 
                  style={styles.icoimage} 
                  src={require('../assets/images/ICON_Updates.png')}
                  />
                <Link to={'/Updates'} style={{color: '#e1e6e7'}}> Updates</Link>
              </Menu.Item>

              <Menu.Item 
                name='Assignments' 
                active={activeItem === 'Assignments'} 
                onClick={this.handleItemClick}
                >
                <Image 
                  style={styles.icoimage} 
                  src={require('../assets/images/ICON_Assignments.png')}
                  />
                <Link to={'/Assignments'} style={{color: '#e1e6e7'}}> Assignments</Link>
              </Menu.Item>

              <Menu.Item 
                name='Community' 
                active={activeItem === 'Community'} 
                onClick={this.handleItemClick}
                >
                <Image 
                  style={styles.icoimage} 
                  src={require('../assets/images/ICON_Community.png')}
                  />
                <Link to={'/Community'} style={{color: '#e1e6e7'}}> Community</Link>
              </Menu.Item>

              <Menu.Item 
                name='Settings' 
                active={activeItem === 'Settings'} 
                onClick={this.handleItemClick}
                >
                <Image 
                  style={styles.icoimage} 
                  src={require('../assets/images/ICON_Settings.png')}
                  />
                <Link to={'/Settings'} style={{color: '#e1e6e7'}}> Settings</Link>
              </Menu.Item>
            </Menu>
          </div>
          
          <div style={{  overflow: 'hidden', display: 'flex', justifyContent: 'center'}}>
            <Button onClick={this.handleClick} 
              style={{
                backgroundColor: '#0d6192', 
                color: '#E1E6E7',
                display: 'inline-flex'
              }}>
              <i class="arrow left icon"></i>
              <p style={{fontFamily: 'helvetica neue, helvetica, arial, sansSerif', 
                fontWeight: '100', 
                fontSize: '17px', 
                lineHeight: '17px',
              }}>
                Logout
              </p>
            </Button>
          </div>

        </div>
      </div>
    )
  }
}

const styles = {
  menu: {
    backgroundColor: '#0d6192',
    minHeight: '100vh',
  }, 
  icoimage: {
    display: 'inline-flex',
    margin: '0px 10px 0px 15px',
  },
}

export default connect()(LeftMenu);
