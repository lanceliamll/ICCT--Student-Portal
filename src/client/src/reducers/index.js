import { combineReducers } from "redux";
import authenticationReducer from "./authenticationReducer";
import errorsReducer from "./errorsReducer";

export default combineReducers({
  authentication: authenticationReducer,
  errors: errorsReducer
});
