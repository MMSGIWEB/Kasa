import React from "react";

function Collapse({title, content}) {
    //pour ouvrir le collapse
    // const [isClosed, openCollapse] = useState(false)
    //pour le fermer [v actuelle, v permettant de la modif]
    // const [isOpen, closeCollapse] = useState(false)
// revoir L15, car début
    return (
        <>
            <article className="collapseContent">
                <div className="collapseTitle">
                    <h2>{title}</h2>
                    <div className="slideDown">
                        <i className="fa-solid fa-chevron-up"></i>
                        {/* <i className="fa-solid fa-chevron-up" onClick={() => openCollapse(false)}></i> */}
                        <i className="fa-solid fa-chevron-down"></i>
                    </div>
                </div>
                {/* utiliser le map ou useState? */}
                <div className="descrip">
                    <div className="descripContent">{content}</div>
                </div>
            </article>
        </>
    )
}

export default Collapse