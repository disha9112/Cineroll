import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setMovies } from "../../redux/movie/movieActions";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function SearchBar() {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  function handleQuery(event) {
    setQuery(event.target.value);
  }

  async function handleQuerySubmit(event) {
    event.preventDefault();

    const response = await axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=c878fd5c16d0faa5c21cfe9a3eb3c663&query=${query}`
      )
      .catch((error) => {
        console.log("Error: ", error);
      });

    dispatch(setMovies(response.data.results));
  }

  // useEffect(() => {
  //   fetchQueryMovies();
  // }, []);

  return (
    <Form onSubmit={handleQuerySubmit} className="text-center p-5">
      <Form.Label
        className="playfair"
        style={{ fontSize: "35px", color: "white" }}
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
          type="text"
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
