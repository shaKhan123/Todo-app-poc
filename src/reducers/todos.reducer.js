import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  CLEAR_TODO,
} from "../actions/actions";

import uuid from "uuid/v4";

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { id: uuid(), task: action.task, completed: false }];
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case CLEAR_TODO:
      return (state = []);
    default:
      return state;
  }
};

export default reducer;
