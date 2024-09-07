import React from "react";
import Footer from "../components/Footer";
import footerLogo from "../assets/images/logo/logo-white.png";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import Navbar from "../components/Navbar";
import collapseData from "../datas/aboutList.json";


function About() {
    return (
        <>
            <Navbar />
            <main className="aboutContent">
                <Banner text={""} />
                <section className="collapses">
                    {collapseData.map((collapse, index) => {
                        return (
                            <div key={collapse.id} className="under">
                                <Collapse title={collapse.title} content={collapse.content} />
                            </div>
                        )
                    })}
            </section>
        </main >
            <Footer img={footerLogo} copyRights={"© 2020 Kasa. All rights reserved"} />
        </>
    )
}

export default About