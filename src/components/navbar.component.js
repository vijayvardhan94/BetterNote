import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
        <Link to="/" className="navbar-brand">BetterNote</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Notes</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Create a Note</Link>
          </li>
          <li className="navbar-item">
          <Link to="/topics" className="nav-link">Create a Topic</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}