import { combineReducers } from "redux";
import authReducer from "./AuthReducer";
import signupReducer from "./SignupReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  signup: signupReducer,
});
export default rootReducer;
