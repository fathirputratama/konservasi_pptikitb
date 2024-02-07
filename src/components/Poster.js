import React, { useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import poster1 from '../assets/images/biodiversity.jpeg';
import poster2 from '../assets/images/buildingofthefuture.jpeg';
import poster3 from '../assets/images/defencesecurity.jpeg';
import poster4 from '../assets/images/smarttransportation.jpeg';

const Poster = () => {
  useEffect(() => {
    document.title = 'Poster';
  });
  return (
    <div>
      <Container>
        <Row className="jarak-section1">
          <Col>
            <div>
              <h5>PUBLIKASI</h5>
              <h1 style={{ fontSize: '52px' }}>POSTER</h1>
            </div>
          </Col>
        </Row>
        <Row className="row-poster">
          <Col md={6} lg={3}>
            <Image src={poster1} style={{ width: '220px' }} />
            <p className="teks-poster">Biodiversity</p>
          </Col>
          <Col md={6} lg={3}>
            <Image src={poster2} style={{ width: '220px' }} />
            <p className="teks-poster">Building Of The Future</p>
          </Col>
          <Col md={6} lg={3}>
            <Image src={poster3} style={{ width: '220px' }} />
            <p className="teks-poster">Defence Security</p>
          </Col>
          <Col md={6} lg={3}>
            <Image src={poster4} style={{ width: '220px' }} />
            <p className="teks-poster">Smart Transportation</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Poster;
