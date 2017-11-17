import { setFlash } from './flash';
import axios from 'axios';

export const handleUpload = (file, callback) => {
  debugger
  return(dispatch) => {
    let data = new FormData(file);
    data.append(1, file);
    axios.post('/api/upload', data)
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