import { createReducer, resettableReducer } from "reduxsauce";

import { Types } from "../action";

const resettable = resettableReducer("RESET");

export const authState = {
  token: "",
  errorMessage: "",
};

export const loginSuccess = (state = authState, action: { token: any }) => {
  return { errorMessage: "", token: action.token };
};
export const loginFailed = (state = authState, action: { error: any }) => {
  return { token: "", errorMessage: action.error };
};

const HANDLERS = {
  [Types.LOGIN_SUCCESS]: loginSuccess,
  [Types.LOGIN_FAILED]: loginFailed,
};

export default resettable(createReducer(authState, HANDLERS));
