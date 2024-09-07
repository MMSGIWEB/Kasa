import React from "react";

function Slideshow({img, title}) {
    return (
        <>
            <div className="infoBanner">
                <img src={img} alt={title} />
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