import React from 'react'
import { useState, useEffect } from "react";
import { Card, Button, Table, Label, TextInput } from "flowbite-react";
import { useParams} from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null)
  const [trailer, setTrailer] = useState(null)
  const {id} = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_SERVER_BASE_URL}/api/movies/${id}`).then(res=>setMovie(res.data)).catch(e=>console.log(e));
    
  }, [])
  
const updateVideo = ()=>{
  axios.put(`${import.meta.env.VITE_SERVER_BASE_URL}/api/movies/${id}`,trailer).then(res=>window.location.reload()).catch(e=>console.log(e));
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

  return (
    <>
      {movie ? (
        <>
          <div className="grid grid-cols-4 gap-8 mt-6">
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
          <div className="grid grid-cols-4 gap-8 mt-6">
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
            <p>{movie.description}</p>
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
          <Button onClick={updateVideo}>Update trailer</Button>
          <Button onClick={handleDelete}>Delete movie</Button>
        </>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
}

export default MovieDetails;