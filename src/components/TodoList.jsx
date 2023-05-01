import PropTypes from 'prop-types';
import TodoItem from "./TodoItem";
const TodoList = ({ todosProps,setTodos }) => {
  return (
    <ul>
      {todosProps.map((todo) => (
				<TodoItem key={todo.id} itemProp={todo} setTodos={setTodos} />
			))}
    </ul>
  );
};
TodoList.propTypes = {
  todosProps: PropTypes.array.isRequired,
	setTodos: PropTypes.func.isRequired,
}
export default TodoList;
