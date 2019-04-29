import { combineReducers } from "redux";
import authenticationReducer from "./authenticationReducer";

export default combineReducers({
  authentication: authenticationReducer
});
