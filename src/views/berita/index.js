import React from 'react';
import Footer from '../../components/Footer';
import styles from './Berita.module.css';

const beritaList = [
  {
    id: 1,
    title: 'Peserta Jumbara PMR Diharapkan Terapkan Nilai Positif',
    date: '02 Juli 2025 10:24',
    author: 'Dinas Kesehatan Kab. Semarang',
    summary: 'Kepala Dinas Kesehatan Kab. Semarang berharap peserta Jumbara PMR dapat menerapkan nilai positif di masyarakat.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 2,
    title: 'Digitalisasi Perparkiran Terus Dimatangkan',
    date: '02 Juli 2025 08:17',
    author: 'Dishub Kab. Semarang',
    summary: 'Dinas Perhubungan terus mematangkan digitalisasi perparkiran untuk meningkatkan pelayanan publik.',
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 3,
    title: '174.608 Warga Telah Difasilitasi Pembuatan IKD',
    date: '02 Juli 2025 06:01',
    author: 'Disdukcapil Kab. Semarang',
    summary: 'Sejak Januari hingga Juli 2025, Dinas Kependudukan telah memfasilitasi pembuatan Identitas Kependudukan Digital.',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 4,
    title: 'Suku Dinas Gulkarmat Bentuk MKKG BBPOM',
    date: '02 Juli 2025 05:21',
    author: 'Gulkarmat Kab. Semarang',
    summary: 'Suku Dinas Gulkarmat membentuk MKKG BBPOM untuk meningkatkan kesiapsiagaan bencana.',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
  },
];

const Berita = () => {
  return (
    <div className={styles.beritaPage}>
      <h1 className={styles.title}>Berita</h1>
      <div className={styles.grid}>
        {beritaList.map((item) => (
          <div className={styles.card} key={item.id}>
            <img src={item.image} alt={item.title} className={styles.image} />
            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>{item.title}</h2>
              <div className={styles.meta}>{item.date} &nbsp;|&nbsp; {item.author}</div>
              <div className={styles.summary}>{item.summary}</div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Berita; 