import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import './Dropdown.css';
import menuItems from './menuItems';

const Dropdown = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(click => !click);

  return (
    <ul
      onClick={handleClick}
      className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
    >
      {menuItems.map((item, index) => (
        <li key={index}>
          <Link
            to={item.path}
            className={item.cName}
            onClick={() => setClick(false)}
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
