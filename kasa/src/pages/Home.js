import React from "react";
import Navbar from "../components/navbar/Navbar";
import Banner from "../components/banner/Banner";
import Appts from "../components/home/Appts";
import footerLogo from "../assets/images/logo/logo-white.png"
import Footer from "../components/footer/Footer";

function Home() {
    return (
        <>
            <Navbar />
            <main className="index">
                <Banner text="Chez vous, partout et ailleurs" />
                <Appts/>
            </main>
            <Footer img={footerLogo} copyRights="© 2020 Kasa. All rights reserved"/>
        </>
    )
}

export default Home;