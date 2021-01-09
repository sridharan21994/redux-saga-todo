import { all, call, put, takeEvery } from 'redux-saga/effects';
import { DELETE_TODO, DELETE_TODO_ASYNC } from '../actions';
import { deleteToDoList } from '../utils/api'


export function* removeToDoList({payload}) {
  const response = yield call(deleteToDoList, payload.id);
  yield put({ type: DELETE_TODO, payload: { id : payload.id } });
}

export function* watchDeleteToDoList() {
  yield takeEvery(DELETE_TODO_ASYNC, removeToDoList);
}

export default function* root()  {
    yield all([watchDeleteToDoList()]);
}
