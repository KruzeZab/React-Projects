import React, { useState } from 'react';

import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count => count + 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  const decrementCount = () => {
    if (count <= 0) return;
    setCount(count => count - 1);
  };

  return (
    <div className="counter">
      <p className="counter__heading">Counter</p>
      <h1 className="counter__number">{count}</h1>
      <div className="counter__button-group">
        <button className="btn" onClick={decrementCount}>
          Decrease
        </button>
        <button className="btn" onClick={resetCount}>
          Reset
        </button>
        <button className="btn" onClick={incrementCount}>
          Increment
        </button>
      </div>
    </div>
  );
};

export default Counter;
