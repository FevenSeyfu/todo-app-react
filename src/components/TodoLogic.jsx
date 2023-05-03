import { useState } from 'react';
import TodoInput from './TodoInput'
import TodoList from './TodoList'

const TodoLogic = () => {
const [todos,setTodos ] = useState([
	{
		id: 1,
		title: 'Setup development environment',
		completed: true,
	},
	{
		id: 2,
		title: 'Develop website and add content',
		completed: false,
	},
	{
		id: 3,
		title: 'Deploy to live server',
		completed: false,
	},
]);
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
const addTodoItem = (title) => {
  const newTodo = {
    id: 4,
    title: title,
    completed: false,
  };
  setTodos([...todos, newTodo]);
};
	return(
    <div>
      <TodoInput addTodoItem={addTodoItem}/>
      <TodoList todosProps={todos} setTodos={setTodos} handleChange={handleChange} DeleteTodo={DeleteTodo}/>
    </div>
	)
}

export default TodoLogic;