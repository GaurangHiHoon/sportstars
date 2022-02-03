import React, { Component } from "react";

import { Link } from "react-router-dom";


class Navbar extends Component {

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to="/stars">
            SportStar
          </Link>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active " to="/stars">
                All
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/stars/Cricket">
                Cricket
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/stars/Football">
                FootBall
              </Link>
            </li>
          </ul>
        </nav>
        <div className="content">
         
        </div>
      </React.Fragment>
    );
  }
}

export default Navbar;
