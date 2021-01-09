import { all, call, put, takeEvery } from 'redux-saga/effects';
import { ADD_TODO_ASYNC, ADD_TODO } from '../actions';
import { createToDoList } from '../utils/api'


export function* addToDoList({payload}) {
  const response = yield call(createToDoList, payload);
  yield put({ type: ADD_TODO, payload: response });
}

export function* watchPostToDoList() {
  yield takeEvery(ADD_TODO_ASYNC, addToDoList);
}

export default function* root()  {
    yield all([watchPostToDoList()]);
}
