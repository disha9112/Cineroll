import React, { useEffect } from "react";
import axios from "axios";
import { selectedMovie } from "../../redux/movie/movieActions";
import { useParams } from "react-router-dom";
import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";
import "./details.css";
import { Image, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const API_KEY = process.env.REACT_APP_API_KEY;

function Details() {
  const { movieId } = useParams();

  const dispatch = useDispatch();

  async function fetchMovieDetail(id) {
    const response = await axios
      .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
      .catch((error) => {
        console.log("Error: ", error);
      });

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

  return (
    <div>
      {Object.keys(movie).length === 0 ? (
        <div className="details-body">
          <Header />
          <div className="details-body-card">Loading...</div>
          <Footer />
        </div>
      ) : (
        <div className="details-body">
          <Header />
          <div className="details-body-card">
            <Image
              style={{
                objectFit: "cover",
                margin: "20px",
                maxWidth: "19rem",
              }}
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            />
            <Card
              style={{
                textAlign: "center",
                margin: "20px 20px",
                color: "white",
                border: "none",
              }}
            >
              <Card.Body style={{ background: "black" }}>
                <Card.Title className="playfair" style={{ fontSize: "35px" }}>
                  {original_title}
                </Card.Title>
                <div className="details-body-card-header">
                  <Card.Text className="lato">Runtime: {runtime}m </Card.Text>
                  <Card.Text className="lato">
                    Release: {release_date.slice(0, 4)}
                  </Card.Text>
                  <Card.Text className="lato">
                    Rating ⭐: {vote_average}
                  </Card.Text>
                </div>
                <div className="details-body-card-info">
                  <Card.Text className="lato" style={{ fontSize: "20px" }}>
                    {overview}
                  </Card.Text>
                  <Card.Text className="lato" style={{ fontSize: "20px" }}>
                    Genres:{" "}
                    {genres.map(function (genre, idx) {
                      return (
                        <Card.Text key={idx} className="d-inline">
                          {genre.name}{" "}
                        </Card.Text>
                      );
                    })}
                  </Card.Text>
                  <Card.Text className="lato" style={{ fontSize: "20px" }}>
                    Languages:{" "}
                    {spoken_languages.map(function (language, idx) {
                      return (
                        <Card.Text key={idx} className="d-inline">
                          {language.english_name}{" "}
                        </Card.Text>
                      );
                    })}
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default Details;
