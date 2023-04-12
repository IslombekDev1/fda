const initialState = {
  user: null
}
const createReducer = (state = initialState, action) => {
  switch(action.type){
    case "CREATE_USER":
      return {user: action.user}
    default:
      return state  
  }
}

export default createReducer;