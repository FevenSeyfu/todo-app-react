import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from '../styles/TodoItem.module.css'

const TodoItem = ({ itemProp,handleChange,DeleteTodo }) => {
  const [editing, setEditing] = useState(false);

const handleEditing = () => {
	setEditing(true);
}
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };
	return(
		<li className={styles.item}>
      <div className={styles.content}>
				<input
					type="checkbox"
					checked={itemProp.completed}
					name="todoTask"
					onChange={()=>handleChange(itemProp.id)}/>
					<span style={itemProp.completed ? completedStyle : null}>
						{itemProp.title}
					</span>
				<button type="reset" onClick={()=>handleEditing(itemProp.id)}>Edit</button>
				<button type="reset" onClick={()=>DeleteTodo(itemProp.id)}>Delete</button>
      </div>
		</li>
	);
};

TodoItem.propTypes = {
  itemProp: PropTypes.array,
	handleChange: PropTypes.func.isRequired,
	DeleteTodo: PropTypes.func.isRequired,
	EditTodo: PropTypes.func.isRequired,
}
export default TodoItem;