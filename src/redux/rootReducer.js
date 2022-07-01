import { combineReducers } from "redux";
import { allMoviesReducer, selectedMovieReducer } from "./movie/movieReducers";
import {
  allMoviesListReducer,
  addMovieReducer,
  removeMovieReducer,
} from "./watch-list/watchListReducers";

const rootReducer = combineReducers({
  allMovies: allMoviesReducer,
  selectedMovie: selectedMovieReducer,
  allListMovies: allMoviesListReducer,
  addMovie: addMovieReducer,
  removeMovie: removeMovieReducer,
});

export default rootReducer;
