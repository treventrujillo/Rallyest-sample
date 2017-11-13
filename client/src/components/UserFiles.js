import React, { Component } from 'react';
import { verifyToken } from '../actions/auth';
import { connect } from 'react-redux'
import axios from 'axios';
import {
   Header, 
   Button,
   Feed,
   Image,
   Segment,
   Dimmer,
   Loader,
   Card,
  } from 'semantic-ui-react';

class UserFiles extends Component {
  state = { files: [] }

  componentDidMount() {
    this.getFiles();
  }

  getFiles = () => {
    axios.get('/api/files')
      .then(res => {
          debugger
        const { data } = res;
        const files = JSON.parse(res.data.res)
        this.setState({ files:url }
      )}
    )
  }


  // Post List values:
  // file id = file.id
  // file content = file.attributes.text

  listPosts = (files) => {
    return files.map( file => 
      <Segment>
        <Feed.Event key={file.id}>
          <Feed.Label>
            <Image src={require('../assets/images/teamimg1.png')} />
          </Feed.Label>
          <Feed.Content>
            <p>{file.attributes.text}</p>
          </Feed.Content>
        </Feed.Event>
      </Segment>
    );
  }

  render() {
    const { files } = this.state;
    if (files) {
      return (
        <div style={{display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center'}}>

          <div style={{display: 'flex', alignContent: 'center', justifyContent: 'center'}}>
            <Header as='h1' style={{paddingTop: '15px'}}>Whats New?</Header>
          </div>

          <div style={{padding: '30px'}}>
            <Feed>
              {this.listPosts(files)}
            </Feed>
          </div>
        </div>
      );
    } else {
      return (
        <Segment basic>
          <Dimmer active>
            <Loader />
          </Dimmer>
        </Segment>
      );
    }
  }
}

export default connect()(UserFiles);