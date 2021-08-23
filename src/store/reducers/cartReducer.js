const initialState = {
  items: [],
  orders: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CLEAR_CART":
      return {
        ...state,
        items: [],
      };
    case "FETCH_ORDERS":
      return {
        ...state,
        orders: action.payload,
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter((item) => item.product !== action.payload),
      };
    case "DELETE_ITEM_FROM_CART":
      const newItemsList = [...state.items];
      const itemDeleteId = action.payload;
      const itemDeleteIndex = state.items.findIndex(
        (item) => item.product === itemDeleteId
      );
      console.log(itemDeleteIndex)
      newItemsList[itemDeleteIndex] = {
        ...newItemsList[itemDeleteIndex],
        quantity: newItemsList[itemDeleteIndex].quantity - 1,
      };
      return {
        ...state,
        items: newItemsList,
      };
    case "ADD_TO_CART":
      const newItem = action.payload;
      const newItems = [...state.items];
      const foundItemIndex = state.items.findIndex(
        (item) => item.product === newItem.product
      );
      if (foundItemIndex >= 0) {
        newItems[foundItemIndex] = {
          ...newItems[foundItemIndex],
          quantity: newItem.quantity + newItems[foundItemIndex].quantity,
        };
        return {
          ...state,
          items: newItems,
        };
      } else {
        return {
          ...state,
          items: [...state.items, newItem],
        };
      }
    default:
      return state;
  }
};

export default reducer;
