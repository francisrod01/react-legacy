import React from 'react';

/* eslint-disable-next-line */
const Navigation = props => (
  <div className="header">
    <ul className="nav nav-pills justify-content-end">
      <li className="nav-item">
        <a className="nav-link active" href="#home">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#about">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#contact">Contact</a>
      </li>
    </ul>
    <h3 className="text-muted">legacy</h3>
  </div>
);

export default Navigation;
