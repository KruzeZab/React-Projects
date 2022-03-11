import { createContext, useReducer } from 'react';

import {
  ADD_TODO,
  EDIT_TODO,
  DELETE_TODO,
  CLEAR_TODO,
} from '../constants';
import todosReducer from '../reducers/todosReducer';

const initialState = {
  todos: [],
};

const TodosContext = createContext(initialState);

export const TodosProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todosReducer, initialState);

  const addTodoItem = todo => {
    dispatch({ type: ADD_TODO, payload: todo });
  };

  const editTodoItem = todo => {
    dispatch({ type: EDIT_TODO, payload: todo });
  };

  const deleteTodoItem = id => {
    dispatch({ type: DELETE_TODO, payload: id });
  };

  const clearTodoItem = () => {
    dispatch({ type: CLEAR_TODO });
  };

  return (
    <TodosContext.Provider
      value={{
        todos: state.todos,
        currentTodo: state.currentTodo,
        addTodoItem,
        editTodoItem,
        deleteTodoItem,
        clearTodoItem,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContext;
