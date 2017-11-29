/*jshint esversion: 6 */
import React, { Component } from 'react';

import axios from 'axios'
import { Redirect, Route } from 'react-router';
import { connect } from 'react-redux';

import FileUpload from './FileUpload';
import FileAccordion from './FileAccordion';
import LabelList from './LabelList';
import LabelForm from './LabelForm';
import FileList from './FileList';

import { setHeaders } from '../../actions/headers';
import { setFlash } from '../../actions/flash';
import upload from '../../assets/images/upload.svg';

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

class Files extends Component {
  state = {
      name: '',
      open: false,
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
                    <FileList />
                  </div>
              
              </Grid.Column>
              <Grid.Column width={8}>
                <LabelForm />
                <LabelList />
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