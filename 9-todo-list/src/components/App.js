import React from 'react';

import { TodosProvider } from '../contexts/todoContext';

import Navbar from './Navbar';
import TodoContainer from './todos/TodoContainer';

const App = () => {
  return (
    <TodosProvider>
      <Navbar />
      <div className="container">
        <TodoContainer />
      </div>
    </TodosProvider>
  );
};

export default App;
