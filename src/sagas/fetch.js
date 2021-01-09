import { all, call, put, takeEvery } from 'redux-saga/effects';
import { LOAD_TODO_LIST_ASYNC, LOAD_TODO_LIST } from '../actions';
import { getToDoList } from '../utils/api'


export function* fetchToDoList() {
  const response = yield call(getToDoList);
  yield put({ type: LOAD_TODO_LIST, toDoList: response });
}

export function* loadToDoList() {
  yield takeEvery(LOAD_TODO_LIST_ASYNC, fetchToDoList);
}

export default function* root()  {
    yield all([loadToDoList()]);
}
