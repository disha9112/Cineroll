import React from "react";
import Button from "react-bootstrap/Button";
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
        <Card.Title>
          Create a curated roll of your favourite movies, today.
        </Card.Title>
        <Card.Text>Cineroll All Rights Reserved © 2022</Card.Text>
      </Card.Body>
      <Card.Body>
        <FaGithub className="footer-icon" size={30} />
        <FaLinkedin className="footer-icon" size={30} />
        <FaInstagram className="footer-icon" size={30} />
      </Card.Body>
    </Card>
  );
}

export default Footer;
