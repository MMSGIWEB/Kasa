import React, { useState } from "react";

function Collapse({ title, content }) {
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
                    <div className="slideDown" onClick={openDescrip}>
                        {/* les chevrons se remplacent selon l'état */}
                        {isOpened ? (<i className="fa-solid fa-chevron-up" ></i>) 
                        : (<i className="fa-solid fa-chevron-down" ></i>)}
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