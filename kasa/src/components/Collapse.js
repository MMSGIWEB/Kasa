import React, { useState } from "react";

function Collapse({title, content}) {
    //pour ouvrir le collapse
    const [isOpened, setClosing] = useState(false)
    //fonction qui ouvre et ferme le descriptif
    const openDescrip = () => {
        //setClsing sera l'inverse de isOpened donc true
        setClosing(!isOpened)
    }

    return (
        <>
            <article className="collapseContent">
                <div className="collapseTitle">
                    <h2>{title}</h2>
                    <div className="slideDown">
                        {/* utiliser rotate? */}
                        <i className="fa-solid fa-chevron-up" onClick={openDescrip}></i>
                    </div>
                </div>
               {isOpened && <div className="descrip">
                    {/* description sera visible si true */}
                    <div className="descripContent">{content}</div>
                </div>}
            </article>
        </>
    )
}

export default Collapse