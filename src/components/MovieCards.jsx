import { useState, useEffect } from "react";
import axios from "axios";
import { Card, Button } from "flowbite-react";

const MovieCards = () => {
	  const [movies, setMovies] = useState([]);
    useEffect(() => {
      axios
        .get(`${import.meta.env.VITE_SERVER_BASE_URL}/api/movies`)
        .then((res) => setMovies(res.data))
        .catch((error) => console.log(error)); 
    }, [])

 
	return (
    <div className="grid grid-cols-4 gap-8 mt-6">
      {movies.length > 0 ? (
        movies.map((movie) => (
          <Card
            key={movie.id}
            className="max-w-sm"
            imgAlt={movie.title}
            imgSrc={movie.poster}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {movie.title}
            </h5>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {movie.director + " " + movie.year}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400"></p>
            <Button type="submit">Description</Button>
          </Card>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MovieCards;
