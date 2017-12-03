import React, { Component } from 'react';
import VisibleToModal from './VisibleToModal';
import upload from '../../assets/images/upload.svg';
import { handleUpload } from '../../actions/files';
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
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';


class FileModal extends Component {
  state = { 
    modalVisible: false,
    files: [],
    fileUploading: false,
    description: ''
   }
  
  toggleModal = () => {
    this.setState({
      modalVisible: !this.state.modalVisible
    });
  }

  toggleUploading = () => {
    this.setState({ fileUploading: !this.state.fileUploading })
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  onDrop = (files) => {
    this.setState({ files: files })
  }

  handleSubmit = () => {
    const { dispatch } = this.props;
    const { files, description } = this.state
    const metadata = {
      description
    }
    dispatch(handleUpload(files[0], metadata, this.toggleUploading));
    this.toggleUploading();
  }

  renderUploadBox() {
    if (this.state.files.length > 0) {
      return (
        <div style={{ alignContent: 'center', justifyContent: 'center', padding: '2vh', }}>
          <Image src={this.state.files[0].preview} size='small' />
        </div>
      )
    }
    return (
      <div style={{ alignContent: 'center', justifyContent: 'center', padding: '2vh', }}>
        <Dropzone
          className="dropzone"
          accept="image/jpeg, image/png"
          onDrop={this.onDrop}
        >
        </Dropzone>
      </div>
    );
  }

  render() {
    return (
      <Modal 
        size='small'
        open={this.state.modalVisible}
        trigger={
          <Button
            onClick={this.toggleModal}
          >
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

          </Button>
        }>
        <Modal.Header>Post a File </Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <div>
              <p>File Name</p>
                {this.renderUploadBox()}
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
                <TextArea 
                  autoHeight 
                  placeholder='File Description'
                  name='description'
                  style={{ minHeight: 100, border: 'none' }} 
                  value={this.state.description}
                  onChange={this.handleChange}
                />
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
              <Button onClick={() => this.setState({modalVisible: false})} floated='left'>Cancel</Button>
              <Button 
              circular 
              type='submit' 
              floated='right'
              onClick={this.handleSubmit}
              style={{ width: '10vw', color: '', backgroundColor: '#00AADF', }}>Post</Button>
            </div>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    )
  }
}
export default connect()(FileModal);