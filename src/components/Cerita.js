import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import cerita1 from '../assets/images/cerita1.jpg';
import cerita2 from '../assets/images/cerita2.jpg';
import cerita3 from '../assets/images/cerita3.jpg';

const Cerita = () => {
  useEffect(() => {
    document.title = 'Cerita';
  });

  const data = [
    {
      id: 1,
      img: cerita1,
      title: 'MENGINTIP UPAYA KONSERVASI ALAM KOMUNITAS PATIALA',
      publisher: 'Oleh Ary Pratiwi',
    },
    {
      id: 2,
      img: cerita2,
      title: 'PENJAGA HUTAN DARI SORONG SELATAN',
      publisher: 'Oleh Nikka Gunadharma, I Wayan Adi Mahardika, Jekson Bisai dan Raimer Helweldery',
    },
    {
      id: 3,
      img: cerita3,
      title: '"BINTANG PELINDUNG" HIU BELIMBING DI RAJA AMPAT',
      publisher: 'Oleh Nikka Gunadharma',
    },
  ];

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
        <Row className="mb-4">
          {data.map((item) => (
            <Col md={4} className="py-2">
              <Card className="card-cerita">
                <Card.Img src={item.img} className="card-image" />
                <Card.Body>
                  <Card.Title style={{ minHeight: '50px' }}>{item.title?.length <= 36 ? item.title : [item.title?.slice(0, 36), '...'].join('')}</Card.Title>
                  <Card.Text style={{ minHeight: '65px', fontSize: '14px' }}>{item.publisher}</Card.Text>
                  <a href="#" className="tombol">
                    Baca Lebih
                  </a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Cerita;
