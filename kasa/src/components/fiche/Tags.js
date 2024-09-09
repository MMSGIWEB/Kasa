import React from "react";
import appts from "../../datas/logements.json"


function Tags({nom}) {
    return (
        <>
        <p className="tag">{nom}</p>
        </>
    )
}

export default Tags