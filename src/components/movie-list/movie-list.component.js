import React, { useEffect } from "react";
import axios from "axios";
import { Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setMovies } from "../../redux/movie/movieActions";
import MovieCard from "../movie-card/movie-card.component";

const API_KEY = process.env.REACT_APP_API_KEY;

function MovieList() {
  const dispatch = useDispatch();

  async function fetchMovies() {
    const response = await axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
      .catch((error) => {
        console.log("Error: ", error);
      });

    dispatch(setMovies(response.data.results));
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      <Row s={3} md={4} lg={5} xl={6} className="p-4 mb-5 text-center">
        <MovieCard />
      </Row>
    </div>
  );
}

export default MovieList;
