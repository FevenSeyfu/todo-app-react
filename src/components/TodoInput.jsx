import { useState } from 'react';
import PropTypes from 'prop-types';

const TodoInput = ({ addTodoItem }) => {
	const [title,setTitle] =useState(' ')
	const handleSubmit = (e)=>{
		e.preventDefault();
		addTodoItem(title)
    setTitle('');
	}
	return(
     <form onSubmit={handleSubmit}>
      <input
        type="text"
				name="todo-task"
				placeholder='Add todo...'/>
			<button type="submit">Enter</button>
		</form>
	)
}
TodoInput.propTypes = {
  addTodoItem: PropTypes.func.isRequired,
}
export default TodoInput;