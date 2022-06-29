import { combineReducers } from "redux";

import { TodoLists } from "./todo";
import { signInReducer } from "./sign-in";

export const allReducers = combineReducers({
  TodoLists,
  signInReducer,
});
