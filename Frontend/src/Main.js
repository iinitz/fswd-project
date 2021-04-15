import React from "react";
import logo from './img/logo.png';
import cart from './img/shopping-cart.png';
import user from './img/user.png';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";

import './Main.css';

import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';

function Main() {
    return (
        <>
            <Router>
                <nav className="Navbar-nav">
                    <div className="header-top">
                        <div className="header-top-container">
                            <Link to="/" className="logo-box">
                                <div className="logo-img">
                                    <img src={logo} alt="" height="100%" />
                                </div>
                            </Link>

                            <div className="search-box">
                                {/* <div className="search-wrapper"> */}
                                    <div className="search-field">
                                        <input type="search" className="search-input" placeholder="Seach for products.." />
                                    </div>
                                {/* </div> */}
                            </div>

                            <div className="header-icon-box">
                                <ul className="header-icon-wrapper">
                                    <Link to="/" aria-label="shopping cart" className="shopping-cart-box">
                                        <li className="header-icon">
                                            <img src={cart} alt="" height="100%" />
                                        </li>
                                    </Link>
                                    <li className="header-icon">
                                        <img src={user} alt="" height="100%" />
                                    </li>
                                    <Link to="/login" className="user-list">
                                        <li>Login</li>
                                    </Link>
                                    <span>|</span>
                                    <Link to="/register" className="user-list">
                                        <li>Register</li>
                                    </Link>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="header-menu">
                        <Link to="/" className="user-list">
                            <div className="catagory-menu">aaaaa</div>
                        </Link>
                        <div className="catagory-menu">dddddd</div>
                        <div className="catagory-menu">ffffff</div>
                        <div className="catagory-menu">eeeeee</div>
                    </div>
                </nav>

                <Switch>
                    <Route path="/">
                        <Home />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/register">
                        <Register />
                    </Route>
                </Switch>

            </Router>
        </>
    );
}

export default Main;
