import { all, call, put, takeEvery } from 'redux-saga/effects';
import { MARK_STATE_TODO, MARK_STATE_TODO_ASYNC } from '../actions';
import { markComplete, markUncomplete } from '../utils/api'


export function* addToDoList({payload}) {
    const response = (payload.completed_at) ? yield call(markComplete, payload.id) : yield call(markUncomplete, payload.id);
    yield put({ type: MARK_STATE_TODO, payload: response });
}

export function* watchPostToDoList() {
  yield takeEvery(MARK_STATE_TODO_ASYNC, addToDoList);
}

export default function* root()  {
    yield all([watchPostToDoList()]);
}
