import { combineReducers } from "redux";
import authReducer from "./authReducer";
import { reducer as formReducer } from "redux-form";
import streamsReducer from "./StreamsReducer";

export default combineReducers({
  auth: authReducer,
  // you must put it as form attribute
  form: formReducer,
  streams: streamsReducer,
});
