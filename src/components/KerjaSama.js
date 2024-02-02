import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import ceklis from '../assets/images/ceklis.png';

const KerjaSama = () => {
  return (
    <div>
      <div className="judul">
        <h1 className="animate__animated animate__fadeInUp">KERJA SAMA</h1>
      </div>
      <Container>
        <Row className="jarak-section1">
          <Col md={4}>
            <div>
              <h5>KERJA SAMA</h5>
              <h1 style={{ fontSize: '45px' }}>BAGAIMANA KAMI BEKERJA</h1>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Row>
              <Col md={1}>
                <Image src={ceklis} style={{ width: '30px' }} />
              </Col>
              <Col md={11}>
                <h5 style={{ fontSize: '20px' }}>Berbasis Ilmiah</h5>
                <p>
                  Kami bekerjasama dengan universitas dan Pemerintah Daerah dalam melakukan kajian atau survei yang menjadi dasar referensi dalam merancang rencana program atau rekomendasi bagi upaya
                  pelestarian lingkungan dan pembangunan berkelanjutan di Indonesia. Kami memberikan pendampingan teknis dan keahlian dalam proses kajian dan survei, untuk menghasilkan dasar ilmiah
                  yang kuat bagi sebuah kebijakan atau perencanaan pembangunan.
                </p>
              </Col>
            </Row>
            <hr />
          </Col>
          <Col md={6}>
            <Row>
              <Col md={1}>
                <Image src={ceklis} style={{ width: '30px' }} />
              </Col>
              <Col md={11}>
                <h5 style={{ fontSize: '20px' }}>Pendanaan Berkelanjutan</h5>
                <p>
                  Kami bekerjasama dengan Pemerintah dan para pihak dalam merumuskan solusi pendanaan berkelanjutan melalui sejumlah mekanisme pendanaan inovatif untuk mendukung upaya konservasi dan
                  pembangunan berkelanjutan dalam jangka panjang. Kami mengidentifikasi nilai dan manfaat ekonomi dari sumber daya alam atau kawasan konservasi untuk mendorong lebih banyak investasi
                  hijau dan pendanaan berkelanjutan bagi pelestarian alam.
                </p>
              </Col>
            </Row>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Row>
              <Col md={1}>
                <Image src={ceklis} style={{ width: '30px' }} />
              </Col>
              <Col md={11}>
                <h5 style={{ fontSize: '20px' }}>Pengelolaan Bentang Darat dan Laut secara Berkelanjutan</h5>
                <p>
                  Baik di darat dan laut, kami mengembangkan pendekatan pengelolaan lanskap dan laut yang berkelanjutan. Pengelolaan bentang darat dan laut secara berkelanjutan sangat penting untuk
                  menjaga kelestarian lingkungan Indonesia guna memberi manfaat bagi kesejahteraan masyarakat yang bergantung pada ekosistem darat dan laut yang sehat.
                </p>
              </Col>
            </Row>
            <hr />
          </Col>
          <Col md={6}>
            <Row>
              <Col md={1}>
                <Image src={ceklis} style={{ width: '30px' }} />
              </Col>
              <Col md={11}>
                <h5 style={{ fontSize: '20px' }}>Bekerja Bersama Pemerintah dan Masyarakat</h5>
                <p>
                  Kami bekerja bersama Pemerintah Indonesia dan masyarakat, sebagai pengelola dan aktor perubahan utama dalam mencapai pembangunan berkelanjutan dan pelestarian lingkungan di
                  Indonesia. Sebagai mitra Pemerintah, kami mendukung Pemerintah Indonesia dalam mencapai target pembangunan berkelanjutan dan pelestarian lingkungan di berbagai tingkat (nasional,
                  provinsi, dan kabupaten). Kami juga bekerja bersama masyarakat (termasuk masyarakat adat) yang memegang peran penting dalam pelestarian lingkungan Indonesia.
                </p>
              </Col>
            </Row>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Row>
              <Col md={1}>
                <Image src={ceklis} style={{ width: '30px' }} />
              </Col>
              <Col md={11}>
                <h5 style={{ fontSize: '20px' }}>Kolaborasi Multipihak Lintas Sektor</h5>
                <p>
                  Kami berkolaborasi dengan para pihak dari berbagai sektor untuk mendukung pembangunan berkelanjutan dan pelestarian lingkungan Indonesia yang membutuhkan kemitraan lintas sektor dan
                  yurisdiksi.
                </p>
              </Col>
            </Row>
            <hr />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default KerjaSama;
