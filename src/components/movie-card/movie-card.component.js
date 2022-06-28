import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./movie-card.styles.css";

function MovieCard() {
  return (
    <Card
      style={{
        width: "18rem",
        margin: "10px 15px",
        backgroundColor: "#212529",
        color: "white",
      }}
      className="movie-card-body"
    >
      <Card.Img
        variant="top"
        style={{ objectFit: "cover", width: "286px", height: "286px" }}
        src="https://images.unsplash.com/photo-1656203549835-d951ae6f0f80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1886&q=80"
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
