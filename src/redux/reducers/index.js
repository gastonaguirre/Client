const initialState = {
    Users: [],
    Posts: [],
    Categories: [],
    User:{}

   
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
  
      //todos los Users
      case 'GET_USERS':
        return {
          ...state,
          Users: action.payload,
        };

      //todos los categories
      case 'GET_CATEGORIES':
        return{
          ...state,
          Categories: action.payload,
        }


      case 'GET_BY_ID':
        return{
          ...state,
          User:action.payload
        }

      default:
        return {
          ...state
        }
    }
  }
  
  export default rootReducer;