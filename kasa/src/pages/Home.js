import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Image1 from "../assets/images/banner/Image1.png";


function Home() {
    return (
        <>
            <main>
                <Navbar />
                <Banner text="Chez vous, partout et ailleurs" />
            </main>
        </>
    )
}

export default Home