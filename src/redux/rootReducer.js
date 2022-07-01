import { combineReducers } from "redux";
import { allMoviesReducer, selectedMovieReducer } from "./movie/movieReducers";

const rootReducer = combineReducers({
  allMovies: allMoviesReducer,
  selectedMovie: selectedMovieReducer,
});

export default rootReducer;
