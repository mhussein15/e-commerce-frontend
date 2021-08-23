import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { checkForToken} from "./actions/authActions";
import { fetchCategories } from "./actions/categoryActions";
import { fetchProducts } from "./actions/productActions";
import reducer from "./reducers/index";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

store.dispatch(checkForToken());
store.dispatch(fetchCategories());
store.dispatch(fetchProducts());


export default store;
