import React from "react";
import { NavLink } from "react-router-dom";


function Card({ img, title, linkId}) {

    return (
        <NavLink to={"/fiche"} className="cardLink">
            <div className="card">
                <img src={img} alt={title} className="cardImg" />
                <h2 className="cardTitle">{title}</h2>
            </div>
        </NavLink>
    )
}

export default Card;