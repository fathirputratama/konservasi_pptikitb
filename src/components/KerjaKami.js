import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import card1 from '../assets/images/card1.png';
import card2 from '../assets/images/card2.png';
import card3 from '../assets/images/card3.png';

const KerjaKami = () => {
  return (
    <div>
      <div className="judul">
        <h1 className="animate__animated animate__fadeInUp">KERJA KAMI</h1>
      </div>
      <Container>
      <Row className='jarak-section1'>  
          <Col md={4}>
            <div>
              <h5>KERJA KAMI</h5>
              <h1 style={{ fontSize: '52px' }}>
                KERJA KAMI
              </h1>
            </div>
          </Col>
          <Col md={8}>
            <p style={{ marginTop: '40px', fontSize: '20px' }}>
              Merupakan yayasan nasional yang bertujuan mendukung pembangunan berkelanjutan dan pelestarian lingkungan di Indonesia. Kami percaya akan pentingnya kemitraan multipihak yang bersifat
              lintas sektor dan yurisdiksi untuk mendukung pelestarian lingkungan di Indonesia. Bermitra dengan Pemerintah dan para mitra, kami merancang dan menghadirkan solusi inovatif berbasis-alam
              serta pendekatan strategi pengelolaan bentang alam dan bentang laut yang terintegrasi dan berkelanjutan untuk menghasilkan dampak positif dalam jangka panjang bagi masyarakat dan alam
              Indonesia.
            </p>
          </Col>
          <hr></hr>
        </Row>
        <Row className="mb-5">
          <h2 className='judul-section' style={{ fontSize: '42px', textAlign:'center' }}>KONSERVASI INDONESIA FOKUS PADA TIGA BIDANG DI BAWAH INI</h2>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={card1} style={{ width: '135px' }} />
              <Card.Body>
                <Card.Title>Menjaga kestabilan iklim melalui pelestarian alam</Card.Title>
                <a href="#" className="tombol-kerja d-block">
                  Selengkapnya
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={card2} style={{ width: '135px' }} />
              <Card.Body>
                <Card.Title>Melestarikan sumber daya perikanan dan kelautan</Card.Title>
                <a href="#" className="tombol-kerja d-block">
                  Selengkapnya
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={card3} style={{ width: '135px' }} />
              <Card.Body>
                <Card.Title>Melakukan pendekatan pembangunan ekonomi yang ramah lingkungan</Card.Title>
                <a href="#" className="tombol-kerja d-block">
                  Selengkapnya
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default KerjaKami;
