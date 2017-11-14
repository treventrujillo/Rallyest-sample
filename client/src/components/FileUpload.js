import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import { handleUpload } from '../actions/files';
import { connect } from 'react-redux';

class FileUpload extends Component {
  //state = { files: [] }
 
handleUploading = (files) => {
    debugger
    var theFile = files[0]

    axios.post('api/upload', theFile)
        .then(res => {
            
        })
}

  render() {
    return (
      <Dropzone
        // accept="image/jpeg, image/png"
        onDrop={this.handleUploading}>
      </Dropzone>
    );
    }
}

// const mapStateToProps = (state) => {
//     return nil;//{ files: state.files };
//   }

export default FileUpload;