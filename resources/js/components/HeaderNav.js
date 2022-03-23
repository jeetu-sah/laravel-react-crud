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
                <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                    <Link className="navbar-brand" to="/">
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
                                <Link className="nav-link" to='/'>
                                    Employee List
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/employee/create">
                                    Create Employee
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/employee/delete">
                                    Delete Employee
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Pricing
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    id="navbarDropdownMenuLink"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    Dropdown link
                                </a>
                                <div
                                    className="dropdown-menu"
                                    aria-labelledby="navbarDropdownMenuLink"
                                >
                                    <a className="dropdown-item" href="#">
                                        Action
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        Another action
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        Something else here
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default HeaderNav;
