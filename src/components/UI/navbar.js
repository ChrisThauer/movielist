import React from 'react';
import { NavLink } from 'react-router-dom';

const navbar = (props) => (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <NavLink className="navbar-brand" to="/">MovieList</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/movielist">Your List</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/movielist/new">Add a Movie</NavLink>
            </li>
            <li className="nav-item">
              {props.user ?
                <button onClick={props.logout} className="btn btn-secondary">Log Out</button>
                :
                <button onClick={props.login} className="btn btn-secondary">Log In</button>
              }
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
;

export default navbar;