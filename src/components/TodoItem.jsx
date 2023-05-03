import PropTypes from 'prop-types';

const TodoItem = ({ itemProp,handleChange,DeleteTodo }) => {
  return(
		<li>
			<input
        type="checkbox"
        checked={itemProp.completed}
				name="todoTask"
				onChange={()=>handleChange(itemProp.id)}/>
			{itemProp.title}
			<button type="reset" onClick={()=>DeleteTodo(itemProp.id)}>Delete</button>
		</li>
	);
};

TodoItem.propTypes = {
  itemProp: PropTypes.array.isRequired,
	handleChange: PropTypes.func.isRequired,
	DeleteTodo: PropTypes.func.isRequired,
}
export default TodoItem;