import React from "react";
import Collapse from "./Collapse";
import appts from "../datas/logements.json"

function ApptInfo({ apptTitle, location, userName, userPicture }) {
    return (
        <>
            <section className="infoContent">
                <div className="infoHeader">
                    <div className="titleContent">
                        <div className="titles">
                            <h1>{apptTitle}</h1>
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
                                <img src={userPicture} alt="userPicture" />
                            </div>
                        </div>
                        <div className="rating">
                            {/* function avec le nombre de tags => réf cours 'débutes avec react'*/}
                        </div>
                    </div>
                </div>
                <div className="details">
                    <Collapse title={'Description'} content={appts.description} />
                    <Collapse title={'Équipements'} content={appts.equipments} />
                </div>
            </section>
            {/* {appts.map((appt) => {
                return (
                    <Slideshow key={appt.id} img={appt.pictures} title={appt.title}/>

                )
            })} */}

        </>
    )

}

export default ApptInfo
