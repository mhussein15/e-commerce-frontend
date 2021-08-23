const initialState = {
  categories: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CATEGORIES":
      return {
        ...state,
        categories: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
