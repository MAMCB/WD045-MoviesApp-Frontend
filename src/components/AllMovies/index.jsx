import React from "react";
import CarouselPoster from "../CarouselPoster";
import SearchBar from "../SearchBar";
import MovieCards from "../MovieCards";

const AllMovies = () => {
	return (
		<div>
			<CarouselPoster />
			<SearchBar />
			<MovieCards />
		</div>
	);
};

export default AllMovies;
