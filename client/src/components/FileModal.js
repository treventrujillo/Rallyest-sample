import React, { Component } from 'react';
import { Accordion, Form, Modal, Button, Input } from 'semantic-ui-react';
import FileUpload from './FileUpload';
import upload from '../assets/images/upload.svg';

class FileModal extends Component {
  
  render() {
    return(
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