import React from "react";
import Footer from "../components/Footer";
import footerLogo from "../assets/images/logo/logo-white.png"
import Slideshow from "../components/Slideshow";
import ApptInfo from "../components/ApptsInfo";
import appts from "../datas/logements.json";
import Navbar from "../components/Navbar";


function Fiche() {

    return (
        //rééssayer avec <Router> et pa 'Route'
        <>
            {/* ou bien ici car je genère les fiches! */}
            <Navbar />
            <main className="ficheContent">
                <Slideshow />
                {/* c'est ici que je dois utiliser map() avec appts ?*/}
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