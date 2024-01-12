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
        href="https://github.com/MAMCB/WD045-MoviesApp-Frontend"
        className="dark:text-gray-400"
      >
        <h2 className="font-bold text-2xl ml-2">Movies App</h2>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="dark:text-gray-400">
        <NavLink to="/">Home</NavLink>

        <NavLink to="/movies/new">Add a Movie</NavLink>

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
