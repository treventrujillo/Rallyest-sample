import { setFlash } from './flash';
import axios from 'axios';

const addFile = (file) => {
    return { type: 'ADD_PHOTO', file }
  }

export const handleUpload = (file, callback) => {
    // where our axios post request to create a new file
    // dispatch addFile action
    return(dispatch) => {
      let data = new FormData();
      data.append(file.name, file);
      axios.post('/api/files', data)
        .then( res => {
          dispatch(addFile(res.data));
          callback();
        })
        .catch( res => {
          dispatch(setFlash('Error uploading file. Please try again!', 'error'));
      });
    }
  }