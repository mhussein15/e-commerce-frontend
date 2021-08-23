const initialState = {
  user: null,
  user_detail: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CLEAR_INFO":
      return {
        ...state,
        user: null,
        user_detail: null,
      };
    case "FETCH_USER":
      return {
        ...state,
        user_detail: action.payload,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.payload.token_info,
      };
    default:
      return state;
  }
};

export default reducer;
