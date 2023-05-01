import PropTypes from 'prop-types';

const TodoItem = ({ itemProp,setTodos }) => {
	const handleChange = (id) => {
		setTodos((prevState) =>
			prevState.map((todo) => {
				if (todo.id === id) {
					return {
						...todo,
						completed: !todo.completed,
					};
				}
				return todo;
			})
		);
	};
	const DeleteTodo = (id) =>{
		setTodos((prevState) =>
			prevState.map((todo) => {
				if (todo.id === id) {
					return {};
				}
				return todo;
			})
		);
	}
  return(
		<li>
			<input
        type="checkbox"
        checked={itemProp.completed}
				name="todoTask"
				onChange={()=>handleChange(itemProp.id)}/>
			{itemProp.title}
			<button type="reset" onClick={()=>DeleteTodo(itemProp.id)}>Delete</button>
{console.log(itemProp)}
		</li>
	);
};

TodoItem.propTypes = {
  itemProp: PropTypes.array.isRequired,
	setTodos: PropTypes.func.isRequired,
}
export default TodoItem;