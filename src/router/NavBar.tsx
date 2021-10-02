import React from 'react';
import { Link } from 'react-router-dom';
import { FLEX_EXAMPLES } from 'config/constants';

import './navbar.css';

const NavBar = () => (
  <nav className="navbar">
    <ul>
      {FLEX_EXAMPLES.map(example => (
        <li key={example.name} className="nav-item">
          <Link to={`/${example.name}`}>{example.name.replaceAll('-', ' ')}</Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default NavBar;