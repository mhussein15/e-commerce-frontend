import { combineReducers } from "redux";

import productReducer from "./productReducer";
import categoryReducer from "./categoryReducer";
import authReducer from "./authReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  productReducer,
  categoryReducer,
  authReducer,
  cartReducer,
});

export default rootReducer;
