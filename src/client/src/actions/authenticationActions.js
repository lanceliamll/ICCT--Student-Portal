import axios from "axios";
import { GET_ERRORS } from "./types";

export const registerUser = (data, history) => dispatch => {
  axios
    .post("/api/user/register", data)
    .then(res => history.push("/login"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
