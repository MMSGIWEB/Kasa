import React from "react";
import Footer from "../components/Footer";
import footerLogo from "../assets/images/logo/logo-white.png";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import collapseData from "../datas/aboutList.json";


function About() {
    return (
        <>
            <main className="aboutContent">
                <Banner text={""} />
                <section className="collapses">
                    {collapseData.map((collapse) => {
                        return (
                            <div key = {collapse.id}>
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