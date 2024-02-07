import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import cerita1 from '../assets/images/cerita1.jpg';
import cerita2 from '../assets/images/cerita2.jpg';
import cerita3 from '../assets/images/cerita3.jpg';

const Cerita = () => {
  useEffect(() => {
    document.title = 'Cerita';
  });
  return (
    <div>
      <div className="judul">
        <h1 className=" animate__animated animate__fadeInUp">CERITA & EVENT</h1>
      </div>
      <Container>
        <Row className="jarak-section1">
          <Col>
            <div>
              <h5>CERITA & EVENT</h5>
              <h1 style={{ fontSize: '52px' }}>CERITA DARI TAPAK</h1>
            </div>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col md={4}>
            <Card className="card-cerita">
              <Card.Img src={cerita1} className="card-image" />
              <Card.Body>
                <Card.Title>MENGINTIP UPAYA KONSERVASI ALAM KOMUNITAS PATIALA</Card.Title>
                <p>Oleh Ary Pratiwi</p>
                <br />
                <br />
                <a href="#" className="tombol">
                  Baca Lebih
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="card-cerita">
              <Card.Img src={cerita2} className="card-image" />
              <Card.Body>
                <Card.Title>PENJAGA HUTAN DARI SORONG SELATAN</Card.Title>
                <p>oleh Nikka Gunadharma, I Wayan Adi Mahardika, Jekson Bisai dan Raimer Helweldery</p>
                <a href="#" className="tombol">
                  Baca Lebih
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="card-cerita">
              <Card.Img src={cerita3} className="card-image" />
              <Card.Body>
                <Card.Title>"BINTANG PELINDUNG" HIU BELIMBING DI RAJA AMPAT</Card.Title>
                <p>Oleh Nikka Gunadharma</p>
                <br />
                <br />
                <a href="#" className="tombol">
                  Baca Lebih
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Cerita;
