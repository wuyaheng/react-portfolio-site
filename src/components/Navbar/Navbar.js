import React, { Component } from 'react'
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";
import './style.css'

class Navbar extends Component {

    componentDidMount() {
        let sidenav = document.querySelector(".sidenav");
        M.Sidenav.init(sidenav, {});
      }

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
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/portfolio">Portfolio</Link></li>
                        <li><Link to="/resume">Resume</Link></li> 
                        <li><Link to="/blog">Blog</Link></li> 
                    
                    </ul>
            </div>

            
        )
    }
}




export default Navbar;