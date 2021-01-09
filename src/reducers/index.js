import { ADD_TODO, DELETE_TODO, LOAD_TODO_LIST, UPDATE_TODO, MARK_STATE_TODO } from '../actions'

const initialState = {
  toDoList: []
};

export default function toDoApp(state = initialState, action) {
  switch (action.type) {
    case LOAD_TODO_LIST:
        return {
          ...state,
          toDoList: action.toDoList
    };
    case ADD_TODO:
      return {
        ...state,
        toDoList: [action.payload, ...state.toDoList]
      };
    case UPDATE_TODO:
      return {
        ...state,
        toDoList: state.toDoList.map((el) => el.id === action.payload.id ? action.payload : el)
      };
    case MARK_STATE_TODO:
      return {
        ...state,
        toDoList: state.toDoList.map((el) => el.id === action.payload.id ? action.payload : el)
      };
    case DELETE_TODO:
      return {
        ...state,
        toDoList: state.toDoList.filter(({id}) => id !== action.payload.id)
      };
    default:
      return state;
  }
}
