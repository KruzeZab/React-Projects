import React, { useState, useContext, useEffect } from 'react';

import TodosContext from '../../contexts/todoContext';
import TodoItem from './TodoItem';

import Modal from '../Modal';

const TodoList = () => {
  const [open, setOpen] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});
  const [title, setTitle] = useState('');
  const { todos, editTodoItem, deleteTodoItem, clearTodoItem } =
    useContext(TodosContext);

  useEffect(() => {
    setTitle(currentTodo.title || '');
  }, [currentTodo]);

  const editTodo = todo => {
    setOpen(true);
    setCurrentTodo(todo);
  };

  const deleteTodo = id => {
    deleteTodoItem(id);
  };

  const clearTodo = () => {
    clearTodoItem();
  };

  const handleOpen = () => {
    setOpen(false);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setOpen(false);
    editTodoItem({ id: currentTodo.id, title });
    setCurrentTodo({});
  };

  const renderActions = (
    <div className="d-flex justify-content-end">
      <button
        type="button"
        className="btn btn-secondary me-2"
        onClick={handleOpen}
      >
        Close
      </button>

      <button type="submit" className="btn btn-primary">
        Add
      </button>
    </div>
  );

  return (
    <div>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
        />
      ))}
      {todos.length > 0 && (
        <button
          onClick={clearTodo}
          className="mt-2 btn w-100 btn-sm btn-danger"
        >
          Clear All
        </button>
      )}

      <Modal
        open={open}
        handleOpen={handleOpen}
        title={`Edit ${currentTodo.title}:`}
      >
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label htmlFor="title">Title:</label>
            <input
              autoFocus
              type="text"
              className="form-control"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </div>
          {renderActions}
        </form>
      </Modal>
    </div>
  );
};

export default TodoList;
