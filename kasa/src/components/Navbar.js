import React from "react";
import logo from "../assets/images/logo/logo.png"
import { NavLink } from "react-router-dom";

function Navbar() {

    return (
        <header className="navbar">
            <div className="logo">
                <img src={logo} alt="logo kasa" />
            </div>
            <nav className="navigation" >
                <NavLink to="/">
                    <div className="index" >Accueil</div>
                </NavLink>
                <NavLink to="/about">
                    <div className="about" >A Propos</div>
                </NavLink>
            </nav>
        </header>
    )
}

export default Navbar;