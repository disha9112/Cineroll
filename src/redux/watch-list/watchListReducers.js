import {
  SET_LIST,
  ADD_LIST_MOVIE,
  REMOVE_LIST_MOVIE,
} from "./watchListTypes.js";

// defining state
const initialState = {
  watchList: [],
  addedMovie: [],
  removedMovie: [],
};

// defining reducers
export const allMoviesListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIST:
      return {
        ...state,
        watchList: action.payload,
      };

    default:
      return state;
  }
};

export const addMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIST_MOVIE:
      return {
        ...state,
        addedMovie: action.payload,
        watchList: state.watchList.push(action.payload),
      };

    default:
      return state;
  }
};

export const removeMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_LIST_MOVIE:
      return {
        ...state,
        removedMovie: action.payload,
        watchList: state.watchList.filter((m) => m.id !== action.payload.id),
      };

    default:
      return state;
  }
};
