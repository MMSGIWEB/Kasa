import React from "react";
import { NavLink } from "react-router-dom";
import appts from "../../datas/logements.json"
import { useNavigate, useEffect } from "react";


function Card() {
    const history = useNavigate();

    useEffect(() => {
        const checkIfValidId = (id) => {
            // liste d'identifiants valides
            const validIds = appts.map((appt) => appt.id); // Récupérer les identifiants valides de la liste d'appartements

            // Vérifier si l'ID est présent dans la liste des identifiants valides
            return validIds.includes(id);
        };

        // itération de la liste d'appartements et vérification si l'ID est valide lors du clic sur le lien
        appts.forEach((appt) => {
            const isValidId = checkIfValidId(appt.id);
            const link = document.getElementById(`link-${appt.id}`);

            link.addEventListener("click", () => {
                if (!isValidId) {
                    // Redirection vers "/404"
                    history(`/404`);
                }
            });
        });
    }, []);

    return (
        <>
            {/* itération de la liste d'appartements */}
            {appts.map((appt) => {
                return (
                    <article key={appt.id}>
                        <NavLink to={`/fiche/${appt.id}`} className="cardLink" id={`link-${appt.id}`}>
                            <div className="card">
                                <img src={appt.cover} alt={appt.title} className="cardImg" />
                                <h2 className="cardTitle">{appt.title}</h2>
                            </div>
                        </NavLink>
                    </article>
                );
            })}
        </>
    );
}

export default Card;