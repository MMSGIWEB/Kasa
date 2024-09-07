import React from "react";
import appts from '../datas/logements.json'

function Rating(props) {
    const scaleRating = props.scaleRating

    return (
        <>
            {appts.map((appt) =>
                scaleRating === appt.rating ? <span key={appt.id}><i className="fa-solid fa-star"></i></span> : null
            )}
        </>

    )
}

export default Rating