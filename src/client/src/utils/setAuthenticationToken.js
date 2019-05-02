import axios from "axios";

const setAuthenticationToken = token => {
  if (token) {
    //Apply authentication to every request, Like in postman
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    //Delete the authentication token
    delete axios.defaults.headers.common["Authorization"];
  }
};

export default setAuthenticationToken;
