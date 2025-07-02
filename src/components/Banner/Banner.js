import React from "react";
import styles from './Banner.module.css';
import { Carousel } from 'react-bootstrap';

// Gambar Carousel
import sliderImage1 from '../../assets/home/slider1.png'; 
import sliderImage2 from '../../assets/home/slider2.png'; 
import sliderImage3 from '../../assets/home/slider3.png'; 

const Banner = () => {

  return (
    <>
        <div className={styles.bannerContainer}>
      <Carousel controls={false} indicators={true} interval={3000}>
        <Carousel.Item className={styles.carouselItem}>
          <img
            className="d-block w-100"
            src={sliderImage1}
            alt="Gedung Kantor Bupati Semarang"
          />
        </Carousel.Item>
        <Carousel.Item className={styles.carouselItem}>
          <img
            className="d-block w-100"
            src={sliderImage2}
            alt="Pemandangan Rawa Pening"
          />
        </Carousel.Item>
        <Carousel.Item className={styles.carouselItem}>
          <img
            className="d-block w-100"
            src={sliderImage3}
            alt="Museum Kereta Api Ambarawa"
          />
        </Carousel.Item>
      </Carousel>

      {/* Teks tetap berada di tengah, ditumpuk di atas slider */}
      <div className={`${styles.center} overflow-hidden`}>
        <h1 data-aos='fade-down' className={styles.title}>
          Selamat Datang di Web PPID
        </h1>
        <p data-aos='fade-up' data-aos-delay='200' className={styles.subtitle}>
          Portal Resmi Informasi Publik Kabupaten Semarang
        </p>
      </div>
    </div>
        
    </>
  );
};

export default Banner;
