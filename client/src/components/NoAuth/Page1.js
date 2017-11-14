/*jshint esversion: 6 */
import React from 'react';
import { Menu, Image, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Page1 extends React.Component {
  state = { activeItem: 'closest' }
  handleItemClick = (e, { name }) => 
    this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return(
      <div style={styles.tourFlexContainer}>
        <div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <div style={styles.tourBox}>
              <div style={styles.boxContainer}>

                <div style={styles.blueBox}>
                  Page 1 stuff goes here
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
                     {/* Blank Menu Item for Spacing */}
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
                      {/* Blank Menu Item for Spacing */}
                    </Menu.Item>

                    <Menu.Item borderless>
                      Next
                    </Menu.Item>

                  </Menu>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   )
  }
}
const styles={
  tourFlexContainer:{
    display: 'flex',
    flexDirection: 'column',
  },
  header:{
    height: '10vh',
  },
  footerContainer:{
    paddingBottom: '20px',
    paddingLeft: '20px',
    paddingRight: '20px',
    backgroundColor: 'white',
  },
  tourBox:{
    minHeight: '600px',
    minWidth: '600px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: '20px',
    borderTopRightRadius: '20px',
  },
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

export default Page1;
