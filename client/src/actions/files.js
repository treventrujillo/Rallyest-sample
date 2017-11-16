import { setFlash } from './flash';
import axios from 'axios';

// const addFile = (file) => {
//     return { type: 'ADD_FILE', file }
//   }

// export const handleUpload = (file, callback) => {
//     // where our axios post request to create a new file
//     // dispatch addFile action
//     return(dispatch) => {
//       let data = new FormData();
//       data.append(file.name, file);
//       axios.post('https://rallyfy.com/api/file', data)
//         .then( res => {
//           dispatch(addFile(res.data));
//           callback();
//         })
//         .catch( res => {
//           dispatch(setFlash('Error uploading file. Please try again!', 'error'));
//       });
//     }
//   }

export const handleUpload = (file, callback) => {
  return(dispatch) => {
    let data = new FormData(file);
    data.append(file.name, file);
    axios.post('/api/upload', data)
      .then( res => {
        dispatch(setFlash('File Uploaded Successfully!', 'success'));
        dispatch({ type: 'ADD_FILE', file: res.data });
      })
      .catch( res => {
        dispatch(setFlash('Error uploading files', 'error'))
      })
      .then( () => {
        callback();
    });
  }
}