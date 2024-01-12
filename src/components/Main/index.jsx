import React from "react";
import { Route, Routes } from "react-router-dom";
import AllMovies from "../AllMovies";
import MovieDetails from "../MovieDetails";
import MovieForm from "../MovieForm";

const Main = () => {
	return (
    <div className="flex-grow w-full mx-auto max-w-10xl">
      <main>
			<Routes>
				<Route path="/" element={<AllMovies />} />
				<Route path="/movies/:id" element={<MovieDetails />} />
				<Route path="/movies/new" element={<MovieForm />} />
			</Routes>
		</main>

    </div>
		
	);
};

export default Main;
