import { 
  LOAD_FILES_REQUEST,
  LOAD_FILES_SUCCESS,
  DELETE_FILE_SUCCESS,
} from '../actions/files';

const files = (
  state = {
    isFetching: false,
    files: [],
    open: false, 
    fileId: '',
    active: null,
  }, 
  action,
) => {
  switch(action.type) {
    case LOAD_FILES_REQUEST:
      return { ...state, isFetching: true }
    case LOAD_FILES_SUCCESS:
      return {
         ...state, 
         files: action.files, 
         isFetching: false, 
         lastUpdated: action.receivedAt 
        }
    case DELETE_FILE_SUCCESS:
      return { ...state, files: state.files.filter(file => file.id !== action.id )}
    default:
      return state;
  }
}

export default files;