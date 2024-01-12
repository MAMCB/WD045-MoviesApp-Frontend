import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';

const SearchBar = ({handleMovieToDisplay}) => {
  const [submitted, setSubmitted] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (submitted) {
      axios.get(`${import.meta.env.VITE_SERVER_BASE_URL}/api/movies/?title=${search}`)
        .then((res) => {
          handleMovieToDisplay(res.data[0]);
          setSubmitted(false);
        })
        .catch((error) => console.log(error));
    }
  }, [submitted])

  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  }

  
    return (
      /*
      <div className="flex flex-col sm:flex-row items-center w-full">
        <div className="relative w-full">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M4 10h.01M20 10h.01M4 6h.01M20 6h.01M4 14h.01M20 14h.01"></path></svg>
          </div>
          <input type="text" id="search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm sm:text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 mb-2 sm:mb-0 sm:mr-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Search" />
        </div>
        <button type="submit" className="p-2.5 text-sm sm:text-md font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Find movie
        </button>
      </div> 

      
      */
      <div className="flex flex-col sm:flex-row items-center justify-center w-full sm:w-3/4 lg:w-1/2 xl:w-1/3 mx-auto">
      <div className="relative flex-grow mr-2">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">

          <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M4 10h.01M20 10h.01M4 6h.01M20 6h.01M4 14h.01M20 14h.01"></path></svg>
        </div>
        <input type="text" id="search" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm sm:text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full pl-10 p-2.5 mb-2 sm:mb-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Search for a movie" />
      </div>
      <button type="submit" onClick={handleSubmit} className="p-2.5 text-sm sm:text-md font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Find movie
      </button>
    </div>
      




    )
  }

export default SearchBar;