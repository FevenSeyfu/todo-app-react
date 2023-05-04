import TodoHeader from '@/components/TodoHeader';
import TodoLogic from '@/components/TodoLogic';
// import Navbar from '@/components/NavBar';

const Home = () => {
  return (
    <div className="wrapper">
      {/* <header>
        <Navbar />
			</header> */}
      <div className="todos">
        <TodoHeader />
        <TodoLogic />
      </div>
    </div>
  );
};
export default Home;