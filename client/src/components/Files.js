/*jshint esversion: 6 */
import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux';

import {
   Header,
   Segment, 
   Item,
   Grid,
   Dimmer,
   Loader,
  } from 'semantic-ui-react';

class Files extends Component {
  state = { files: [], labels: [] }

  async componentDidMount() {
    const getFiles = await axios.get('/api/files')
    const getLabels = await axios.get('/api/labels')
    
    const parsed_files = JSON.parse(getFiles.data.res)
    const parsed_labels = JSON.parse(getLabels.data.res)

    this.setState({
      files: parsed_files.data,
      labels: parsed_labels.data 
    });
  }

  listLabels = (labels) => {
    return labels.map( label => 
      <Segment key={label.id} style={{display: 'flex'}}>
        <Item>
          <Item.Content>
            {label.attributes.name}
          </Item.Content>
        </Item>
      </Segment>
    )
  }

  listFiles = (files) => {

    return files.map( file =>

      <Segment 
        key={ file.id} 
        style={{ display: 'flex'}}
      >
        <Item>

          <Item.Header>
            <span>{file.attributes.name}</span>
          </Item.Header>

          <Item.Description>
            <span>{file.attributes.uri}</span>
          </Item.Description>

          <Item.Meta>
            <span>{file.attributes.uploadDate}</span>
          </Item.Meta>

        </Item>
      </Segment> 
    );
  }
  

  render() {
    const { files, labels } = this.state;
      return (
        <div style={{display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center'}}>
          
        <div style={{display: 'flex', alignContent: 'center', justifyContent: 'center'}}>
          <Header as='h1' textAlign='center' style={{padding: '10px'}}>
            Files Component
          </Header>
        </div>
          
        <div style={{padding: '30px', alignContent: 'center'}}>
          <Grid centered>

            <Grid.Column width={8}>
              {this.listFiles(files)}
            </Grid.Column>

            <Grid.Column width={8}>
              {this.listLabels(labels)}
            </Grid.Column>

          </Grid>
        </div>

      </div>
    );
  } 
}

export default connect()(Files); 