import React, { Component } from 'react'
import { Header, Accordion, Icon } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

class Settings extends Component {
  state = { activeIndex: '' }
  
  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index
    
    this.setState({ activeIndex: newIndex })
  }
  
  render() {
    const { activeIndex } = this.state
    
    return (
      <div >

      <Header as='h1' textAlign='center' style={{color: '#00aadf',paddingTop: '2vh', }}>
      <Icon name= 'settings'/>
      Settings
      
      </Header>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'}}>
      <Accordion fluid styled style={{ width: '70%' }}>
        <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
          <Icon name='user' />
            Account Settings
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          My Rallyest Account
          <p>
            <ul>
              <li>username</li>
              <li>password</li>
              <li>Full Name</li>
              <li>Birth Date</li>
              <li>Etc...</li>
            </ul>
          </p>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
          <Icon name='child' />
          HomeTeam Settings
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
        HomeTeam Settings 
        <p>
          <ul>
            <li>Not yet defined</li>
          </ul>
        </p>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
          <Icon name='mail outline' />
          Notifications
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          Mobile Notifications
          <p>
            <ul>
              <li>subscribe/unsubscribe</li>
              <li>etc.</li>
            </ul>
          </p>
          Email Notifications
          <p>
            <ul>
              <li>subscribe/unsubscribe</li>
              <li>etc.</li>
            </ul>
          </p>
        </Accordion.Content>
        <Accordion.Title active={activeIndex === 3} index={3} onClick={this.handleClick}>
          <Icon name='dropdown' />
          Tour - Test Screens
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 3}>
          <Link to={'/Tour_1'}>Tour</Link>
        </Accordion.Content>
      </Accordion>
      </div>
      </div>
    )
  }
}

export default Settings;