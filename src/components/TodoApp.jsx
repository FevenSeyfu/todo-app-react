import TodoHeader from './TodoHeader';
import TodoLogic from './TodoLogic';
import '../styles/app.css';
import Navbar from './NavBar';

const TodoApp = () => {
	return(
		<div className="wrapper">
      <header>
        <Navbar />
			</header>
      <div className="todos">
				<TodoHeader />
				<TodoLogic />
      </div>
		</div>
	)
}

export default TodoApp;