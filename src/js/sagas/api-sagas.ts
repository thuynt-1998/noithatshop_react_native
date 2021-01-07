import {
  call,
  take,
  put,
  fork,
  cancel,
  takeLatest,
  all,
} from "redux-saga/effects";
import Creators, { Types } from "../action";
import Api from "../sevices/api/LoginServices";

export default function* watcherLoginSaga() {
  yield all([
    takeLatest(Types.LOGIN, loginFlow),
    takeLatest(Types.SIGNUP, signupFlow),
    takeLatest(Types.REFRESH, refreshToken),
  ]);
}

export function* authorize(username: string, password: string) {
  const { originalError, data, status } = yield call(
    Api.author,
    username,
    password
  );
  if (originalError) {
    yield put(Creators.loginFailed({ error: originalError.message, status }));
  } else {
    yield put(Creators.loginSuccess(data));
    const token = yield call(Api.setItem, data.jwtToken);

    return data;
  }
}

function* refreshToken() {
  const { originalError, data, status } = yield call(Api.refresh);
  if (originalError) {
    yield put(Creators.loginFailed({ error: originalError.message, status }));
  } else {
    yield put(Creators.loginSuccess(data));
    const token = yield call(Api.setItem, data.jwtToken);

    return status;
  }
}

export function* loginFlow() {
  while (true) {
    const { username, password } = yield take(Types.LOGIN_REQUEST);
    const task = yield fork(authorize, username, password);

    const action = yield take([Types.RESET, Types.LOGIN_FAILED]);

    if (action.type === Types.RESET) {
      yield cancel(task);
    }
    yield call(Api.removeItem);
  }
}

function* signupFlow() {
  while (true) {
    const { user } = yield take(Types.SIGNUP_REQUEST);

    const { originalError, data } = yield call(Api.signup, user);
    if (originalError) {
      yield put(Creators.signupFailed({ error: originalError.message }));
    } else {
      yield put(Creators.signupSuccess(data));
      console.log(data);

      return data;
    }
  }
}
