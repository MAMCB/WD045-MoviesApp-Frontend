import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Button, Checkbox, Label, TextInput, Textarea, FileInput } from 'flowbite-react';

const MovieForm = () => {
  const[movieUpload,setMovieUpload]=useState(false);
  const [newMovie, setNewMovie] = useState(null);
  useEffect(() => {newMovie&&
   axios.post(`${import.meta.env.VITE_SERVER_BASE_URL}/api/movies`,newMovie).then(setMovieUpload(true)).catch(e=>console.log(e));
  }, [newMovie])
  
  const movieObject ={
    title:"",
    director:"",
    rating:0,
    genre:"",
    description:"",
    year:0,
    poster:"",
    trailer:""
  }
  const handleTitle =(e)=>{
    movieObject.title = e.target.value;
  }

  const handleDirector = (e)=>{
    movieObject.director = e.target.value;
  }

  const handleYear = (e)=>{
    movieObject.year =parseInt(e.target.value);
    }

  const handleRating = (e)=>{
  movieObject.rating = parseInt(e.target.value);
  
  }

  const handleGenre = (e)=>{
    movieObject.genre = e.target.value;
  }

  const handleDescription = (e)=>{
    movieObject.description = e.target.value;
  }

  const handlePoster = (e)=>{
    movieObject.poster=e.target.value;
  }

  const handleTrailer = (e)=>{
    
    const url = e.target.value;
    const urlArray = url.split("/");
    const id = urlArray[urlArray.length-1];
    console.log(id);
    movieObject.trailer=id;
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(movieObject);
    setNewMovie(movieObject);

  }
  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        className="grid grid-cols-1 gap-4 w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-4"
        onSubmit={handleSubmit}
      >
        <div>
          <div className="mb-2 mt-5 block">
            <Label htmlFor="title" value="Movie title" />
          </div>
          <TextInput
            id="title"
            type="text"
            placeholder="name@flowbite.com"
            onChange={handleTitle}
            required
          />
        </div>
        <div>
          <div className="mb-2 mt-5 block">
            <Label htmlFor="director" value="Movie director" />
          </div>
          <TextInput
            id="director"
            type="text"
            required
            onChange={handleDirector}
          />
        </div>
        <div>
          <div className="mb-2 mt-5 block">
            <Label htmlFor="year" value="year" />
          </div>
          <TextInput id="year" type="number" required onChange={handleYear} />
        </div>
        <div>
          <label
            htmlFor="rating"
            className="block mb-2 mt-5 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select the rating
          </label>
          <select
            id="rating"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleRating}
          >
            <option value={1}>1</option>
            <option value={2}>2 </option>
            <option value={3}>3</option>
            <option value={4}>4 </option>
            <option value={5}>5 </option>
            <option value={6}>6 </option>
            <option value={7}>7 </option>
            <option value={8}>8 </option>
            <option value={9}>9 </option>
            <option value={10}>10 </option>
          </select>
        </div>
        <div>
          <label
            htmlFor="genre"
            className="block mb-2 mt-5 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select the genre
          </label>
          <select
            id="genre"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleGenre}
          >
            <option value={"Comedy"}>Comedy</option>
            <option value={"Action"}>Action</option>
            <option value={"Science Fiction"}>Science fiction</option>
            <option value={"Romance"}>Romance</option>
            <option value={"Spy"}>Spy</option>
            <option value={"Drama"}>Drama</option>
            <option value={"Horror"}>Horror</option>
            <option value={"Suspense"}>Suspense</option>
            <option value={"Animation"}>Animation</option>
            <option value={"War"}>War</option>
            <option value={"Historical"}>Historical</option>
            <option value={"Documentary"}>Documentary</option>
            <option value={"Psychological"}>Psychological</option>
            <option value={"Mystery"}>Mystery</option>
            <option value={"Western"}>Western</option>
            <option value={"Thriller"}>Thriller</option>
          </select>
        </div>

        <div className="max-w-md">
          <div className="mb-2 mt-5 block">
            <Label htmlFor="description" value="Movie description" />
          </div>
          <Textarea
            id="description"
            placeholder="Describe your movie..."
            required
            rows={4}
            onChange={handleDescription}
          />
        </div>
        <div id="posterUpload" className="max-w-md">
          <div className="mb-2 mt-5 block">
            <Label htmlFor="poster" value="Upload poster" />
          </div>
          <TextInput
            id="poster"
            type="text"
            placeholder="Add a movie poster URL"
            onChange={handlePoster}
            required
          />
        </div>
        <div>
          <div className="mb-2 mt-5 block">
            <Label htmlFor="trailer" value="Movie trailer" />
          </div>
          <TextInput
            id="trailer"
            type="text"
            placeholder="Add movie trailer video-URL from youtube here"
            onChange={handleTrailer}
            required
          />
        </div>
        <Button className="mt-5" type="submit">
          Add movie
        </Button>
      </form>
      {movieUpload && <h2>Movie {newMovie.title} uploaded successfully</h2>}
    </div>
  );
}

export default MovieForm;







    