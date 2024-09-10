import React from "react";
import Footer from "../components/Footer";
import footerLogo from "../assets/images/logo/logo-white.png"
import Slideshow from "../components/fiche/Slideshow";
import ApptInfo from "../components/ApptInfo";
import appts from "../datas/logements.json";
import Navbar from "../components/Navbar";


function Fiche() {

    return (
        <>
            <Navbar />
            <main className="ficheContent">
                {/* finir carroussel */}
                <Slideshow />
                <ApptInfo />
            </main>
            <Footer img={footerLogo} copyRights={"© 2020 Kasa. All rights reserved"} />
        </>
    )
}

export default Fiche