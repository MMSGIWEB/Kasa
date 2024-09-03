import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Logements from "../components/Logements";
import Footer from "../components/Footer";

function Home() {
    return (
        <>
            <Navbar />
            <main>
                <Banner text="Chez vous, partout et ailleurs" />
                <Logements/>
                <Footer/>
            </main>
        </>
    )
}

export default Home;