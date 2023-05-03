import PropTypes from 'prop-types';
import TodoItem from "./TodoItem";
const TodoList = ({ todosProps,setTodos,handleChange,DeleteTodo }) => {
  return (
    <ul>
      {todosProps.map((todo) => (
				<TodoItem key={todo.id} itemProp={todo} setTodos={setTodos}handleChange={handleChange} DeleteTodo={DeleteTodo}/>
			))}
    </ul>
  );
};
TodoList.propTypes = {
  todosProps: PropTypes.array.isRequired,
	setTodos: PropTypes.func.isRequired,
	handleChange: PropTypes.func.isRequired,
	DeleteTodo: PropTypes.func.isRequired,
}
export default TodoList;
