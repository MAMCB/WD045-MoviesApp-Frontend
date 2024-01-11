import React from "react";
import CarouselPoster from "../CarouselPoster";
import SearchBar from "../SearchBar";
import MovieCards from "../MovieCards";
import { useState } from "react";

const AllMovies = () => {
	const [movieToDisplay, setMovieToDisplay] = useState(null);

	const handleMovieToDisplay = (movie) => {
		setMovieToDisplay(movie);
	}
	return (
		<div>
			<CarouselPoster />
			<SearchBar handleMovieToDisplay={handleMovieToDisplay} />
			<MovieCards movieToDisplay={movieToDisplay} />
		</div>
	);
};

export default AllMovies;
