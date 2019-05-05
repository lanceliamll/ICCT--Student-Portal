import axios from "axios";
import jwt_decode from "jwt-decode";
import setAuthenticationToken from "../utils/setAuthenticationToken";
import { GET_ERRORS, SET_CURRENT_USER } from "./types";

//Register User
export const registerUser = (registerData, history) => dispatch => {
  axios
    .post("/api/user/register", registerData)
    .then(res => history.push("/login"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//Login User
export const loginUser = loginData => dispatch => {
  axios
    .post("/api/user/login", loginData)
    .then(res => {
      const { token } = res.data;
      //Set Token to Local Storage
      localStorage.setItem("jwtToken", token);
      //Set token to Authentication Header
      setAuthenticationToken(token);
      //Decode the token to get the user information
      const decodedUser = jwt_decode(token);
      //Set current user
      dispatch(setCurrentUser(decodedUser));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//Set Current User
export const setCurrentUser = decodedUser => dispatch => {
  dispatch({
    type: SET_CURRENT_USER,
    payload: decodedUser
  });
};

//Logout User
export const logoutUser = () => dispatch => {
  //Remove JWT Token
  localStorage.removeItem("jwtToken");
  //Remove Authentication Header Token
  setAuthenticationToken(false);
  //Set Current User to Empty Object to make isAuthenticated = false
  dispatch(setCurrentUser({}));
};
