import React, { Component } from 'react';
import { verifyToken } from '../actions/auth';
import { connect } from 'react-redux'
import axios from 'axios';
import {
   Header, 
   Button,
  } from 'semantic-ui-react';

class Feed extends Component {

  handleClick = (e) => {
    const { dispatch, history } = this.props;
    dispatch(verifyToken(history))
  }

  render() {
    return (
      <div>
        <Header as='h1' textAlign='center'>Feed Component</Header>
        <Button
          onClick={this.handleClick}
          > Submit
          </Button>
      </div>
    );
  }
}

export default connect()(Feed);