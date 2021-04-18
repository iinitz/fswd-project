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
import Swiper from 'react-id-swiper';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'swiper/swiper-bundle.css';

import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login';
import Register from './Components/Register';

import Navigation from './components/Navigation'

function App() {
    return (
        <>
        <div><Navigation/></div>
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
                                <Link to="/" title="shopping cart" className="header-shopping-cart-box">
                                    <img src={cart} alt="" height="100%" />
                                </Link>
                                <div className="header-user-icon">
                                    <img src={user} alt="" height="90%" />
                                </div>
                                <div className="header-user-login">
                                    <Link to="/login" className="user-list">
                                        <h5>Login</h5>
                                    </Link>
                                    <span>|</span>
                                    <Link to="/register" className="user-list">
                                        <h5>Register</h5>
                                    </Link>
                                </div>
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
                
            </Router>
        </>
    );
}

export default App;
