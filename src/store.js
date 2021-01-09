import { createStore, applyMiddleware } from 'redux';
import toDoApp from './reducers';
import rootSaga from './sagas';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(toDoApp, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store
