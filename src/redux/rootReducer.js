import { combineReducers } from "redux";
import { allMoviesReducer, selectedMovieReducer } from "./movie/movieReducers";
import { addListMovie, removeListMovie } from "./watch-list/watchListActions";
import { allMoviesListReducer } from "./watch-list/watchListReducers";

const rootReducer = combineReducers({
  allMovies: allMoviesReducer,
  selectedMovie: selectedMovieReducer,
  allListMovies: allMoviesListReducer,
  addMovie: addListMovie,
  removeMovie: removeListMovie,
});

export default rootReducer;
