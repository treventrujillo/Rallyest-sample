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
    this.toggleUploading();
    this.props.dispatch(handleUpload(files[0], this.toggleUploading));
  }

  
  //state = { files: [] }
 
// handleUploading = (files) => {
//     axios.post('api/upload', {files})
//         .then(res => {
//           const { data: files } = res;
//           debugger
//         })
// }

  render() {
    return (
      <Dropzone
        // accept="image/jpeg, image/png"
        onDrop={this.onDrop}>
      </Dropzone>
    );
    }
}

const mapStateToProps = (state) => {
    return { files: state.files };
  }

export default connect(mapStateToProps)(FileUpload);