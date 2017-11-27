/*jshint esversion: 6 */
import React, { Component } from 'react';
import axios from 'axios'
import { setHeaders } from '../../actions/headers';
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
   Icon,
   Dropdown,
  } from 'semantic-ui-react';
import FileUpload from './FileUpload';
import FileAccordion from './FileAccordion';
import { setFlash } from '../../actions/flash';
import LabelForm from './LabelForm';
import upload from '../../assets/images/upload.svg';

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

  homeTeamOptions = [
    { key: 1, text: 'Edit File Tags', value: 1 },
    { key: 2, text: 'Delete File', value: 2 },
  ]

  homeTrigger = (
    <span>
      <Image src={require('../../assets/images/icon-more.svg')} />
    </span>
  )

  // List all files

  listFiles = (files) => {
    return files.map( file =>
      <Segment key={file.id}>
        <div style={{display: 'flex',}}>

          <div style={{ display: 'flex', width: '10%', justifyContent: 'center'}}>
            <div style={{ alignSelf: 'center', justifyContent: 'center', paddingRight: '10px'}}>
              <Image src={require('../../assets/images/adobefile.svg')}/>
            </div>
          </div>

          <div style={{display: 'flex', flexDirection: 'column', minWidth:'80%'}}>

            <div style={{flex: 1, fontWeight: 'bold', fontSize: '110%'}}>
              <span>{file.attributes.name}</span>
            </div>
          
            <div style={{fontStyle: 'italic', fontSize: '90%', }}>
              <span style={{color: '#8f8f8f'}}>{file.attributes.uploadDate}</span>
            </div>
          
            <div>
              <Button onClick={ () => this.deleteFile(file.id)}>
                Delete
              </Button>
              {this.editModal(file)}
            </div>
          
          </div>

          <div style={{ display: 'flex',  width: '10%', justifyContent: 'flex-end' }}>
            <div style={{padding: '5px',}}>
            
            <Dropdown 
              trigger={this.homeTrigger} 
              options={this.homeTeamOptions} 
              icon={null} 
              pointing='top right' 
            />

            </div>
          </div>
        </div>
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
                <FileAccordion />
                  
                  <div style={{ alignContent: 'center', justifyContent: 'center', padding: '1vh',}}>
                      
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