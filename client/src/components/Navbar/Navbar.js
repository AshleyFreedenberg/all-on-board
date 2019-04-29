import React, { Component } from "react";
import { Link } from 'react-router-dom';
import AuthService from '../AuthService';
import "./style.css";

class Navbar extends Component {
    constructor() {
        super();
        this.Auth = new AuthService();
    }

    showNavigation = () => {
        if (this.Auth.loggedIn()) {
            return (
                <ul className="navbar-nav">
                    <li className="nav-item text-dark">
                        <Link className="nav-link" to="/profile">Profile</Link>
                    </li>
                    <li className="nav-item text-dark">
                        {/* this is not using the Link component to logout or user and then refresh the application to the start */}
                        <a className="nav-link" href="/" onClick={() => this.Auth.logout()}>Logout</a>
                    </li>
                </ul>
            );
        } else {
            return (
                
                    <ul className="navbar-nav">
                        <li className="nav-item text-dark">
                            <Link className="nav-link" to="/signup">Signup</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark" to="/login">Login</Link>
                        </li>
                    </ul>
                
            );
        }
    };

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark text-dark bg-light">
                <div className="container">
                    <Link className="navbar-brand text-dark" to="/">All On Board</Link>
                    <button className="navbar-toggler text-dark" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse text-dark" id="navbarNav">
                        <ul className="navbar-nav mr-auto text-dark">
                        </ul>
                        {this.showNavigation()}
                    </div>
                </div>
            </nav>
        )
    }
}


export default Navbar;