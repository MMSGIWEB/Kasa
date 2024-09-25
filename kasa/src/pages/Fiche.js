import Footer from "../components/footer/Footer";
import footerLogo from "../assets/images/logo/logo-white.png"
import Slideshow from "../components/fiche/Slideshow";
import ApptInfo from "../components/fiche/ApptInfo";
import Navbar from "../components/navbar/Navbar";


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