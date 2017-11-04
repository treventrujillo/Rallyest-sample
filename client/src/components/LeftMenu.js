import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import {Link} from 'react-router-dom';

class LeftMenu extends Component {
  render() {
    return (
      <Header as='h1' textAlign='center'>LeftMenu Component</Header>
      <Link to='/'>Home</Link>
    );
  }
}

export default LeftMenu;