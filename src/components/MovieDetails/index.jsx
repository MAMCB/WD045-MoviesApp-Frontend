import React from 'react'
import { useState, useEffect } from "react";
import { Card, Button,Table } from "flowbite-react";
import { useParams} from 'react-router-dom';
import axios from 'axios';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null)
  const {id} = useParams();
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_SERVER_BASE_URL}/api/movies/${id}`).then(res=>setMovie(res.data)).catch(e=>console.log(e));
    
  }, [])
  


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
              width="853"
              height="480"
              src="https://www.youtube.com/embed/CHekzSiZjrY"
             
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
        </>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
}

export default MovieDetails;