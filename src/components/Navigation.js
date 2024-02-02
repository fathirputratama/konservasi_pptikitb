import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import logo from '../assets/images/nav.png';

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <div className="sticky-top navigation">
      <Navbar expand="lg" className="navigation" variant="light" style={{ backgroundColor: 'white' }}>
        <Container>
          <Navbar.Brand onClick={() => navigate('/')} className="fw-bold fs-4">
            <img src={logo} width="85" alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavDropdown title="Tentang Kami" id="basic-nav-dropdown" className="mx-2">
                <NavDropdown.Item onClick={() => navigate('/visi-misi')}>Visi & Misi</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Kerja Kami" id="basic-nav-dropdown" className="mx-2">
                <NavDropdown.Item onClick={() => navigate('/kerja')}>Kerja Kami</NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate('/kerja-sama')}>Kerja Sama</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Publikasi" id="basic-nav-dropdown" className="mx-2">
                <NavDropdown.Item onClick={() => navigate('/laporan-tahunan')}>Laporan Tahunan</NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate('/buku')}>Buku</NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate('/poster')}>Poster</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Cerita & Event  " id="basic-nav-dropdown" className="mx-2">
                <NavDropdown.Item onClick={() => navigate('/cerita')}>Cerita Dari Tapak</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
