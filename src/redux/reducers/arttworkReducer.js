import { GET_ARTTWORKS, GET_ARTTWORK } from "../actions/types";
const initialState = {
  // arttworks: [{ name: "name" }, { email: "email" }, { email: "email" }],
  arttworks: [],
  recentArttwork: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ARTTWORKS:
      return {
        ...state,
        arttworks: action.payload
      };
    case GET_ARTTWORK:
      return {
        ...state,
        recentArttwork: action.payload
      };

    default:
      return state;
  }
}
