import React from "react";
import Footer from "../components/Footer";
import footerLogo from "../assets/images/logo/logo-white.png"
import Slideshow from "../components/Slideshow";
import ApptInfo from "../components/ApptsInfo";
import appts from "../datas/logements.json";


function Fiche() {

    return (
        <>
            <main className="ficheContent">
                <Slideshow img={appts.pictures} title={appts.title} />
                <ApptInfo
                    apptTitle={appts.title}
                    location={appts.location}
                    userName={appts.name}
                    userPicture={appts.picture} />
            </main>
            <Footer img={footerLogo} copyRights={"© 2020 Kasa. All rights reserved"} />
        </>
    )
}

export default Fiche