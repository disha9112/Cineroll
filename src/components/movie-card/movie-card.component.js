import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import "./movie-card.styles.css";

function MovieCard() {
  const movies = useSelector((state) => state.allMovies.movies);

  const movieList = movies.map((movie) => {
    const { id, poster_path } = movie;

    return (
      <Col key={id}>
        <Card
          style={{
            minWidth: "15rem",
            margin: "10px 10px",
            backgroundColor: "#212529",
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
      </Col>
    );
  });

  return <>{movieList}</>;
}

export default MovieCard;
