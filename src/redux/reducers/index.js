import { combineReducers } from "redux";

import { TodoLists } from "./todo";
import { signInReducer } from "./sign-in";
import { movieReducer } from "./movie";

export const allReducers = combineReducers({
  TodoLists,
  signInReducer,
  movieReducer,
});
