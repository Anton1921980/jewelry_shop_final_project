import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { shoppingCardReducer } from "./shopping-card";
import { favoritesReducer } from "./favorites";
import { categoriesReduser } from "./headerMenu";
import { loginReducer } from "./login";
import {filtersReduser} from "./filters"


const rootReducer = combineReducers({
  shoppingCard: shoppingCardReducer,
  favorites: favoritesReducer,
  categories: categoriesReduser,
  login: loginReducer,
  filters: filtersReduser
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
