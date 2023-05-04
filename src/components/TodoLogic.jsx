import { useState } from 'react';
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import { v4 as uuidv4 } from "uuid";

const TodoLogic = () => {
const [todos,setTodos ] = useState([
	{
		id: uuidv4(),
		title: 'Setup development environment',
		completed: true,
	},
	{
		id: uuidv4(),
		title: 'Develop website and add content',
		completed: false,
	},
	{
		id: uuidv4(),
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
		setTodos([
    ...todos.filter((todo) => {
      return todo.id !== id;
    }),
  ]);
	}
const addTodoItem = (title) => {
  const newTodo = {
    id: uuidv4,
    title: title,
    completed: false,
  };
  setTodos([...todos, newTodo]);
};
	const setUpdate = (updatedTitle, id) => {
		setTodos(
			todos.map((todo) => {
				if (todo.id === id) {
					todo.title = updatedTitle;
				}
				return todo;
			})
		);
	};
	return(
    <div>
      <TodoInput addTodoItem={addTodoItem}/>
      <TodoList todosProps={todos} setTodos={setTodos} handleChange={handleChange} DeleteTodo={DeleteTodo} setUpdate={setUpdate}/>
    </div>
	)
}

export default TodoLogic;