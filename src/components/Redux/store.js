//import {legacy_createStore} from 'redux'
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { LoginReducer, SignupReducer } from "./Reducer";

const rootreducer = combineReducers({ sngUpUser: SignupReducer, lgUser: LoginReducer });

const store = configureStore({
  reducer: rootreducer,
  middleware: [logger, thunk],
});
export default store;
