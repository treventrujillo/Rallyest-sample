import React, { Component } from 'react';
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
import upload from '../../assets/images/upload.svg';

class FileModal extends Component {

  render() {
    return(
      <Modal
        trigger={
          <div
          style={{
            width: '100%', 
            height: '21vh',
            maxHeight: '180px',
            borderRadius: '5px',
            border: '1px solid #00AADF',
            backgroundColor: '#F6F6F6',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'center',}}>
            <div style={{ display: 'flex', flexDirection: 'column', }}>

              <div style={{ padding: '15px 0px 10px 0px', alignSelf: 'center'}}>
                <Image src={upload}/>
              </div>

              <div style={{ color: '#8f8f8f', fontSize: '180%', fontWeight: '100', padding: '3px 10px 3px 10px', alignSelf: 'center'}}> 
                Upload Files
              </div>

              <div style={{ color: '#8f8f8f', fontSize: '70%', fontWeight: '100', padding: '10px', alignSelf: 'center'}}>
                Drag and Drop files here to upload
              </div>

            </div>
          </div>
        </div>
      }>
        <Modal.Header>Post a File </Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <div>
                <p>File Name<FileUpload /></p>
              </div>
              <div>
                <p>Labels</p><Button>medical - forms</Button><Button>release - forms</Button>
              </div>
              <div style={{ }}>
                <Input transparent placeholder='File Description' />
              </div>
              <div>
                <Button floated='left'>Cancel</Button>
                <Button type='submit' floated='right'>Post</Button>
              </div>
            </Modal.Description>
          </Modal.Content>
      </Modal>
    )
  }
}

export default FileModal;
