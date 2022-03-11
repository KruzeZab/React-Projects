import React from 'react';

const TodoItem = ({ todo, editTodo, deleteTodo }) => {
  return (
    <div className="card mb-3">
      <div className="card-body p-2 d-flex align-items-center justify-content-between">
        {todo.title}
        <div className="actions">
          <button
            className="btn btn-primary me-2"
            onClick={() => editTodo(todo)}
          >
            Edit
          </button>
          <button
            className="btn btn-danger"
            onClick={() => deleteTodo(todo.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
