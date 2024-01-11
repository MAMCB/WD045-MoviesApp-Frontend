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
    <Navbar fluid rounded className="pt-8">
      <Navbar.Brand
        href="https://flowbite-react.com"
        className="dark:text-gray-400"
      >
        <img
          src="/favicon.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="dark:text-gray-400">
        <NavLink to="/" >
          Home
        </NavLink>
        <NavLink to="/">About</NavLink>
        <NavLink to="/movies/new">Add a Movie</NavLink>
        <NavLink to="#">Pricing</NavLink>
        <NavLink to="#">Contact</NavLink>
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
