import { useState, useEffect } from "react";
import axios from "axios";
import { Card, Button } from "flowbite-react";

const MovieCards = () => {
	/*     const [movies, setMovies] = useState([]);
    useEffect(() => {
      axios
      .get('${import.meta.env.ELEPHANT_SQL_CONNECTION_STRING}/api/movie')
      .then(res => setMovies(res.data))
      .catch(error => console.log(error)) 
    }, [])

 */
	return (
		<div>
			{/* {movies.map(movie =>
    
    <Card key={movie.id}
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="/images/blog/image-1.jpg"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        
      </p>
      <Button type="submit" >Description</Button>
    </Card>  )} */}
		</div>
	);
};

export default MovieCards;
