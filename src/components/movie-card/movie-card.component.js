import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";
import "./movie-card.styles.css";

function MovieCard() {
  const movies = useSelector((state) => state.allMovies.movies);

  const movieList = movies.map((movie) => {
    const { id, poster_path } = movie;

    return (
      <Col key={id}>
        <Link to={`/details/${id}`}>
          <Card
            style={{
              maxWidth: "12rem",
              minWidth: "6rem",
              margin: "10px 10px",
              backgroundColor: "#000000",
              color: "white",
            }}
            className="movie-card-body"
          >
            <Card.Img
              variant="top"
              style={{ objectFit: "cover" }}
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt="movie poster"
              className="movie-card-img"
            ></Card.Img>
          </Card>
        </Link>
      </Col>
    );
  });
  return <>{movieList}</>;
}

export default MovieCard;
