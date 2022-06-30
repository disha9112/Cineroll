import React from "react";
import Card from "react-bootstrap/Card";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./footer.styles.css";

function Footer() {
  return (
    <Card
      className="text-center sticky-bottom footer-body"
      style={{ backgroundColor: "#212529", color: "white" }}
    >
      <Card.Body>
        <Card.Title className="playfair" style={{ fontSize: "30px" }}>
          Create a curated roll of your favourite movies, today.
        </Card.Title>
        <Card.Text className="lato" style={{ fontSize: "20px" }}>
          API Credits: TMDB API Logo
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <a href="https://github.com/disha9112/Cineroll">
          <FaGithub className="footer-icon" size={30} />
        </a>
        <a href="https://www.linkedin.com/in/disha9112/">
          <FaLinkedin className="footer-icon" size={30} />
        </a>
        <a href="https://www.instagram.com/_disha291_/">
          <FaInstagram className="footer-icon" size={30} />
        </a>
      </Card.Body>
    </Card>
  );
}

export default Footer;
