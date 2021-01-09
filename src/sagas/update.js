import { all, call, put, takeEvery } from 'redux-saga/effects';
import { UPDATE_TODO, UPDATE_TODO_ASYNC } from '../actions';
import { updateToDoList } from '../utils/api'


export function* editToDoList({payload}) {
  const response = yield call(updateToDoList, payload);
  yield put({ type: UPDATE_TODO, payload: response });
}

export function* watchupdateToDoList() {
  yield takeEvery(UPDATE_TODO_ASYNC, editToDoList);
}

export default function* root()  {
    yield all([watchupdateToDoList()]);
}
