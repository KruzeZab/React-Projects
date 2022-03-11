import React, { useState, useReducer, useContext } from 'react';
import TodosContext from '../../contexts/todoContext';
import todosReducer from '../../reducers/todosReducer';

import Modal from '../Modal';

const AddTodo = () => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const { addTodoItem } = useContext(TodosContext);

  const [state, dispatch] = useReducer(todosReducer);

  const handleOpen = () => {
    setOpen(false);
  };

  const addTodo = () => {
    setOpen(true);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setOpen(false);
    const item = { id: Math.floor(Math.random() * 1000), title };
    addTodoItem(item);
    setTitle('');
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
    <div className="mb-3 d-flex justify-content-end">
      <button className="btn btn-primary" onClick={addTodo}>
        Add Todo
      </button>

      <Modal
        open={open}
        handleOpen={handleOpen}
        title="Add a Todo Item"
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

export default AddTodo;
