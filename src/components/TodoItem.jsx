import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from '../styles/TodoItem.module.css'

const TodoItem = ({ itemProp,handleChange,DeleteTodo,setUpdate }) => {
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
	let viewMode = {};
  let editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }
  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };
	return(
		<li className={styles.item}>
      <div className={styles.content} style={viewMode}>
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
				<input
				type="text"
				value={itemProp.title}
				className={styles.textInput}
				style={editMode}
				onKeyDown={handleUpdatedDone}
				onChange={(e) => setUpdate(e.target.value, itemProp.id)}/>
		</li>
	);
};

TodoItem.propTypes = {
  itemProp: PropTypes.array,
	handleChange: PropTypes.func.isRequired,
	DeleteTodo: PropTypes.func.isRequired,
	EditTodo: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
}
export default TodoItem;