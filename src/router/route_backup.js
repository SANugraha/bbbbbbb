import AboutUs from '../views/aboutUs';
import Berita from '../views/berita';
import ContactUs from '../views/contactUs';
import Home from "../views/home";
import IndividualService from "../views/individualService";
import ProjectDetails from "../views/projectDetails";
import Service from "../views/services";
import SMediaService from '../views/sMediaService';



const routes = [
    { components: <Home/>, to: '/' },
    { components: <Service />, to: '/services' },
    { components: <ContactUs />, to: '/contactUs' },
    { components: <IndividualService />, to: '/individualService' },
    { components: <AboutUs />, to: '/aboutUs' },
    { components: <ProjectDetails />, to: '/projectDetails' },
    { components: <SMediaService />, to: '/sMediaService' },
    { components: <Berita />, to: '/berita' },
    // Profil routes, semua arahkan ke Service (seperti sebelum diubah)
    { components: <Service />, to: '/visi-misi' },
    { components: <Service />, to: '/struktur-organisasi' },
    { components: <Service />, to: '/tugas-ppid' },
    { components: <Service />, to: '/maklumat-ppid' },
    { components: <Service />, to: '/regulasi' },
    { components: <Service />, to: '/kak' },
    { components: <Service />, to: '/sop-ppid' }
];
export default routes;
