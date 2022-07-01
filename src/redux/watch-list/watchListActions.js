import { SET_LIST, ADD_LIST_MOVIE, REMOVE_LIST_MOVIE } from "./watchListTypes";

// action creator functions
export const setList = (watchList) => {
  return {
    type: SET_LIST,
    payload: watchList,
  };
};

export const addListMovie = (movie) => {
  return {
    type: ADD_LIST_MOVIE,
    payload: movie,
  };
};

export const removeListMovie = (movie) => {
  return {
    type: REMOVE_LIST_MOVIE,
    payload: movie,
  };
};
