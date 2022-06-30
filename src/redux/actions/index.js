import {
  SIGN_IN,
  COMPLETE_TODO,
  ADD_TODO,
  REMOVE_TODO,
  EDIT_TODO,
  ADD_MOVIE,
} from "../action-types";

export const SignInAction = (payload) => ({
  type: SIGN_IN,
  payload: payload,
});

export const completeTodo = (payload) => ({
  type: COMPLETE_TODO,
  payload: payload,
});

export const addTodo = (payload) => ({
  type: ADD_TODO,
  payload: payload,
});

export const removeTodo = (payload) => ({
  type: REMOVE_TODO,
  payload: payload,
});

export const addMovie = (payload) => ({
  type: ADD_MOVIE,
  payload: payload,
});

export const editTodo = (payload) => ({
  type: EDIT_TODO,
  payload: payload,
});
