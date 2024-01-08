import React, {useState, useEffect} from "react";
import { Navbar } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";
import DarkModeToggle from 'react-dark-mode-toggle';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => false);

  useEffect(() => {
    document.documentElement.classList = isDarkMode ? 'dark' : '';
  }, [isDarkMode]);


	return (
		<Navbar fluid rounded>
			<Navbar.Brand href="https://flowbite-react.com" className="dark:text-gray-400">
				<img
					src="/favicon.svg"
					className="mr-3 h-6 sm:h-9"
					alt="Flowbite React Logo"
				/>
			</Navbar.Brand>
			<Navbar.Toggle />
			<Navbar.Collapse className="dark:text-gray-400">
				<NavLink href="#" active>
					Home
				</NavLink>
				<NavLink href="#">About</NavLink>
				<NavLink href="#">Services</NavLink>
				<NavLink href="#">Pricing</NavLink>
				<NavLink href="#">Contact</NavLink>
        <DarkModeToggle
          onChange={setIsDarkMode}
          checked={isDarkMode}
          size={60}
          className="ml-auto"
        />
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Header;
