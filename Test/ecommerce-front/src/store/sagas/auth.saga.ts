import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";
import { API } from "../../config";
import {
  SIGNIN,
  SigninAction,
  signinFail,
  signinSuccess,
  SIGNUP,
  SignupAction,
  signupFail,
  signupSuccess,
} from "../actions/auth.action";

// 注册
function* handleSignup(action: SignupAction) {
  try {
    // sujie test
    // yield axios.post(`${API}/signup`, action.payload);
    yield put(signupSuccess());
  } catch (error) {
    yield put(signupFail(error.response.data.error));
  }
}

// 登录
function* handleSignin(action: SigninAction) {
  try {
    // let response = yield axios.post(`${API}/signin`, action.payload);
    // sujie test
    let response = {
      data: {
        token: "token",
        user: {
          email: "zhengsujie@163.com",
          name: "zoe",
          role: 1,
          _id: "id",
        },
      },
    };
    localStorage.setItem("jwt", JSON.stringify(response.data));
    yield put(signinSuccess());
  } catch (error) {
    yield put(signinFail(error.response.data.error));
  }
}

export default function* authSaga() {
  // 注册
  yield takeEvery(SIGNUP, handleSignup);
  // 登录
  yield takeEvery(SIGNIN, handleSignin);
}
