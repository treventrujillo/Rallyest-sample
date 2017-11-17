import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import { handleUpload } from '../actions/files';
import { connect } from 'react-redux';

class FileUpload extends Component {
  state = { fileUploading: false }

  toggleUploading = () => {
    this.setState({ fileUploading: !this.state.fileUploading })
  }
  
  onDrop = (files) => {
    const { dispatch } = this.props;
    this.toggleUploading();
    dispatch(handleUpload(files[0], this.toggleUploading));
  }

  render() {
    return (
      <Dropzone
        accept="image/jpeg, image/png"
        onDrop={this.onDrop}>
      </Dropzone>
    );
  }
}

export default connect()(FileUpload);