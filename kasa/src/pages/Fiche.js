import React from "react";
import Footer from "../components/Footer";
import footerLogo from "../assets/images/logo/logo-white.png"

function Fiche({ img, imgTitle, apptTitle, location, userName, userPicture, description, equipment }) {
    return (
        <>
            <main className="ficheContent">
                <img src={img} alt={imgTitle} />
                <div className="infoContent">
                    <div className="infoHeader">
                        <div className="titles">
                            <h1>{apptTitle}</h1>
                            <p>{location}</p>
                        </div>
                        <div className="userInfo">
                            <p className="userName">{userName}</p>
                            <img src={userPicture} alt="userPicture"/>
                        </div>
                    </div>
                    <section className="infoSection">
                        <div className="tagssNRating">
                            <div className="tags">
                                {/* function avec le nombre de tags => réf cours 'débutes avec react'*/}
                            </div>
                            <div className="rating">
                                {/* function avec le nombre de tags => réf cours 'débutes avec react'*/}
                            </div>
                        </div>
                        <div className="infos">
                            <article className="description">
                                <p className="txt">{description}</p>
                            </article>
                            <article className="equipment">
                                <p className="txt">{equipment}</p>
                            </article>
                        </div>
                    </section>
                </div>
            </main>
            <Footer img={footerLogo} copyRights={"© 2020 Kasa. All rights reserved"} />
        </>
    )
}

export default Fiche