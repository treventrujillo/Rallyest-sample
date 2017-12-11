import { RECEIVE_LOGIN, RECEIVE_LOGOUT, RECEIVE_SESSION_ID } from '../actions/auth'

const user = (state = {
  data: '',
  isAuthenticated: false,
  id: ''
}, action) => {
  switch (action.type) {
    case RECEIVE_LOGIN:
      return {
        ...state,
        data: action.user,
        isAuthenticated: true
      }
    case RECEIVE_LOGOUT:
      return {
        data: '',
        isAuthenticated: false,
        id: ''
      }
    case RECEIVE_SESSION_ID:
      return {
        ...state,
        id: action.id
      }
    case 'persist/REHYDRATE':
    debugger
      return {
        data: action.payload.user.data,
        id: action.payload.user.id
      }
    default:
      return state
  }
}

export default user
