import { connect } from 'react-redux';
import List from '../List'

const mapStateToProps = state => {
  return {
    uncheckedToDoList: state.toDoList.filter(el => !el.completed_at).sort(
        (a,b) => new Date(b.created_at)-new Date(a.created_at)),
    checkedToDoList: state.toDoList.filter(el => el.completed_at).sort(
        (a,b) => new Date(a.completed_at)-new Date(b.completed_at)),
  };
};

const ToDoListContainer = connect(mapStateToProps)(List);

export default ToDoListContainer;