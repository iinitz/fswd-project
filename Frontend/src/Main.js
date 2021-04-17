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
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
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
                                <div className="search-field">
                                    <input type="search" className="search-input" placeholder="Seach for products.." />
                                </div>
                            </div>

                            <div className="header-icon-box">
                                <Link to="/" aria-label="shopping cart" className="shopping-cart-box">
                                    <img src={cart} alt="" height="100%" />
                                </Link>
                                <div className="header-icon">
                                    <img src={user} alt="" height="90%" />
                                </div>
                                <Link to="/login" className="user-list">
                                    <h5>Login</h5>
                                </Link>
                                <span>|</span>
                                <Link to="/register" className="user-list">
                                    <h5>Register</h5>
                                </Link>
                                {/* <ul className="header-icon-wrapper">
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
                                </ul> */}
                            </div>
                        </div>
                    </div>

                    <div className="header-menu">
                        <ul className="header-menu-container">
                            <Link to="/" className="catagory-menu">
                                <li>New</li>
                            </Link>
                            <Link to="/" className="catagory-menu">
                                <li>Sofas</li>
                            </Link>
                            <Link to="/" className="catagory-menu">
                                <li>Chairs</li>
                            </Link>
                            <Link to="/" className="catagory-menu">
                                <li>Tables</li>
                            </Link>
                            <Link to="/" className="catagory-menu">
                                <li>Beds</li>
                            </Link>
                            <Link to="/" className="catagory-menu">
                                <li>Wardrobes</li>
                            </Link>
                            <Link to="/" className="catagory-menu">
                                <li>Drawer & Shelf</li>
                            </Link>
                            <Link to="/" className="catagory-menu">
                                <li>Lighting</li>
                            </Link>
                            <Link to="/" className="catagory-menu">
                                <li>Garden</li>
                            </Link>
                            <Link to="/" className="catagory-menu">
                                <li>Children's furniture</li>
                            </Link>
                        </ul>
                    </div>
                </nav>

                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/register">
                        <Register />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>

                <Footer />
            </Router>
        </>
    );
}

export default Main;
