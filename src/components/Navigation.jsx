import React from 'react';
import { Link } from 'react-router-dom';

/* eslint-disable-next-line */
const Navigation = props => (
  <div className="header">
    <ul className="nav nav-pills justify-content-end">
      <li className="nav-item">
        <Link className="nav-link active" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact">Contact</Link>
      </li>
    </ul>
    <h3 className="text-muted">legacy</h3>
  </div>
);

export default Navigation;
