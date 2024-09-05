import React from "react";
import Card from "./Cards";
import logts from "../datas/logements.json";

function Logements() {
    console.log(logts)
    logts.forEach(logt => {})
    return (
        <div className="cardsContainer">
            {logts.map((logt) => {
                return (
                    <article key={logt.id}>
                        <Card cardLink={'#'} img={logt.cover} title={logt.title} />
                    </article>
                )
            })}

        </div>
    )
}

export default Logements;