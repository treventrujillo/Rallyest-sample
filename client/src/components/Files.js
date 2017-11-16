/*jshint esversion: 6 */
import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux';
import {
   Header,
   Segment,
   Item,
   Grid,
   Image,
  } from 'semantic-ui-react';
import FileUpload from './FileUpload';

class Files extends Component {
  state = { files: [], labels: [] }

  async componentDidMount() {
    const getFiles = await axios.get('/api/files')
    const getLabels = await axios.get('/api/labels')
    const parsed_files = JSON.parse(getFiles.data.res)
    const parsed_labels = JSON.parse(getLabels.data.res)

    this.setState({
      files: parsed_files.data,
      labels: parsed_labels.data,
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

      <Segment>
        <Item
          key={file.id}
          style={{ display: 'flex', height: '15vh' }}
        >

          <div style={{ width: '5%', margin: '10px' }}>
            <div>
              <Image
                src={require('../assets/images/teamimg1.png')}
                style={{ width: 'auto', height: '100%' }} />
            </div>
          </div>

          <div style={{display:'flex'}}>
            <Item.Header style={{fontSize:'125%', fontWeight: 'bold', paddingBottom: '1vh'}}>
              <span>{file.attributes.name}</span>
            </Item.Header>

            <Item.Meta>
              <span>{file.attributes.uploadDate}</span>
            </Item.Meta>
          </div>

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