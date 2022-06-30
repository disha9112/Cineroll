import React from "react";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link className="link" to="/">
          <Navbar.Brand className="playfair">Cineroll</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto lato"></Nav>
          <Nav>
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/watchlist">
              Watch List
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
