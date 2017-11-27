/*jshint esversion: 6 */
import React, { Component } from 'react';
import axios from 'axios'
import { setHeaders } from '../actions/headers';
import { Redirect, Route } from 'react-router';
import { connect } from 'react-redux';
import {
   Header,
   Segment,
   Item,
   Grid,
   Image,
   Button,
   Modal,
   Loader,
   Dimmer,
   Input,
   Form,
   Divider,
   TextArea,
   Icon
  } from 'semantic-ui-react';
import FileUpload from './FileUpload';
import { setFlash } from '../actions/flash';
import LabelForm from './LabelForm';
import upload from '../assets/images/upload.svg';

class Files extends Component {
  state = {
      files: [], 
      labels: [],
      name: '',
      open: false,
    }
    
  // Fetches data from api, parses, and sets state

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
  
  
  // List all files
  
  listFiles = (files) => {
    return files.map( file =>
      <Segment key={file.id}>
        <Item
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

                <Button onClick={ () => this.deleteFile(file.id)}>
                  Delete
                </Button>
                
                {this.editModal(file)}
              
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

  // Delete file
  
  deleteFile = (id) => {
    const { files } = this.state;
    axios.delete(`/api/files/${id}`)
    .then(res => {
      this.props.dispatch(setHeaders(res.headers))
      this.setState({
        files: files.filter( file => file.id !== id )          
      });
    });
  }
  
  // Delete label

  deleteLabel = (id) => {
    const { labels } = this.state;
    const { dispatch } = this.props;
    axios.delete(`/api/labels/${id}`)
      .then(res => {
        dispatch(setFlash('Label deleted', 'green'))
        this.setState({ labels: labels.filter( label => label.id !== id )})
      })
      .catch(res => {
        console.log(res)
        dispatch(setFlash('Label failed to delete', 'red'))
      });
  }
  
  // List all labels
  
  listLabels = (labels) => {
    if (labels) {
      return labels.map( label =>
          <Segment key={label.id} style={{display: 'flex'}}>
            <Item>
              <Item.Content>
                {label.attributes.name}
                <Button onClick={() => this.deleteLabel(label.id)}>
                  Delete Label
                </Button>
              </Item.Content>
            </Item>
          </Segment>
        );
      } else {
        return (
          <Dimmer active>
            <Loader />
          </Dimmer>
        );
      }
    }

  // Add and Remove label relationship with file

  addLabel = (id, label) => {
    const { dispatch } = this.props;
    axios.post('/api/addlabel', { id, label })
      .then(res => {
        console.log(res)
        dispatch(setFlash('Label Added to File', 'green'))
      })
      .catch(res => {
        console.log(res)
        dispatch(setFlash('Label Failed', 'red'))
      });
  }

  removeLabel = (id, label) => {
    const { dispatch } = this.props;
    axios.post('/api/removelabel', { id, label })
      .then(res => {
        console.log(res)
        dispatch(setFlash('Label Removed', 'green'))
      })
      .catch(res => {
        console.log(res)
        dispatch(setFlash('Label Not Removed', 'red'))
      });
  }


  // Edit file post modal
  
  editModal = (file) => (
    <Modal trigger={<Button>Show Modal</Button>}>
      <Modal.Content>
        <Modal.Header>Edit Post</Modal.Header>
          <Header>All Tags</Header>
          {this.state.labels.map(label =>
            <Segment key={label.id} style={{ display: 'flex' }}>
              <Item>
                <Item.Content>
                  {label.attributes.name}
                  <Button onClick={() => this.addLabel(file.id, label)}>
                    Add Label
                  </Button>
                  <Button onClick={() => this.removeLabel(file.id, label)}>
                    Remove Label
                  </Button>
                </Item.Content>
              </Item>
            </Segment>
          )}
        </Modal.Content>
    </Modal>
  );


  render() {
    const { files, labels } = this.state;
      return (
      <div style={styles.page_container}>
        <div >
          <div>
            <Grid centered>
              <Grid.Column width={8}>
              
                <div 
                  style={{
                    width: '100%', 
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
                      
                      <Modal size='small'
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
                      
                       <Modal.Header>Post a File </Modal.Header>
                        <Modal.Content>
                          <Modal.Description>
                            <div>
                              <p>File Name<FileUpload /></p>
                            </div>
                            <Divider />
                            <div>
                              <p>Labels</p>
                              <Button>medical - forms</Button>
                              <Button>release - forms</Button>
                            </div>
                            <Divider />
                            <div>
                              <Form>
                                 <TextArea autoHeight placeholder='File Description' 
                                  style={{ minHeight: 100, border: 'none' }}/>
                              </Form>
                            </div>
                            <Divider />
                            <div>
                              <p><Icon name='file text outline' />Files</p>
                              <p><Icon name='smile' />Feeling</p>
                            </div>
                            <div>
                              <p floated='right'>Visible to 4 team members</p>
                            </div>
                            <Divider />
                            <div style={{ padding: '30px' }}>
                              <Button circular floated='left' 
                               style={{ width: '10vw', color: '', backgroundColor: '#00AADF', }}>Cancel</Button>
                              <Button circular type='submit' floated='right' 
                               style={{ width: '10vw', color: '', backgroundColor: '#00AADF', }}>Post</Button>
                            </div>
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
                <LabelForm />
        
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
