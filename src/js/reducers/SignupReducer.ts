import { createReducer } from "reduxsauce";
import { Types } from "../action";

export const signState = {
  user: "",
  errorMessage: "",
};

export const signupSuccess = (state = signState, action: { user: any }) => {
  return { errorMessage: "", user: action.user };
};
export const signupFailed = (state = signState, action: { error: any }) => {
  return { user: "", errorMessage: action.error };
};

const HANDLERS = {
  [Types.SIGNUP_SUCCESS]: signupSuccess,
  [Types.SIGNUP_FAILED]: signupFailed,
};

export default createReducer(signState, HANDLERS);
