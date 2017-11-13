/*jshint esversion: 6 */
import React, { Component } from 'react';
import { Menu, Image, Segment, Icon } from 'semantic-ui-react';
import {Link} from 'react-router-dom';

class TourBox extends Component {
  state = { activeItem: 'closest' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return(
      <div style={styles.boxContainer}>
        <div style={styles.blueBox}>
          stuff goes here
        </div>
        <div>
          {/* TODO: links added */}
          <Menu 
            borderless 
            style={{borderRadius: '0px 0px 10px 10px', width: '600px', }}  
            widths={5}
          >
            <Menu.Item borderless >
              <div>
                Skip
              </div>
            </Menu.Item>
            <Menu.Item>

            </Menu.Item>
            <Menu.Item borderless>
              <div>
                <Link to={'/Tour_1'}>
                  <Icon 
                    name='circle' 
                    size='tiny' 
                    style={{ paddingLeft:'15px', paddingRight:'15px' }}
                  />
                </Link>
                <Link to={'/Tour_2'}>
                  <Icon 
                    name='circle' 
                    size='tiny' 
                    style={{paddingLeft: '15px', paddingRight: '15px'}}
                  />
                </Link>
                <Link to={'/Tour_3'}>
                  <Icon 
                    name='circle' 
                    size='tiny' 
                    style={{paddingLeft: '15px', paddingRight: '15px'}}
                  />
                </Link>
              </div>
            </Menu.Item>
            <Menu.Item>
              
            </Menu.Item>
            <Menu.Item borderless>
              Next
            </Menu.Item>
          </Menu>
        </div>
      </div>
    )
  }
}

const styles = {
  boxContainer:{
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    paddingTop: '12vh',
    paddingBottom: '12vh', 
    position: 'relative',

  },
  blueBox:{
    backgroundColor: '#0d6192',
    minHeight: '450px',
    borderRadius: '10px 10px 0px 0px',
    borderLeft: '', 
    borderBottom: '',
    top: 0,
    left: 0,
  },
  buttonBar:{
    top: 0,
    left: 0,
    padding:0,
    margin:0,
    borderRadius: '0px 0px 10px 10px',

  },
}


export default TourBox;
