import { all, fork, takeLatest, put, delay, call } from 'redux-saga/effects';
import axios from 'axios';
import {
  ADD_POST_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS,
} from '../reducers/post';

function addPostAPI(postData) {
  return axios.post('/post', postData, {
    withCredentials: true,
  });
}

function* addPost() {
  try {
    yield delay(2000);
    yield put({
        type:ADD_POST_SUCCESS,
    });
  } catch (e) {
    yield put({
      type: ADD_POST_FAILURE,
      error: e,
    });
  }
}

function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost);
}


export default function* postSaga() {
  yield all([
    fork(watchAddPost),
  ]);
}