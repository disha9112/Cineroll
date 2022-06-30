import React, { useEffect } from "react";
import axios from "axios";
import { selectedMovie } from "../../redux/movie/movieActions";
import { useParams } from "react-router-dom";
import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";
import "./details.css";
import { Image, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

function Details() {
  const { movieId } = useParams();
  console.log(movieId);

  const dispatch = useDispatch();

  async function fetchMovieDetail(id) {
    const response = await axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=c878fd5c16d0faa5c21cfe9a3eb3c663`
      )
      .catch((error) => {
        console.log("Error: ", error);
      });

    console.log(response.data);

    dispatch(selectedMovie(response.data));
  }

  let movie = useSelector((state) => state.selectedMovie.movie);

  const {
    poster_path,
    original_title,
    overview,
    release_date,
    vote_average,
    runtime,
    genres,
    spoken_languages,
  } = movie;

  useEffect(() => {
    if (movieId) {
      fetchMovieDetail(movieId);
    }
  }, [movieId]);

  const genres_string = JSON.stringify(genres);
  const languages_string = JSON.stringify(spoken_languages);

  return (
    <div className="details-body">
      <Header />
      <div className="details-body-card">
        <Image
          style={{
            objectFit: "cover",
            margin: "20px 100px",
            maxWidth: "320.8px",
            maxHeight: "476px",
          }}
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        />
        <Card
          style={{
            textAlign: "center",
            margin: "20px 100px",
            color: "white",
            border: "none",
          }}
        >
          <Card.Body style={{ background: "black" }}>
            <Card.Title style={{ fontSize: "35px" }}>
              {original_title}
            </Card.Title>
            <div className="details-body-card-header">
              <Card.Text>Runtime: {runtime}m </Card.Text>
              <Card.Text>Release: {release_date}</Card.Text>
              <Card.Text>Rating ⭐: {vote_average}</Card.Text>
            </div>
            <div className="details-body-card-info">
              <Card.Text style={{ fontSize: "20px" }}>{overview}</Card.Text>
              <Card.Text style={{ fontSize: "20px" }}>
                Genres: {genres_string}
              </Card.Text>
              <Card.Text style={{ fontSize: "20px" }}>
                Languages: {languages_string}
              </Card.Text>
            </div>
            <Button variant="primary m-5">Add to Watch List</Button>
          </Card.Body>
        </Card>
      </div>
      <Footer />
    </div>
  );
}

export default Details;
