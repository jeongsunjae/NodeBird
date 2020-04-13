import {all, fork,delay,put,takeEvery,call} from "redux-saga/effects";
import { LOG_IN_REQUEST,LOG_IN_SUCCESS, LOG_IN_FAILURE, SIGN_UP_REQUEST, SIGN_UP_FAILURE,SIGN_UP_SUCCESS } from "../reducers/user";
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


function signUpAPI(signUpData) {
    // 서버에 요청
    return axios.post('http://localhost:3065/api/user/',signUpData)
 }
    

function* signUp(action){
    try {
        // yield call(signAPI);
        yield call(signUpAPI, action.data);

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