import { useState, useEffect } from "react";
import axios from "axios";
import { Card, Button } from "flowbite-react";
import { Link,Navigate } from "react-router-dom";

const MovieCards = ({ movieToDisplay }) => {
  
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_BASE_URL}/api/movies`)
      .then((res) => setMovies(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    // <div className="grid grid-cols-4 gap-8 mt-6">
    //   {movies.length > 0 ? (
    //     movies.map((movie) => (
    //       <Card
    //         key={movie.id}
    //         className="max-w-sm"
    //         imgAlt={movie.title}
    //         imgSrc={movie.poster}
    //       >
    //         <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    //           {movie.title}
    //         </h5>

    //         <p className="font-normal text-gray-700 dark:text-gray-400">
    //           {movie.director + " " + movie.year}
    //         </p>
    //         <Link to={`/movies/${movie.id}`}>Description</Link>
    //       </Card>
    //     ))
    //   ) : (
    //     <p>Loading...</p>
    //   )}
    // </div>
    <div className="px-4 sm:px-6 lg:px-8 mt-9">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-9">
        {movieToDisplay ? (
          <Card
            key={movieToDisplay.id}
            className="max-w-sm mt-9 duration-300 hover:-translate-y-1"
            imgAlt={movieToDisplay.title}
            imgSrc={movieToDisplay.poster}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {movieToDisplay.title}
            </h5>

            <p className="font-normal text-gray-700 dark:text-gray-400">
              {movieToDisplay.director + " " + movieToDisplay.year}
            </p>
            <Link
              to={`/movies/${movieToDisplay.id}`}
              className="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-blue-600 rounded shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none"
            >
              Description
            </Link>
          </Card>
        ) : movies.length > 0 ? (
          movies.map((movie) => (
            <Card
              key={movie.id}
              className="max-w-sm mt-9 duration-300 hover:-translate-y-1"
              imgAlt={movie.title}
              imgSrc={movie.poster}
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {movie.title}
              </h5>

              <p className="font-normal text-gray-700 dark:text-gray-400">
                {movie.director + " " + movie.year}
              </p>
              <Link
                to={`/movies/${movie.id}`}
                className="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-blue-600 rounded shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none"
              >
                Description
              </Link>
            </Card>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default MovieCards;
