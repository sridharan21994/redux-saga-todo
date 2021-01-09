export const LOAD_TODO_LIST_ASYNC = 'LOAD_TODO_LIST_ASYNC';
export const LOAD_TODO_LIST = 'LOAD_TODO_LIST';
export const ADD_TODO = 'ADD_TODO';
export const ADD_TODO_ASYNC = 'ADD_TODO_ASYNC';
export const UPDATE_TODO = 'UPDATE_TODO';
export const UPDATE_TODO_ASYNC = 'UPDATE_TODO_ASYNC';
export const MARK_STATE_TODO = 'MARK_STATE_TODO';
export const MARK_STATE_TODO_ASYNC = 'MARK_STATE_TODO_ASYNC';
export const DELETE_TODO = 'DELETE_TODO';
export const DELETE_TODO_ASYNC = 'DELETE_TODO_ASYNC';

export function addToDo(description) {
  return {
    type: ADD_TODO_ASYNC,
    payload: {
        task : {description}
    }
  };
}
export function updateToDo(payload) {
  return {
    type: UPDATE_TODO_ASYNC,
    payload
  };
}
export function markStateToDo(payload) {
  return {
    type: MARK_STATE_TODO_ASYNC,
    payload
  };
}
export function deleteToDo(id) {
  return {
    type: DELETE_TODO_ASYNC,
    payload: {id}
  };
}
export function loadToDoList() {
    return {
      type: LOAD_TODO_LIST_ASYNC
    };
}