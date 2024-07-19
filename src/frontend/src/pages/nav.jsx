import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <a className="navbar-brand" href="#">Flask Market</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/market">Market</a>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" style={{ color: 'lawngreen', fontWeight: 'bold' }}>Budget:</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/profile">Welcome</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/logout">Logout</a>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/login">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/register">Register</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;