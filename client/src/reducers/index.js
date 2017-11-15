import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import authenticated from './authenticated';

const rootReducer = combineReducers({
  user,
  flash,
  authenticated,
});

export default rootReducer;
