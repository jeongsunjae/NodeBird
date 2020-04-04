import {all, fork,delay,put,takeEvery} from "redux-saga/effects";
import { LOG_IN_REQUEST,LOG_IN_SUCCESS, LOG_IN_FAILURE, SIGN_UP_REQUEST, SIGN_UP_FAILURE } from "../reducers/user";
import axios from 'axios';


function loginAPI() {
// 서버에 요청
    return axios.post('/login');
}

function* login(){
    try {
        //yield call(loginAPI);
        yield delay(2000),
        yield put({
            type:LOG_IN_SUCCESS
        })
    }
    catch (e)
    {
        console.error(e);
        yield put({
            type:LOG_IN_FAILURE
        })
    }
}

function* watchLogin() {

    yield takeEvery(LOG_IN_REQUEST, login)

}


function signAPI() {
    // 서버에 요청
 }
    

function* signUp(){
    try {
        // yield call(signAPI);
        yield delay(2000);
        throw new Error('에러');
        yield put({
            type:SIGN_UP_SUCCESS
        })
    }
    catch (e)
    {
        console.error(e);
        yield put({
            type:SIGN_UP_FAILURE,
            error: e
        })
    }
}

function* watchSignup() {

    yield takeEvery(SIGN_UP_REQUEST, signUp)

}

export default function* userSaga() {
    yield all([

        fork(watchLogin),
        fork(watchSignup),

    ]);
}