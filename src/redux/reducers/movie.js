import { ADD_MOVIE } from "../action-types";

import { v4 as uuidv4 } from "uuid";

const initialState = {
  movies: [],
};

export const movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_MOVIE:
      const newMovie = {
        id: uuidv4(),
        ...payload,
      };
      const addedMovie = [...state.movies, newMovie];

      return {
        ...state,
        movies: addedMovie,
      };
    default:
      return state;
  }
};
