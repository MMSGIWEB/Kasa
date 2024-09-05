import React from "react";
import Card from "./Cards";
import logts from "../datas/logements.json";


function Logements() {
    console.log(logts.cover)
    return (
        <div className="cardsContainer">
            {logts.map((logt) => {
                return (
                    <article key={logt.id}>

                        <Card cardLink={'#'} img={logts.cover} title={logts.title} />
                    </article>
                )
            })}

        </div>
    )
}

export default Logements;