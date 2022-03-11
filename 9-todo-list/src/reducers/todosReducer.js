import {
  ADD_TODO,
  EDIT_TODO,
  DELETE_TODO,
  CLEAR_TODO,
} from '../constants';

const todosReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id ? action.payload : todo
        ),
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload),
      };

    case CLEAR_TODO:
      return { ...state, todos: [] };

    default:
      return state;
  }
};

export default todosReducer;
