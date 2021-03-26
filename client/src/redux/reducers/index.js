import { combineReducers } from "redux";
import authErrorsReducer from "./authErrorsReducer";
import authReducer from "./authReducer";
import stationReducer from "./stationReducer";

export default combineReducers({
  auth: authReducer,
  authError: authErrorsReducer,
  station: stationReducer,
});
