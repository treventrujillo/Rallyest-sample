import { 
  LOAD_FILES_REQUEST,
  LOAD_FILES_SUCCESS,
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
      return Object.assign({}, state, {
        isFetching: true
      });
    case LOAD_FILES_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        files: action.files,
        lastUpdated: action.receivedAt
      });
    default:
      return state;
  }
}

export default files;