import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Logements from "../components/Logements";


function Home() {
    return (
        <>
            <Navbar />
            <main>
                <Banner text="Chez vous, partout et ailleurs" />
                <Logements/>
            </main>
        </>
    )
}

export default Home;