import React, { Component } from 'react';
import FileUpload from './FileUpload';
import VisibleToModal from './VisibleToModal';
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

class FileModal extends Component {
  state = { open: false }
  
  toggleOpen = () => {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    return (
      <Modal size='small'
        trigger={
          <div
            style={{
              width: '100%', 
              height: '21vh', 
              borderRadius: '5px', 
              border: '1px solid #00AADF',
              backgroundColor: '#F6F6F6',
              overflow: 'hidden',
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
                  style={{ minHeight: 100, border: 'none' }} />
              </Form>
            </div>
            <Divider />
            <div>
              <p>
                <Icon name='file text outline' />Files<Icon name='smile' />Feeling
                <VisibleToModal />
              </p>
            </div>
            <div>

            </div>
            <Divider />
            <div style={{ padding: '30px' }}>
              <Button onClick={() => this.setState()} floated='left'>Cancel</Button>
              <Button circular type='submit' floated='right'
                style={{ width: '10vw', color: '', backgroundColor: '#00AADF', }}>Post</Button>
            </div>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    )
  }
}
export default FileModal;