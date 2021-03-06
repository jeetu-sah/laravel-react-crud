import React from "react";
import ReactDOM from "react-dom";
import {Link} from 'react-router-dom';


function HeaderNav() {
    return (
      <>
        <div className="container mt-3 mb-3">
          <div className="row">
            <h2>Laravel CRUD</h2>
          </div>
          <nav
            className="navbar navbar-expand-lg navbar-light bg-primary"
            style={{ color: "white" }}
          >
            <Link className="navbar-brand" to="/" style={{ color: "#fcfafa" }}>
              Home
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link
                    className="nav-link"
                    to="/"
                    style={{ color: "#fcfafa" }}
                  >
                    Employee List
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/employee/create"
                    style={{ color: "#fcfafa" }}
                  >
                    Create Employee
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </>
    );
}

export default HeaderNav;
