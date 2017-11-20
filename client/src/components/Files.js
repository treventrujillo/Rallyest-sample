/*jshint esversion: 6 */
import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux';
import {
    Modal,
    Header,
    Segment,
    Item,
    Grid,
    Image,
    Button,
  } from 'semantic-ui-react';
import FileUpload from './FileUpload';
import upload from '../assets/images/upload.svg';

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
          style={{ display: 'flex', height: '15vh', alignItems: 'center' }}
        >

          <div style={{display:'flex'}}>
            <div style={{ width: '5%', margin: '15px', marginRight: '3vw' }}>
              <div>
                <Item.Image
                  src={require('../assets/images/adobefile.svg')}
                  style={{ width: 'auto', height: '100%' }} />
              </div>
            </div>

            <div style={{display:'flex'}}>
              <Item.Content style={{width:'100%', alignSelf: 'center'}}>
                <Item.Header style={{fontSize:'125%', fontWeight: 'bold', paddingBottom: '1vh'}}>
                  <span>{file.attributes.name}</span>
                </Item.Header>

                <Item.Meta>
                  <span>{file.attributes.uploadDate}</span>
                </Item.Meta>

              </Item.Content>
            </div>
            <div style={{ width: '5%'}}>
              <div>
                <Item.Image
                  src={require('../assets/images/icon-more.svg')}
                  style={{ width: 'auto', height: '100%' }}
                  floated='right' />
              </div>
            </div>
          </div>

        </Item>
      </Segment> 
    );
  }
  

  render() {
    const { files, labels } = this.state;
      return (
      <div style={styles.page_container}>
        <div >
          <div>
            <Grid centered>
              <Grid.Column width={8}>
              
                <div 
                  style={{width: '100%', 
                          backgroundColor: 'white', 
                          height: '25vh', 
                          alignContent: 'center', 
                          justifyContent: 'center', 
                          marginBottom: '4%', 
                          borderRadius: '5px' 
                  }}
                >
                
                  <div style={{ alignContent: 'center', justifyContent: 'center'}}>
                  
                    <div style={{ alignContent: 'center', justifyContent: 'center', padding: '2vh',}}>
                      
                      <Modal 
                        trigger={
                        <div style={{ 
                          width: '100%', 
                          height: '21vh', 
                          borderRadius: '5px', 
                          border: '1px solid #00AADF',
                          backgroundColor: '#F6F6F6',
                          backgroundImage: `url(${upload})`,
                          backgroundRepeat  : 'no-repeat',
                          backgroundPosition: 'center',
                        }}>
                          
                        </div>
                      }>
                      
                      <Modal.Header>Select a Photo</Modal.Header>
                        <Modal.Content image>
                          <Image wrapped size='medium' src='/assets/images/avatar/large/rachel.png' />
                          <Modal.Description>
                            <Header>Default Profile Image</Header>
                            <p>We've found the following gravatar image associated with your e-mail address.</p>
                            <p>Is it okay to use this photo?</p>
                          </Modal.Description>
                        </Modal.Content>
                      </Modal>
                    </div>
                  </div>
                </div>

                <div>
                  {this.listFiles(files)}
                </div>
              
              </Grid.Column>
              <Grid.Column width={8}>
                {this.listLabels(labels)}
              </Grid.Column>
            </Grid>
          </div>
        </div>
      </div>
    );
  } 
}

const styles = {
  page_container: {
    display: 'flex', 
    flexDirection: 'column', 
    alignContent: 'center', 
    justifyContent: 'center',
    padding: '3vh',
  }
}

export default connect()(Files);
