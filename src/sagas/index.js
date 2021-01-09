import { all, fork } from 'redux-saga/effects';

import fetch from './fetch';
import add from './add';
import update from './update';
import markCompleteState from './markCompleteState';
import deleteItem from './delete';



export default function* rootSaga() {
  yield all([fork(fetch), fork(add), fork(update), fork(markCompleteState), fork(deleteItem)]);
}
