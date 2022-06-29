import {
  ADD_TODO,
  REMOVE_TODO,
  EDIT_TODO,
  COMPLETE_TODO,
  GET_COMPLETE_TODO,
  GET_ACTIVE_TODO,
} from "../action-types";

import { v4 as uuidv4 } from "uuid";

const initialState = {
  todos: [],
};

export const TodoLists = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      const newTodo = {
        id: uuidv4(),
        task: payload,
        complete: false,
      };
      const addedTodo = [...state.todos, newTodo];

      return {
        ...state,
        todos: addedTodo,
      };

    case REMOVE_TODO:
      const filterTodo = state.todos.filter((res) => res.id !== payload);

      return {
        ...state,
        todos: filterTodo,
      };

    case EDIT_TODO:
      const editTodo = state.todos.map((res) => {
        if (res.id === payload.id) {
          return { ...res, task: payload.editTask };
        }
        return res;
      });
      return {
        ...state,
        todos: editTodo,
      };

    case COMPLETE_TODO:
      const toggleTodo = state.todos.map((todo) =>
        todo.id === payload.id
          ? { ...payload, complete: !payload.complete }
          : todo
      );
      return {
        ...state,
        todos: toggleTodo,
      };

    default:
      return state;
  }
};
