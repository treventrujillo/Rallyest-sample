import { setFlash } from './flash';
import axios from 'axios';

export const LOAD_FILES_REQUEST = 'LOAD_FILES_REQUEST'
const requestFiles = () => {
  return {
    type: LOAD_FILES_REQUEST
  }
}

export const LOAD_FILES_SUCCESS = 'LOAD_FILES_SUCCESS'
const receiveFiles = (json) => {
  return {
    type: LOAD_FILES_SUCCESS,
    files: json.data,
    receivedAt: Date.now()
  }
}

export const getFiles = () => {
  return (dispatch) => {
    dispatch(requestFiles())
    return axios.get('/api/files')
      .then(res => JSON.parse(res.data.res), error => console.log(error))
      .then(json => dispatch(receiveFiles(json)))
  }
}

export const DELETE_FILE_SUCCESS = 'DELETE_FILE_SUCCESS'
const deleteFileSuccess = (id) => {
  return {
    type: DELETE_FILE_SUCCESS,
    id: id
  }
}

export const deleteFile = (id) => {
  return (dispatch) => {
    return axios.delete(`/api/files/${id}`)
      .then(res => dispatch(deleteFileSuccess(id)), error => console.log(error))
  }
}

export const handleUpload = (file, metadata, callback) => {
  return(dispatch) => {
    let data = new FormData();
    data.append(1, file);
    data.append('description', metadata.description);
    // data.append('metadata', metadata)
    axios.post('/api/upload', data, metadata)
      .then( res => {
        dispatch(setFlash('File Uploaded Successfully!', 'success'));
      })
      .then( () => {
        callback()
      })
      .catch( res => {
        dispatch(setFlash('Error uploading files', 'error'))
    });
  }
}