import React from "react";
import appts from "../datas/logements.json"

function Slideshow() {
    function nextPic() {
        appts.forEach(appt => {
            let pictures = appt.pictures
            console.log(pictures.length)

            for (let i = 0; i < pictures.length; i++) {
                const pic = pictures[i];

                if (pic === pictures - 1) {
                    pic = 0
                    return (
                        <img key={appt.id} src={appt.pic} alt={appt.title} />
                    )
                }else {
                    pic++
                    return (
                        <img key={appt.id} src={appt.pic} alt={appt.title} />

                    )
                }
            }
        });
    }

    function prevPic() {
        appts.forEach(appt => {
            let pictures = appt.pictures
            console.log(pictures.length)

            for (let i = 0; i < pictures.length; i++) {
                const pic = pictures[i];

                if (pic === pictures - 1) {
                    pic = 0
                    return (
                        <img key={appt.id} src={appt.pic} alt={appt.title} />
                    )
                }
            }
        });
    }

    return (
        <>
            <div className="infoBanner">
                {appts.map((appt) => {
                    return (
                        <img key={appt.id} src={appt.pictures} alt={appt.title} />
                    )
                })}
                <button className="arrowLeft arrow">
                    <i className="fa-solid fa-chevron-left"></i>
                </button>
                <button className="arrowRight arrow" onClick={nextPic}>
                    <i className="fa-solid fa-chevron-right"></i>
                </button>
            </div>

        </>
    )
}

export default Slideshow