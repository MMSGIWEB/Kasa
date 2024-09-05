import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Logements from "../components/Logements";
import footerLogo from "../assets/images/logo/logo-white.png"
import Footer from "../components/Footer";

function Home() {
    return (
        <>
            <Navbar />
            <main>
                <Banner text="Chez vous, partout et ailleurs" />
                <Logements/>
                <Footer img={footerLogo} copyRights="© 2020 Kasa. All rights reserved"/>
            </main>
        </>
    )
}

export default Home;