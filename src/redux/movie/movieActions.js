import { SET_MOVIES, SELECTED_MOVIE, REMOVE_MOVIE } from "./movieTypes";

// action creator functions
export const setMovies = (movies) => {
  return {
    type: SET_MOVIES,
    payload: movies,
  };
};

export const selectedMovie = (movie) => {
  return {
    type: SELECTED_MOVIE,
    payload: movie,
  };
};
