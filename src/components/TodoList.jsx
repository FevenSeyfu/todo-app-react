import PropTypes from 'prop-types';
import TodoItem from "./TodoItem";
const TodoList = ({ todosProps }) => {
  return (
    <ul>
      {todosProps.map((todo) => (
				<TodoItem key={todo.id} itemProp={todo} />
			))}
    </ul>
  );
};
TodoList.propTypes = {
  todosProps: PropTypes.array.isRequired,
}
export default TodoList;
