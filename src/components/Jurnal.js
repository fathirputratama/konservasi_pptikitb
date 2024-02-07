import React, { useEffect } from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import jurnal from '../assets/images/jurnalcoba.jpeg';

const Jurnal = () => {
  useEffect(() => {
    document.title = 'Jurnal';
  });
  return (
    <div className="mb-5">
      <div className="judul">
        <h1 className=" animate__animated animate__fadeInUp">PUBLIKASI</h1>
      </div>
      <Container>
        <Row className="jarak-section1">
          <Col>
            <div>
              <h5>PUBLIKASI</h5>
              <h1 style={{ fontSize: '52px' }}>JURNAL</h1>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <Image src={jurnal} alt="Gambar 1" className="ukuran-jurnal" />
            <h2 className="judul-jurnal">PPTIK 1 JURNAL</h2>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, minus?</p>
            <p className="fw-bold">Lorem ipsum dolor sit.</p>
            <Button className="tombol-jurnal">Baca</Button>
          </Col>
          <Col md={4}>
            <Image src={jurnal} alt="Gambar 1" className="ukuran-jurnal" />
            <h2 className="judul-jurnal">PPTIK 1 JURNAL</h2>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, minus?</p>
            <p className="fw-bold">Lorem ipsum dolor sit.</p>
            <Button className="tombol-jurnal">Baca</Button>
          </Col>
          <Col md={4}>
            <Image src={jurnal} alt="Gambar 1" className="ukuran-jurnal" />
            <h2 className="judul-jurnal">PPTIK 1 JURNAL</h2>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, minus?</p>
            <p className="fw-bold">Lorem ipsum dolor sit.</p>
            <Button className="tombol-jurnal">Baca</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Jurnal;
