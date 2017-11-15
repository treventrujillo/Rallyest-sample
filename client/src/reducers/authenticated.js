const authenticated = (state = {}, action) => {
  switch(action.type) {
    case 'AUTHENTICATED':
      return action.authenticated;
    default:
      return state;
  }
}

export default authenticated;