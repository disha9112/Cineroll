import React from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import MovieCard from "../movie-card/movie-card.component";

function MovieList() {
  return (
    <div>
      <Row s={2} md={2} lg={3} xl={4} className="g-4">
        {Array.from({ length: 8 }).map((_, idx) => (
          <Col>
            <MovieCard />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default MovieList;
