import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import galeri1 from '../assets/images/galeri1.jpeg';
import galeri2 from '../assets/images/galeri2.jpeg';
import galeri3 from '../assets/images/galeri3.jpeg';
import galeri4 from '../assets/images/galeri4.jpeg';
import galeri5 from '../assets/images/galeri5.jpeg';
import galeri6 from '../assets/images/galeri6.jpg';

const Galeri = () => {
  useEffect(() => {
    document.title = 'Galeri';
  });
  return (
    <div>
      <div className="judul">
        <h1 className="animate__animated animate__fadeInUp">PUBLIKASI</h1>
      </div>
      <Container>
        <Row className="jarak-section1">
          <Col>
            <div>
              <h5>PUBLIKASI</h5>
              <h1 style={{ fontSize: '52px' }}>GALERI</h1>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <a href="https://pptik.itb.ac.id/?p=4771" target="_blank" style={{ textDecoration: 'none' }}>
              <Card className="border-light">
                <Card.Img className="img-galeri" variant="top" src={galeri1} />
                <Card.Body>
                  <Card.Text>Diskusi dengan Ibu Dr. Susilowati UBL – Lampung, Komunitas Pohon Indonesia, Asosiasi Petani Rempah Indonesia dan Save Manglayang</Card.Text>
                </Card.Body>
              </Card>
            </a>
          </Col>
          <Col>
            <a href="https://pptik.itb.ac.id/?p=4807" target="_blank" style={{ textDecoration: 'none' }}>
              <Card className="border-light">
                <Card.Img className="img-galeri" variant="top" src={galeri2} />
                <Card.Body>
                  <Card.Text>Diskusi internal detil strategis untuk kolaborasi Pertamina, Kemenperin, Kemenpan RB, Kemendikbud</Card.Text>
                </Card.Body>
              </Card>
            </a>
          </Col>
          <Col>
            <a href="https://pptik.itb.ac.id/?p=4783" target="_blank" style={{ textDecoration: 'none' }}>
              <Card className="border-light">
                <Card.Img className="img-galeri" variant="top" src={galeri3} />
                <Card.Body>
                  <Card.Text>Diskusi dengan BRIN</Card.Text>
                </Card.Body>
              </Card>
            </a>
          </Col>
        </Row>
        <Row className="pt-3">
          <Col>
            <a href="https://pptik.itb.ac.id/?p=4776" target="_blank" style={{ textDecoration: 'none' }}>
              <Card className="border-light">
                <Card.Img className="img-galeri" variant="top" src={galeri4} />
                <Card.Body>
                  <Card.Text>Pertemuan di Pusat Riset Mekatronika Cerdas BRIN Terkait Program Degree by Research dan Kerjasama Penelitian</Card.Text>
                </Card.Body>
              </Card>
            </a>
          </Col>
          <Col>
            <a href="https://pptik.itb.ac.id/?p=4789" target="_blank" style={{ textDecoration: 'none' }}>
              <Card className="border-light">
                <Card.Img className="img-galeri" variant="top" src={galeri5} />
                <Card.Body>
                  <Card.Text>Diskusi dengan SMKN 11 Bandung</Card.Text>
                </Card.Body>
              </Card>
            </a>
          </Col>
          <Col>
            <a href="https://pptik.itb.ac.id/?p=4797" target="_blank" style={{ textDecoration: 'none' }}>
              <Card className="border-light">
                <Card.Img className="img-galeri" variant="top" src={galeri6} />
                <Card.Body>
                  <Card.Text>Kunjungan ke SMKN 2 Subang</Card.Text>
                </Card.Body>
              </Card>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Galeri;
