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
            <div className={styles.logoStrip} style={{ background: 'rgba(255,255,255,0.03)' }}>
                <div className={`container ${styles.logoScroll} ${styles.logoSliderMobile}` } style={{ justifyContent: 'center' }}>
                    {partnerLogos.map((logo, index) => (
                        <a href="#" key={index} className={styles.logoLink} aria-label={logo.alt}>
                            <img src={logo.src} alt={logo.alt} className={styles.logoImage} />
                        </a>
                    ))}
                </div>
            </div>

            {/* Konten utama: 3 kolom sejajar (row flex) */}
            <div className={styles.mainContent}>
                <div className={styles.footerRowColumns}>
                    {/* Kolom 1: Follow Us */}
                    <div className={styles.footerCol}>
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
                    {/* Kolom 2: Kontak Kami */}
                    <div className={styles.footerCol}>
                        <h5 className={styles.footerHeading}>Kontak Kami</h5>
                        <div className={styles.contactInfoElegant}>
                            <div className={styles.contactItemElegant}>
                                <FaMapMarkerAlt className={styles.contactIcon} />
                                <div>
                                    <div className={styles.contactLabel}>Alamat</div>
                                    <div className={styles.contactValue}>
                                        Jl. Diponegoro No. 14, Ungaran, Kabupaten Semarang, Jawa Tengah 50511
                                    </div>
                                </div>
                            </div>
                            <div className={styles.contactItemElegant}>
                                <FaPhoneAlt className={styles.contactIcon} />
                                <div>
                                    <div className={styles.contactLabel}>Telepon</div>
                                    <div className={styles.contactValue}>(024) 6921013</div>
                                </div>
                            </div>
                            <div className={styles.contactItemElegant}>
                                <FaEnvelope className={styles.contactIcon} />
                                <div>
                                    <div className={styles.contactLabel}>Email</div>
                                    <div className={styles.contactValue}>diskominfo@semarangkab.go.id</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Kolom 3: Statistik Pengunjung */}
                    <div className={styles.footerCol}>
                        <h5 className={styles.footerHeading}>Statistik Pengunjung</h5>
                        <div className={styles.visitorStatsSimple}>
                            <div className={styles.statSimpleItem}>
                                <FaCalendarAlt className={styles.statIcon} />
                                <div>
                                    <span>Bulan Ini</span>
                                    <strong>112,470</strong>
                                </div>
                            </div>
                            <div className={styles.statSimpleItem}>
                                <FaRegCalendar className={styles.statIcon} />
                                <div>
                                    <span>Tahun Ini</span>
                                    <strong>850,921</strong>
                                </div>
                            </div>
                            <div className={styles.statSimpleItem}>
                                <FaUsers className={styles.statIcon} />
                                <div>
                                    <span>Total</span>
                                    <strong>2,431,567</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', margin: '32px 0 0 0' }}></div>

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