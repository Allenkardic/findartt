import axios from "axios";
import { GET_ARTTWORKS, GET_ARTTWORK, UI_LOADING } from "../actions/types";

export const getArttworks = () => dispatch => {
  dispatch({ type: UI_LOADING });
  axios.get("https://findartt.herokuapp.com/api/v1/art/find").then(response => {
    dispatch({ type: GET_ARTTWORKS, payload: response.data.data });
    console.log(response.data.data);
  });
};

export const getArttwork = id => dispatch => {
  dispatch({ type: UI_LOADING });
  axios
    .get(`https://findartt.herokuapp.com/api/v1/art/find/${id}/summary`)
    .then(response => {
      dispatch({ type: GET_ARTTWORK, payload: response.data.data });
      console.log(response.data.data);
    });
};

export const userMakeBid = () => {
  axios.post("");
};
