import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './style.css'

class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="navbar-fixed">
                    <nav className="nav-wrapper #000000 black">
                        <div className="container">
                            <a href="/" className="brand-logo" id="logo">Phoebe Yaheng Wu</a>
                            <a href="/" className="sidenav-trigger" data-target="mobile-links">
                                <i className="material-icons">menu</i>
                            </a>
                            <ul className="right hide-on-med-and-down">
                                <li className="myNav"><Link to="/">Home</Link></li>
                                <li className="myNav"><Link to="/portfolio">Portfolio</Link></li>
                                <li className="myNav"><Link to="/resume">Resume</Link></li> 
                                <li className="myNav"><Link to="/blog">Blog</Link></li> 
                            </ul>
                        </div>
                    </nav>
                    </div> 

                    <ul className="sidenav" id="mobile-links">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="portfolio.html">Portfolio</a></li>
                        <li><a href="resume.html">Resume</a></li> 
                        <li><a href="blog.html">Blog</a></li> 
                    
                    </ul>
            </div>
        )
    }
}


export default Navbar;