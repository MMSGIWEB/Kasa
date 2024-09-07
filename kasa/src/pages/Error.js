import React from "react";
import footerLogo from "../assets/images/logo/logo-white.png";
import Footer from "../components/Footer";
import ErrorContent from "../components/ErrorContent";
import imgError from "../assets/images/error/error.png"
import Navbar from "../components/Navbar";

function Error() {
    return (
        <>
            <Navbar />
            <main className="errorPageContainer">
                <ErrorContent img={imgError} alt={'404 Error'} txt={"Oups! La page que vous demandez n'existe pas."} homeLink={"Retourner sur la page d’accueil"} />
            </main>
            <Footer img={footerLogo} copyRights={"© 2020 Kasa. All rights reserved"} />
        </>
    )

}

export default Error
