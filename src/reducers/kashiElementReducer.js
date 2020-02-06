const kashiElementReducer = (state = {}, action) => {
  switch(action.type){
    case "LOADING":
      return Object.assign({},state,{status:action.status});
    case "FINISH":
      return Object.assign({},state,{title:action.title,kashi:action.kashi,status:action.status});
    case "FAILED":
      return Object.assign({},state,{title:action.title,kashi:action.kashi,status:action.status});
    default:
      return state;
  }
}

export default kashiElementReducer;
