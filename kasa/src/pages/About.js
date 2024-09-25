import Footer from "../components/footer/Footer";
import footerLogo from "../assets/images/logo/logo-white.png";
import Banner from "../components/banner/Banner";
import Collapse from "../components/collapse/Collapse";
import Navbar from "../components/navbar/Navbar";
import collapseData from "../datas/aboutList.json";

function About() {
  return (
    <>
      <Navbar />
      <main className="aboutContent">
        <Banner text={"About"} />
        <section className="collapses">
          {collapseData.map((police) => {
            return (
              <div key={police.id} className="under">
                <Collapse title={police.title} content={police.content} />
              </div>
            );
          })}
        </section>
      </main>
      <Footer
        img={footerLogo}
        copyRights={"© 2020 Kasa. All rights reserved"}
      />
    </>
  );
}

export default About;
