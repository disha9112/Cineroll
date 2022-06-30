import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function SearchBar() {
  return (
    <Form>
      <Form.Group className="text-center mb-3" controlId="formBasicEmail">
        <Form.Label
          style={{ fontSize: "50px", color: "white", marginTop: "20px" }}
        >
          Begin typing to search for a desired movie...
        </Form.Label>
        <Form.Control type="email" placeholder="Enter movie title" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default SearchBar;
