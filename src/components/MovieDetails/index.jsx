import React from 'react'
import { useState, useEffect } from "react";
import {
  Card,
  Button,
  Table,
  Label,
  TextInput,
  Textarea,
} from "flowbite-react";
import { useParams} from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [title, setTitle] = useState(null);
  const [director, setDirector] = useState(null);
  const [year, setYear] = useState(null);
  const [rating, setRating] = useState(null);
  const [genre, setGenre] = useState(null);
  const [description, setDescription] = useState(null);
  const [poster, setPoster] = useState(null);
  const [updateForm, setUpdateForm] = useState(false);
  const {id} = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_SERVER_BASE_URL}/api/movies/${id}`).then(res=>setMovie(res.data)).catch(e=>console.log(e));
    
  }, [])
  
const updateVideo = ()=>{
  if(title)
  {
    axios.put(`${import.meta.env.VITE_SERVER_BASE_URL}/api/movies/${id}`,title).then(res=>window.location.reload()).catch(e=>console.log(e));
  
  }
  else if(director)
  {
    axios.put(`${import.meta.env.VITE_SERVER_BASE_URL}/api/movies/${id}`,director).then(res=>window.location.reload()).catch(e=>console.log(e));
  
  
  }
  else if(year)
  {
    axios.put(`${import.meta.env.VITE_SERVER_BASE_URL}/api/movies/${id}`,year).then(res=>window.location.reload()).catch(e=>console.log(e));
  
  
  
  }
  else if(rating)
  {
    axios.put(`${import.meta.env.VITE_SERVER_BASE_URL}/api/movies/${id}`,rating).then(res=>window.location.reload()).catch(e=>console.log(e));
  
  
  
  }
  else if (genre)
  {
    axios.put(`${import.meta.env.VITE_SERVER_BASE_URL}/api/movies/${id}`,genre).then(res=>window.location.reload()).catch(e=>console.log(e));
  
  
  
  } 
  else if (description)
  {
    axios.put(`${import.meta.env.VITE_SERVER_BASE_URL}/api/movies/${id}`,description).then(res=>window.location.reload()).catch(e=>console.log(e));
  }
  else if (poster)
  {
    axios.put(`${import.meta.env.VITE_SERVER_BASE_URL}/api/movies/${id}`,poster).then(res=>window.location.reload()).catch(e=>console.log(e));
  }
  else if (trailer)
  {
    axios.put(`${import.meta.env.VITE_SERVER_BASE_URL}/api/movies/${id}`,trailer).then(res=>window.location.reload()).catch(e=>console.log(e));
  }
  else{
    console.log("no update");
  }
  
  
  
  
}
  


const handleDelete = ()=>{
  axios.delete(`${import.meta.env.VITE_SERVER_BASE_URL}/api/movies/${id}`).then(res=>navigate("/")).catch(e=>console.log(e));
}

 const handleTrailer = (e) => {
  if(!e.target.value) return;
   const url = e.target.value;
   const urlArray = url.split("/");
   const id = urlArray[urlArray.length - 1];
   console.log(id);
   setTrailer({trailer:id});
 };

  const handleTitle = (e) => {
    setTitle({ title: e.target.value });
  };

  const handleDirector = (e) => {
    setDirector({ director: e.target.value });
  };

  const handleYear = (e) => {   
    setYear({ year: parseInt(e.target.value) });
  };

  const handleRating = (e) => {
    setRating({ rating: parseInt(e.target.value) });
  };
  const handleGenre = (e) => {
    setGenre({ genre: e.target.value });
  };
  const handleDescription = (e) => {
    setDescription({ description: e.target.value });
  };
  const handlePoster = (e) => {
    setPoster({ poster: e.target.value });
  };


  const toggleUpdateForm = ()=>{ 
    setUpdateForm(!updateForm);
  }

  return (
    <>
      {movie ? (
        <>
          <div className="grid md:grid-cols-4 gap-8 mt-6 block">
            <Card
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
            </Card>
            <iframe
              width="1236"
              height="695"
              src={`https://www.youtube.com/embed/${movie.trailer}`}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="grid lg:grid-cols-4 gap-8 w-6/12 mt-6 md:block">
            <Table>
              <Table.Head>
                <Table.HeadCell>Rating</Table.HeadCell>
                <Table.HeadCell>Genre</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell>{movie.rating}</Table.Cell>
                  <Table.Cell>{movie.genre}</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
            <p className="dark:text-gray-400 p-4">{movie.description}</p>
          </div>
          <div className='flex gap-4'>
            <Button className="mt-5" onClick={handleDelete}>
              Delete movie
            </Button>
            <Button className="mt-5" onClick={toggleUpdateForm}>
              {updateForm ? "Close" : "Update Fields"}
            </Button>
          </div>

          {updateForm && (
            <div className="grid grid-cols-1 gap-4 w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-4">
              <div>
                <div className="mb-2 mt-5 block">
                  <Label htmlFor="title" value="Movie title" />
                </div>
                <TextInput
                  id="title"
                  type="text"
                  placeholder=""
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
                <TextInput
                  id="year"
                  type="number"
                  required
                  onChange={handleYear}
                />
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
              <Button className="mt-5" onClick={updateVideo}>
                Update
              </Button>
            </div>
          )}
        </>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
}

export default MovieDetails;