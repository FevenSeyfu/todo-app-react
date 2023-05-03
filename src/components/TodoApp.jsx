import TodoHeader from './TodoHeader';
import TodoLogic from './TodoLogic';
import '../styles/app.css';

const TodoApp = () => {
	return(
		<div className="wrapper">
      <div className="todos">
				<TodoHeader />
				<TodoLogic />
		</div>
		</div>
	)
}

export default TodoApp;