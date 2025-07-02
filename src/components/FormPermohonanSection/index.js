import React from 'react';
import { FaFileAlt, FaFileSignature } from 'react-icons/fa';
import styles from './FormPermohonanSection.module.css';

const FormPermohonanSection = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.innerBox}>
        <div className={styles.formItem}>
          <FaFileAlt className={styles.icon} />
          <div className={styles.label}>Form Permohonan Informasi Publik</div>
          <a href="#" className={styles.button}>Ajukan Permohonan</a>
        </div>
        <div className={styles.divider} />
        <div className={styles.formItem}>
          <FaFileSignature className={styles.icon} />
          <div className={styles.label}>Form Pengajuan Keberatan</div>
          <a href="#" className={styles.button}>Ajukan Keberatan</a>
        </div>
      </div>
    </div>
  );
};

export default FormPermohonanSection; 