import React from "react";
import logo from "../assets/images/logo/logo.png"

function Navbar() {
    return (
        <header className="navbar">
            <div className="logo">
                <img src={logo} alt="logo kasa"/>
            </div>
            <nav className="navigation" >
                <a className="index" href="#">Accueil</a>
                <a className="about" href="#">A Propos</a>
            </nav>
        </header>
    )
}

export default Navbar;