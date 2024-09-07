import React from "react";
import Card from "./Card";
import appts from "../datas/logements.json";

function Logements() {
    console.log(appts)
    //itération de la liste d'appartements
    return (
        <div className="cardsContainer">
            {appts.map((appt) => {
                return (
                    <article key={appt.id}>
                        <Card cardLink={'#'} img={appt.cover} title={appt.title} />
                    </article>
                )
            })}

        </div>
    )
}

export default Logements;