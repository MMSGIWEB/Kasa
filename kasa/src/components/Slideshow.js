import React from "react";
import appts from "../datas/logements.json"
import { useParams } from "react-router-dom";

function Slideshow() {
    //récup de l'id de la fiche concernée
    const { id } = useParams(0)
    //fait correspondre l'id à celui du logement
    const logement = appts.find((appt) => appt.id === id)

    //récup des images pour chaque fiche logement
    const pictures = logement?.pictures.map((picture, i) => {
        return (
            <img key={i} src={picture} alt="image du logement" />
        )
    })

    return (
        <>
            <div className="infoBanner">
                {pictures}
                <button className="arrowLeft arrow">
                    <i className="fa-solid fa-chevron-left"></i>
                </button>
                <button className="arrowRight arrow">
                    <i className="fa-solid fa-chevron-right"></i>
                </button>
            </div>

        </>
    )
}

export default Slideshow