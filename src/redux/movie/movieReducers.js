import { SET_MOVIES, SELECTED_MOVIE, REMOVE_MOVIE } from "./movieTypes";

// defining state
const initialState = {
  movies: [],
};

// defining reducers
export const allMoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };

    default:
      return state;
  }
};

export const selectedMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_MOVIE:
      return {
        ...state,
        movie: action.payload,
      };

    case REMOVE_MOVIE:
      return {};

    default:
      return state;
  }
};
