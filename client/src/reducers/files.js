import { 
  LOAD_FILES_REQUEST,
  LOAD_FILES_SUCCESS,
  DELETE_FILE_REQUEST,
  DELETE_FILE_SUCCESS,
} from '../actions/files';

const files = (
  state = {
    isFetching: false,
    files: [],
  }, 
  action,
) => {
  switch(action.type) {
    case LOAD_FILES_REQUEST:
      return { ...state, isFetching: true }
    case LOAD_FILES_SUCCESS:
      return {
         ...state, 
         isFetching: false, 
         files: action.files, 
         lastUpdated: action.receivedAt 
        }
    case DELETE_FILE_SUCCESS:
      return { ...state, files: files.filter(file => file.id !== action.id )}
    default:
      return state;
  }
}

export default files;