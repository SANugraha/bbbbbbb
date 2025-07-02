import React from 'react';
import { FaBan, FaBolt, FaClock, FaListAlt } from 'react-icons/fa';
import styles from './DaftarInformasiPublikSection.module.css';

const data = [
  {
    icon: <FaListAlt />,
    label: 'Daftar Informasi Berkala',
  },
  {
    icon: <FaBolt />,
    label: 'Informasi Serta Merta',
  },
  {
    icon: <FaClock />,
    label: 'Informasi Setiap Saat',
  },
  {
    icon: <FaBan />,
    label: 'Informasi Dikecualikan',
  },
];

const DaftarInformasiPublikSection = () => (
  <div className={styles.wrapper}>
    <h2 className={styles.title}>Daftar Informasi Publik</h2>
    <div className={styles.grid}>
      {data.map((item, idx) => (
        <div className={styles.card} key={idx}>
          <div className={styles.icon}>{item.icon}</div>
          <div className={styles.label}>{item.label}</div>
        </div>
      ))}
    </div>
  </div>
);

export default DaftarInformasiPublikSection; 