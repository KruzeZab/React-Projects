import React, { useState } from 'react';

import './Temperature.css';

const Temperature = () => {
  const [temp, setTemp] = useState(0);

  const decTemp = () => {
    setTemp(temp => temp - 1);
  };

  const incTemp = () => {
    setTemp(temp => temp + 1);
  };

  const setTemperature = () => {
    if (temp <= 10) {
      return 'bg-white';
    } else if (temp <= 40) {
      return 'bg-orange';
    } else {
      return 'bg-red';
    }
  };

  return (
    <div className="temperature">
      <div className={`temperature__bar ${setTemperature()}`}>
        {temp}
      </div>
      <div className="temperature__controller">
        <button className="btn" onClick={decTemp}>
          -
        </button>
        <button className="btn" onClick={incTemp}>
          +
        </button>
      </div>
    </div>
  );
};

export default Temperature;
