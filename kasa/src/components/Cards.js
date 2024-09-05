import React from "react";
import logts from "../datas/logements.json"
import Logements from "./Logements";


function Card({ img, title, cardLink }) {

    return (
        <a href={cardLink} className="cardLink">
            <div className="card">
                <img src={img} alt={title} className="cardImg" />
                <h2 className="cardTitle">{title}</h2>
            </div>
        </a>
    )
}

export default Card;