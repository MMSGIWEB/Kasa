import React from "react";


function Card({ img, title, cardLink }) {
    //+ ne pas oublier "async devant 'function' "
    // let response = await fetch('/src/datas/logements.json')
    // let appts = await response.json
    return (
        <a href={cardLink} className="cardLink">
            <div className="card">
                <img src={img} alt={title} className="cardImg"/>
                <h2 className="cardTitle">{title}title</h2>
            </div>
        </a>
    )
}

export default Card;