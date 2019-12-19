import {
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  SET_ERROR,
  UI_LOADING,
  UI_NOLOADING,
  SET_NOERROR
} from "../actions/types";

const initialState = {
  errors: null,
  authenticated: false,
  ui_loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true
      };

    case SET_UNAUTHENTICATED:
      return {
        ...state,
        authenticated: false
      };

    case SET_ERROR:
      return {
        ...state,
        errors: action.payload
      };

    case UI_LOADING:
      return {
        ...state,
        ui_loading: true
      };

    case UI_NOLOADING:
      return {
        ...state,
        ui_loading: false
      };

    case SET_NOERROR:
      return {
        ...state,
        errors: null
      };
    default:
      return state;
  }
}
