import axios from "axios";
import {
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  SET_ERROR,
  UI_LOADING,
  UI_NOLOADING,
  SET_NOERROR
} from "../actions/types";
export const signinUser = (existingUser, history) => dispatch => {
  dispatch({ type: UI_LOADING });
  axios
    .post("https://findartt.herokuapp.com/api/v1/auth/login", existingUser)
    .then(response => {
      const userToken = response.data.data.tokenInfo.accessToken;
      localStorage.setItem("token", userToken);
      axios.defaults.headers.common["Authorization"] = userToken;

      history.push("/home");
      dispatch({ type: UI_NOLOADING });
    });

  dispatch({
    type: SET_AUTHENTICATED
  });
  // .catch(error => {
  //   if (error) {
  //     console.log(error.response.data.message);
  //     dispatch({ type: SET_ERROR, payload: error.response.data.message });
  //   } else {
  //     dispatch({ type: SET_NOERROR });
  //   }
  // });
};

export const signupUser = (newUser, history) => dispatch => {
  dispatch({ type: UI_LOADING });
  axios
    .post("https://findartt.herokuapp.com/api/v1/auth/signup", newUser)
    .then(response => {
      const userToken = response.data.data.tokenInfo.accessToken;
      localStorage.setItem("token", userToken);
      axios.defaults.headers.common["Authorization"] = userToken;
      dispatch({
        type: SET_AUTHENTICATED
      });
      history.push("/home");
    })
    .catch(error => {
      if (error) {
        dispatch({ type: SET_ERROR, payload: error.response.data.message });
        console.log(error.response.data.message);
      } else {
        return null;
      }
    });
};

export const logout = history => dispatch => {
  axios
    .post("https://findartt.herokuapp.com/api/v1/auth/logout")
    .then(response => {
      delete axios.defaults.headers.common["Authorization"];
      localStorage.removeItem("token");
      history.push("/");
      dispatch({
        type: SET_UNAUTHENTICATED
      });
    });
};
