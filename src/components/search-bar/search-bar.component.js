import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function SearchBar() {
  const [query, setQuery] = useState("");

  function handleQuery(event) {
    setQuery(event.target.value);
  }

  return (
    <Form className="text-center p-5">
      <Form.Label
        className="playfair"
        style={{ fontSize: "40px", color: "white", marginTop: "20px" }}
      >
        Begin typing to search for a movie...
      </Form.Label>
      <Form.Group
        className="d-flex justify-content-center mb-3"
        controlId="formBasicEmail"
      >
        <Form.Control
          className="lato"
          style={{ width: "75%" }}
          type="email"
          placeholder="Enter movie title"
          value={query}
          onChange={handleQuery}
        />
        <Button variant="primary playfair " type="submit">
          Submit
        </Button>
      </Form.Group>
    </Form>
  );
}

export default SearchBar;
