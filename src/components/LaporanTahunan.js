import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import tahunan from '../assets/images/tahunan.jpeg';

const LaporanTahunan = () => {
  return (
    <div>
      <div className="judul">
        <h1 className="animate__animated animate__fadeInUp">PUBLIKASI</h1>
      </div>
      <Container>
      <Row className='jarak-section1'>
          <Col>
            <div>
              <h5>PUBLIKASI</h5>
              <h1 style={{ fontSize: '52px' }}>
                LAPORAN TAHUNAN
              </h1>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <Image src={tahunan} alt="foto" style={{ width: '280px', height: 'auto' }} />
            <p style={{ fontSize: '20px' }}>Impact Report Focal Species Conservation Program FY23</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LaporanTahunan;
