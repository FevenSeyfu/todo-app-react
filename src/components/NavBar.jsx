import '../styles/app.css';
import { useState,useEffect,useRef } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
	const [navbarOpen, setNavbarOpen] = useState(false);

	useEffect(() => {
    document.title = `Current state value: ${dropdown}`;
  }, [dropdown]);
	const ref = useRef();
	useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
  }, [dropdown]);
	const links = [
		{ path: '/', text: 'Home' },
		{ path: 'about', text: 'About' },
		{ path: 'profile', text: 'Profile' },
		{ path: 'login', text: 'Login' },
  ];
  return (
    <nav className="navbar">
		<button
			className="toggle"
			onClick={() => setNavbarOpen((prev) => !prev)}
		>
			{navbarOpen ? 'close' : 'open'}
		</button>
			<ul className={`menu-nav${navbarOpen ? ' show-menu' : ''}`}>
				{links.map((link) => {
					return (
						<li key={link.text}>
							<NavLink to={link.path}>{link.text}</NavLink>
						</li>
					);
				})}
			</ul>
		</nav>
  );
};
export default Navbar;
