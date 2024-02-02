import React from 'react';
import {Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/images/foot.png';

const Footer = () => {
  return (
    <div className="footer">
      <Container fluid>
        <Row className="text-light">
          <Col md={2}>
            <img src={logo} width="120" alt="Logo" className="mt-2" />
          </Col>
          <Col md={5}>
            <Row>
              <Col>
                <p className="mt-3 mb-5 fw-bold">KONTAK</p>
                <p className="mb-5">Gedung PAU Lantai 4 PPTIK ITB,</p>
                <p>Jl. Ganesa No.10, Lb. Siliwangi, Kecamatan Coblong, Kota Bandung, Jawa Barat 40132</p>
              </Col>
            </Row>
          </Col>
          <Col md={5}>
            <Row>
              <Col>
                <p className="mt-3 fw-bold">KONSERVASI INDONESIA</p>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <a href="#">Kontak Kami</a>
              </Col>
              <Col md={6}>
                <a href="#">Ketentuan Pengguna</a>
              </Col>
            </Row>
            <Row>
              <Col>
                <a href='#'>Kebijakan Privasi</a>
              </Col>
            </Row>
          </Col>
        </Row>
          <hr></hr>
        <Row className="pt-5 pb-5">
          <Col md={6}>
            <h4 className="text-white" style={{ fontSize: "16px" }}>© 2024 PPTIK ITB Konservasi Indonesia. All Rights Reserved</h4>
          </Col>
          <Col md={6} className="text-end" >
          <a className='btn-foot' href='https://www.facebook.com/PPTIKITB' target='blank'><i  class="fa-brands fa-facebook" style={{color: '#3b5998'}}></i></a>
          <a className='btn-foot' href='https://www.instagram.com/pptik_itb/' target='blank'><i  class="fa-brands fa-instagram" style={{ color: '#8e1a79'}}></i></a>
          <a className='btn-foot' href='https://twitter.com/pptikitb' target='blank'><i  class="fa-brands fa-twitter" style={{ color: '#74C0FC' }}></i></a>
          <a className='btn-foot' href='https://www.youtube.com/@PPTIKITBOfficial' target='blank'><i class="fa-brands fa-youtube" style={{ color: '#ff0000' }}></i></a>
          <a className='btn-foot' href='https://id.linkedin.com/company/pptik' target='blank'><i  class="fa-brands fa-linkedin"  style={{ color: '#3a55df' }}></i></a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
