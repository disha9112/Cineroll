import React, { useEffect } from "react";
import axios from "axios";
import { selectedMovie, removeMovie } from "../../redux/movie/movieActions";
import { useParams } from "react-router-dom";
import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";
import "./details.css";
import { Image, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

function Details() {
  // const { movieId } = useParams();
  // console.log(movieId);

  // let movie = useSelector((state) => state.movie);
  // console.log(movie);

  // const {
  //   poster_path,
  //   original_title,
  //   overview,
  //   release_date,
  //   vote_average,
  //   runtime,
  // } = movie;

  // const dispatch = useDispatch();

  // async function fetchMovieDetail(id) {
  //   const response = await axios
  //     .get(
  //       `https://api.themoviedb.org/3/movie/${id}?api_key=c878fd5c16d0faa5c21cfe9a3eb3c663`
  //     )
  //     .catch((error) => console.log("Error: ", error));

  //   dispatch(selectedMovie(response.data));
  // }

  // useEffect(() => {
  //   if (movieId) {
  //     fetchMovieDetail(movieId);
  //   }
  //   return () => {
  //     dispatch(removeMovie());
  //   };
  // }, [movieId]);

  return (
    <div className="details-body">
      <Header />
      <div className="details-body-card">
        <Image
          style={{
            objectFit: "cover",
            margin: "20px 20px",
            maxWidth: "320.8px",
            maxHeight: "476px",
          }}
          src={`https://image.tmdb.org/t/p/w500/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg`}
        />
        <Card
          style={{
            textAlign: "center",
            margin: "20px 50px",
            color: "white",
            border: "none",
          }}
        >
          <Card.Body style={{ background: "black" }}>
            <Card.Title style={{ fontSize: "35px" }}>original_title</Card.Title>
            <div className="details-body-card-header">
              <Card.Text>Runtime: runtimem </Card.Text>
              <Card.Text>Year: release_date.slice(0, 4)</Card.Text>
              <Card.Text>IMDB Rating ⭐: vote_average</Card.Text>
            </div>
            <div className="details-body-card-info">
              <Card.Text style={{ fontSize: "20px" }}>overview</Card.Text>
              <Card.Text style={{ fontSize: "20px" }}>
                Genres: Action, Thriller, Drama{" "}
              </Card.Text>
              <Card.Text style={{ fontSize: "20px" }}>
                Languages: English, French
              </Card.Text>
            </div>
            <Button variant="primary">Add to Watch List</Button>
          </Card.Body>
        </Card>
      </div>
      <Footer />
    </div>
  );
}

export default Details;
