import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import { handleUpload } from '../actions/files';
import { connect } from 'react-redux';

class FileUpload extends Component {
  //state = { files: [] }
 
handleUploading = (files) => {

    axios.post('api/upload', {files})
        .then(res => {
            debugger
        })
}

  render() {
    return (
      <Dropzone
        accept="image/jpeg,image/jpg,image/tiff,image/gif"
        onDrop={this.handleUploading}>
      </Dropzone>
    );
    }
}

// const mapStateToProps = (state) => {
//     return nil;//{ files: state.files };
//   }

export default FileUpload;