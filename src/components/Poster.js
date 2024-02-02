import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import poster1 from '../assets/images/poster1.png';
import poster2 from '../assets/images/poster2.jpg';
import poster3 from '../assets/images/poster3.jpg';
import poster4 from '../assets/images/poster4.jpg';
import poster5 from '../assets/images/poster5.jpg';

const Poster = () => {
  return (
    <div>
      <Container>
          <Row>
            <Col md={3}>
              <a href="#" style={{ textDecoration: 'none' }}>
                <Image src={poster1} alt="Gambar 1" style={{ width: '255px', height: 'auto' }} />
                <p className='teks-poster'>Poster Aturan Berinteraksi dengan Pari Manta</p>
              </a>
            </Col>
            <Col md={3}>
              <a href="#" style={{ textDecoration: 'none' }}>
                <Image src={poster2} alt="Gambar 2" style={{ width: '255px', height: 'auto' }} />
                <p className='teks-poster'>Poster Hiu Berjalan Sudah Dilindungi Penuh di Indonesia</p>
              </a>
            </Col>
            <Col md={3}>
              <a href="#" style={{ textDecoration: 'none' }}>
                <Image src={poster3} alt="Gambar 3" style={{ width: '255px', height: 'auto' }} />

                <p className='teks-poster'>Poster Ancaman Terumbu Karang</p>
              </a>
            </Col>
            <Col md={3}>
              <a href="#" style={{ textDecoration: 'none' }}>
                <Image src={poster4} alt="Gambar 4" style={{ width: '255px', height: 'auto' }} />

                <p className='teks-poster'>Poster Terumbu Karang di Bentang Laut Kepala Burung (BLKB)</p>
              </a>
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <a href="#" style={{ textDecoration: 'none' }}>
                <Image src={poster5} alt="Gambar 5" style={{ width: '255px', height: 'auto' }} />

                <p className='teks-poster'>Poster Terumbu Karang di Sumba Timur</p>
              </a>
            </Col>
          </Row>
      </Container>
    </div>
  );
};

export default Poster;
