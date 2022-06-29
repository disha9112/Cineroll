import axios from "axios";
import React, { useEffect } from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
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

  console.log("Movies: ", movies);

  return (
    <div>
      <Row s={2} md={3} lg={4} xl={5} className="g-4">
        <MovieCard />
      </Row>
    </div>
  );
}

export default MovieList;
