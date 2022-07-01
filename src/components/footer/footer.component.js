import React from "react";
import Card from "react-bootstrap/Card";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import credit from "../../assets/credit.svg";

function Footer() {
  return (
    <Card
      className="fixed-bottom text-center footer-body"
      style={{ backgroundColor: "#212529", color: "white" }}
    >
      <Card.Body>
        <Card.Text className="lato" style={{ fontSize: "20px" }}>
          API Credits: <img src={credit} alt="tmdb logo" width="60" />
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Footer;
