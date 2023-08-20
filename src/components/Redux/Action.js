import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
} from "./ActionType";
import axios from "axios";

const API_URL = "http://streaming.nexlesoft.com:3001/auth/";
const loginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

const loginSuccess = (user) => {
  return {
    type: LOGIN_SUCCESS,
    payload: user,
  };
};

const loginFailure = (error) => {
  return {
    type: LOGIN_FAILURE,
    payload: error,
  };
};

const signupRequest = () => {
  return {
    type: SIGNUP_REQUEST,
  };
};

const signupSuccess = (user) => {
  return {
    type: SIGNUP_SUCCESS,
    payload: user,
  };
};

const signupFailure = (error) => {
  return {
    type: SIGNUP_FAILURE,
    payload: error,
  };
};


export const loginUser = (credentials) => {
  return (dispatch) => {
    dispatch(loginRequest());

    axios
      .post(API_URL + "signin", credentials)
      .then((response) => {
        const user = response.data;
        dispatch(loginSuccess(user));
      })
      .catch((error) => {
        const errorMessage = error.response
          ? error.response.data.message
          : "An error occurred";
        dispatch(loginFailure(errorMessage));
      });
  };
};

export const signupUser = (userData) => {
  console.log(userData);
  return (dispatch) => {
    dispatch(signupRequest());

    axios
      .post(API_URL + "signup", userData)
      .then((response) => {
        const user = response.data;
        dispatch(signupSuccess(user));
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(user));
        }
  
        return response.data;
      })
      .catch((error) => {
        const errorMessage = error.response
          ? error.response.data.message
          : "An error occurred";
        dispatch(signupFailure(errorMessage));
      });
  };
};

export const logout = () => {
  localStorage.removeItem("user");
};