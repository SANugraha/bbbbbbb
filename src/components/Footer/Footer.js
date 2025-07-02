import React from 'react';
import { FaCalendarAlt, FaEnvelope, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaRegCalendar, FaTwitter, FaUsers, FaYoutube } from "react-icons/fa";
import styles from './Footer.module.css';

// Impor logo-logo untuk strip atas. Ganti nama file sesuai yang Anda simpan.
import logoJakarta from '../../assets/footer/kemendagri.png';
import logoJalaHoaks from '../../assets/footer/lpsesmg2.png';
import logoBeritaJakarta from '../../assets/footer/pemprovjateng.png';
import logoSatuData from '../../assets/footer/satudata.png';


const Footer = () => {
    // Array untuk memudahkan rendering logo strip
    const partnerLogos = [
        { src: logoJakarta, alt: 'Logo Jakarta' },
        { src: logoJalaHoaks, alt: 'Logo Jala Hoaks' },
        { src: logoBeritaJakarta, alt: 'Logo Berita Jakarta' },
        { src: logoSatuData, alt: 'Logo Satu Data' },
    ];

    return (
         <footer className={styles.footer} aria-label="Footer">
            {/* Logo Strip */}
            <div className={styles.logoStrip} style={{background: 'rgba(255,255,255,0.03)'}}>
                <div className={`container ${styles.logoScroll}`} style={{justifyContent: 'center'}}>
                    {partnerLogos.map((logo, index) => (
                        <a href="#" key={index} className={styles.logoLink} aria-label={logo.alt}>
                            <img src={logo.src} alt={logo.alt} className={styles.logoImage} />
                        </a>
                    ))}
                </div>
            </div>

            <div className={`container ${styles.mainContent}`}>
                <div className="row">
                    {/* KOLOM KIRI: FOLLOW US */}
                    <div className="col-lg-4 d-flex flex-column align-items-start">
                        <h5 className={styles.footerHeading}>Follow Us</h5>
                        <ul className={styles.socialFollowList}>
                            <li className={styles.socialFollowItem}>
                                <a href="https://www.instagram.com/ppidkabsemarang/" target="_blank" rel="noopener noreferrer" aria-label="Instagram ppidkabsemarang">
                                    <FaInstagram />
                                    <span>ppidkabsemarang</span>
                                </a>
                            </li>
                            <li className={styles.socialFollowItem}>
                                <a href="https://www.youtube.com/c/SemarangTelevisi" target="_blank" rel="noopener noreferrer" aria-label="YouTube Semarang Televisi">
                                    <FaYoutube />
                                    <span>Semarang Televisi</span>
                                </a>
                            </li>
                            <li className={styles.socialFollowItem}>
                                <a href="https://twitter.com/kab_semarang" target="_blank" rel="noopener noreferrer" aria-label="X Kabupaten Semarang">
                                    <FaTwitter />
                                    <span>Kabupaten Semarang</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* KOLOM TENGAH: KONTAK KAMI */}
                    <div className="col-lg-4 d-flex flex-column align-items-start">
                        <h5 className={styles.footerHeading}>Kontak Kami</h5>
                        <div className={styles.contactInfo}>
                            <p><FaMapMarkerAlt style={{marginRight: 8}}/><strong>Alamat:</strong> Jl. Diponegoro No. 14, Ungaran, Kabupaten Semarang, Jawa Tengah 50511</p>
                            <p><FaPhoneAlt style={{marginRight: 8}}/><strong>Telepon:</strong> (024) 6921013</p>
                            <p><FaEnvelope style={{marginRight: 8}}/><strong>Email:</strong> diskominfo@semarangkab.go.id</p>
                        </div>
                    </div>

                    {/* KOLOM KANAN: PENGUNJUNG */}
                    <div className={`col-lg-4 d-flex flex-column align-items-end ${styles.statRightCol}`}>
                        <h5 className={styles.footerHeading} style={{textAlign: 'right', width: '100%'}}>Statistik Pengunjung</h5>
                        <div className={styles.visitorStatsCardsVertical}>
                            <div className={styles.statCardVertical}>
                                <FaCalendarAlt className={styles.statIcon} />
                                <span>Bulan Ini</span>
                                <strong>112,470</strong>
                            </div>
                            <div className={styles.statCardVertical}>
                                <FaRegCalendar className={styles.statIcon} />
                                <span>Tahun Ini</span>
                                <strong>850,921</strong>
                            </div>
                            <div className={styles.statCardVertical}>
                                <FaUsers className={styles.statIcon} />
                                <span>Total</span>
                                <strong>2,431,567</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div style={{borderTop: '1px solid rgba(255,255,255,0.08)', margin: '32px 0 0 0'}}></div>

            {/* Bagian 3: Sub-Footer */}
            <div className={styles.subFooter}>
                <div className="container">
                    <p className={styles.copyrightText}>
                         Copyright © 2025 RICO AJI DHARMA | EKA FAJAR FIRANDANI | REVANDA NUR SSSU
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;