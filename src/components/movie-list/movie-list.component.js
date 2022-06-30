import React, { useEffect } from "react";
import axios from "axios";
import { Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../../redux/movie/movieActions";
import MovieCard from "../movie-card/movie-card.component";

function MovieList() {
  const movies = useSelector((state) => state.allMovies.movies);
  const dispatch = useDispatch();

  async function fetchMovies() {
    const response = await axios
      .get(
        "http://api.themoviedb.org/3/movie/popular?api_key=c878fd5c16d0faa5c21cfe9a3eb3c663"
      )
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
      <Row s={3} md={4} lg={5} xl={6} className="p-3 text-center">
        <MovieCard />
      </Row>
    </div>
  );
}

export default MovieList;
