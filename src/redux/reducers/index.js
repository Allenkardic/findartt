/** @format */

import { combineReducers } from "redux";
import userReducer from "./userReducer";
import arttworkReducer from "./arttworkReducer";

export default combineReducers({
  user: userReducer,
  arttwork: arttworkReducer
});
