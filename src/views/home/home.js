import React from "react";
import AboutUsHome from "../../components/AboutUsHome";
import Banner from '../../components/Banner';
import CaseStudy from "../../components/CaseStudy";
import ChoosingUs from "../../components/ChoosingUs";
import DaftarInformasiPublikSection from '../../components/DaftarInformasiPublikSection';
import Footer from "../../components/Footer";
import FormPermohonanSection from '../../components/FormPermohonanSection';
import Real from "../../components/Real";
import ServicesHome from "../../components/ServicesHome";
import Testimonial from "../../components/Testimonial";


const Home = () => {
  return (
    <>
      {/* Banner Section  */}
      <section>
        <Banner />
      </section>

      {/* Permohonan Section */}
      <section>
        <FormPermohonanSection />
      </section>

      {/* Daftar Informasi Publik Section */}
      <section>
        <DaftarInformasiPublikSection />
      </section>

      {/* About Us Section */}
      <section>
        <AboutUsHome />
      </section>

      {/* Why Choosing Us Section  */}
      <section>
        <ChoosingUs />
      </section>
      
      {/* Services Section  */}
      <section>
        <ServicesHome />
      </section>

      {/* Case Study Section  */}
      <section>
        <CaseStudy />
      </section>

      {/* Real Section  */}
      <section>
        <Real />
      </section>

      {/* Testimonial Section  */}
      <section>
        <Testimonial />
      </section>

      {/* Footer Section  */}
      <section>
        <Footer />
      </section>
    </>
  );
};

export default Home;