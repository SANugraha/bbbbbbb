import React from "react";
import SubBanner from '../../components/SubBanner';
import ServicesHome from '../../components/ServicesHome/ServicesHome';
import Footer from "../../components/Footer";
import bg from '../../assets/subBanner.jpg';

const SOPPPID = () => {
  return (
    <>
      <section>
        <SubBanner heading='SOP PPID' subHeading='Home / Profil / SOP PPID' img={bg}/>
      </section>
      <section>
        <ServicesHome/>
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
};

export default SOPPPID;
