import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import authenticated from './authenticated';
import files from './files';
import labels from './labels';
import posts from './posts';

const rootReducer = combineReducers({
  user,
  flash,
  authenticated,
  files,
  labels,
  posts,
});

export default rootReducer;
