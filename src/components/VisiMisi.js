import React, { useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import visi from '../assets/images/visi.jpeg';
import misi from '../assets/images/misi.jpeg';

const VisiMisi = () => {
  useEffect(() => {
    document.title = 'Visi - Misi';
  });
  return (
    <div>
      <div className="judul">
        <h1 className="animate__animated animate__fadeInUp">TENTANG KAMI</h1>
      </div>
      <Container>
        <Row className="jarak-section1">
          <Col>
            <div>
              <h5>TENTANG KAMI</h5>
              <h1 style={{ fontSize: '52px' }}>VISI & MISI</h1>
              <h1 style={{ fontSize: '52px' }}>PPTIK ITB KONSERVASI INDONESIA</h1>
            </div>
          </Col>
        </Row>
        <Row className="mb-4" style={{ backgroundColor: '#eaf9ff' }}>
          <Col md={6}>
            <div>
              <h1 className="judul-section" style={{ fontSize: '52px', fontWeight: 'normal' }}>
                VISI
              </h1>
              <p style={{ fontSize: '20px' }}>
                Kami mencita-citakan Indonesia yang sehat dan sejahtera, dimana ekosistem-ekosisem penting di daratan dan lautan dikelola dengan baik untuk memberi manfaat jangka panjang bagi
                masyarakat Indonesia
              </p>
            </div>
          </Col>
          <Col md={6} style={{ padding: '0' }}>
            <Image src={visi} className="w-100" alt="Visi" />
          </Col>
        </Row>

        <Row className="mb-4" style={{ backgroundColor: '#eaf9ff' }}>
          <Col md={6} style={{ padding: '0' }}>
            <Image src={misi} className="w-100" alt="Misi" />
          </Col>
          <Col md={6} className="visiMisi">
            <div>
              <h1 className="judul-section" style={{ fontSize: '52px', fontWeight: 'normal' }}>
                MISI
              </h1>
              <p style={{ fontSize: '20px' }}>
                Dengan berlandaskan pada ilmu pengetahuan, kemitraan, dan kerja lapangan yang kuat, Konservasi Indonesia mendukung masyarakat dan organisasi untuk melestarikan alam dan keanekaragaman
                hayati bagi kesejahteraan masyarakat Indonesia
              </p>
            </div>
          </Col>
        </Row>
        <hr></hr>
        <div className="py-5">
          <Row>
            <Col>
              <h2 className="judul-section" style={{ fontSize: '42px' }}>
                KEMITRAAN STRATEGIS KAMI
              </h2>
              <p style={{ fontSize: '20px' }}>
                Kemitraan merupakan inti dari kerja kami. Kami berkolaborasi dengan Pemerintah Indonesia, komunitas setempat dan masyarakat adat, perusahaan, akademisi, media dan LSM. Kemitraan
                tersebut merupakan elemen penting yang mendukung tercapainya pembangunan berkelanjutan di Indonesia.
                <br></br>
                <br></br>
                Kami telah menjalin kemitraan strategis dengan Conservation International sebagai mitra utama. Kemitraan ini bertujuan untuk meningkatkan visibilitas hasil kerja kami ke jaringan
                internasional sekaligus mendapatkan akses ke jaringan global serta sumberdaya yang relevan untuk berkontribusi dalam pencapaian tujuan pembangunan berkelanjutan di Indonesia
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default VisiMisi;
