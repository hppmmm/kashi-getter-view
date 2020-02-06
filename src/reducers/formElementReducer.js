const formElementReducer = (state = {}, action) => {
  switch(action.type){
    case "TEXT_CHANGE":
      return Object.assign({}, state, {text:action.text});
    default:
      return state;
  }
}

export default formElementReducer;
