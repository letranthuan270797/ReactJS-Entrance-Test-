import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
  } from "./ActionType";

const initialstate = {
  loading: true,
  data: [],
  error: "",
};


export const LoginReducer = (state = initialstate, action) => {
    switch (action.type) {
      case LOGIN_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case LOGIN_FAILURE:
        return {
          loading: false,
          data: action.payload,
          error: "",
        };
      case LOGIN_SUCCESS:
        return {
          loading: false,
          data: [],
          error: action.payload,
        };
      default:
        return state;
    }
  };

  export const SignupReducer = (state = initialstate, action) => {
    switch (action.type) {
      case SIGNUP_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case SIGNUP_FAILURE:
        return {
          loading: false,
          data: action.payload,
          error: "",
        };
      case SIGNUP_SUCCESS:
        return {
          loading: false,
          data: [],
          error: action.payload,
        };
      default:
        return state;
    }
  };
