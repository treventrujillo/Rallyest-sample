import React, { Component } from 'react'
import { Header } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

class Settings extends Component {
  render() {
    return (
      <div>
        <Header as='h1' textAlign='center'>Settings Component</Header>
        <Link to={'/Tour'}>Tour</Link>
      </div>
    );
  }
}

export default Settings;