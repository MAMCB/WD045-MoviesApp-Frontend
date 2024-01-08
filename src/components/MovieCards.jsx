import { useState, useEffect } from "react";
import axios from "axios";
import { Card, Button } from "flowbite-react";

const MovieCards = () => {
	  const [movies, setMovies] = useState([]);
    useEffect(() => {
      axios
        .get("${import.meta.env.VITE_SERVER_BASE_URL}/api/movies")
        .then((res) => console.log(res.data))
        .catch((error) => console.log(error)); 
    }, [])

 
	return (
		<div>
			{movies.length>0?movies.map(movie =>
    
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
    </Card>  ):<p>Loading...</p>}
		</div>
	);
};

export default MovieCards;
