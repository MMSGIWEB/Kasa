import React from "react";
import Collapse from "./Collapse";
import appts from "../datas/logements.json"

function ApptInfo({title, location, userName, userPic, star, description, equipements}) {
    //ici j'utilise le useState pour stocker les données appts
    return (
        <>
            <section className="infoContent">
                <div className="infoHeader">
                    <div className="titleContent">
                        <div className="titles">
                            <h1>{title}</h1>
                            <p>{location}</p>
                        </div>
                        <div className="tags">
                            {/* function avec le nombre de tags => réf cours 'débutes avec react'*/}
                        </div>
                    </div>
                    <div className="userContent">
                        <div className="userInfo">
                            <p className="userName">{userName}</p>
                            <div className="userPic">
                                <img src={userPic} alt="userPicture" />
                            </div>
                        </div>
                        <div className="rating">
                            <span className="rate">{star}</span>
                        </div>
                    </div>
                </div>
                {/* ici appts.map */}
                <div className="details">
                    <Collapse title={'Description'} content={description} />
                    <Collapse title={'Équipements'} content={equipements} />
                </div>
            </section>
        </>
    )

}

export default ApptInfo
