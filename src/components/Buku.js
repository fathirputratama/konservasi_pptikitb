import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import buku1 from '../assets/images/buku1.png';
import buku2 from '../assets/images/buku2.png';
import buku3 from '../assets/images/buku3.png';
import buku4 from '../assets/images/buku4.png';

const Buku = () => {
  return (
    <div className="mb-5">
      <div className="judul">
        <h1 className=" animate__animated animate__fadeInUp">PUBLIKASI</h1>
      </div>
      <Container>
      <Row className='jarak-section1'>
          <Col>
            <div>
              <h5>PUBLIKASI</h5>
              <h1 style={{ fontSize: '52px' }}>BUKU</h1>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <Image src={buku1} alt="Gambar 1" className='ukuran-buku' />
            <h2 className='judul-buku'>INDEKS KESEHATAN LAUT INDONESIA (IKLI)</h2>
            <p>HASIL ESTIMASI SKOR IKLI TAHUN 2022</p>
            <p>Victor PH Nikijuluw, Muh Rasman Manafi, Dietriech G. Bengen, Ateng Supriatna</p>
            <p className="fw-bold">Yayasan Konservasi Cakrawala Indonesia</p>
            <Button className='tombol-buku'>Baca</Button>
          </Col>
          <Col md={4}>
            <Image src={buku2} alt="Gambar 2" className='ukuran-buku' />
            <h2 className='judul-buku'>MODUL BLUE HALO S 101</h2>
            <p>Sebagai Bahan Pelatihan Dasar Konservasi Alam dan Perikanan Lestari (KAIL)</p>
            <p>JULI 2023</p>
            <p className="fw-bold">Yayasan Konservasi Cakrawala Indonesia</p>
            <Button className='tombol-buku'>Baca</Button>
          </Col>
          <Col md={4}>
            <Image src={buku3} alt="Gambar 3" className='ukuran-buku' />
            <h2 className='judul-buku'>BLUE HALO S 714 715 SURVEY POLICY BRIEF</h2>
            <p>HASIL SURVEY PERINTISAN</p>
            <p>Elle Wibisono, Victor Nikijuluw, Gino V Limmon, Arif Wibowo</p>
            <p className="fw-bold">Yayasan Konservasi Cakrawala Indonesia</p>
            <Button className='tombol-buku'>Baca</Button>
          </Col>
          <Row>
            <Col md={4}>
              <Image src={buku4} alt="Gambar 4" className='ukuran-buku' />
              <h2 className='judul-buku'>PEATLAND RESTORATION GUIDELINES - TANO SOBUSOBU</h2>
              <p>
                Buku "Mengolah Tano Sobusobu, Menyelamatkan Kehidupan: Praktik Cerdas Masyarakat Muara Manompas, Melestarikan Gambut Terakhir di Kabupaten Tapanuli Selatan" diharapkan dapat memberikan
                informasi dan inspirasi bagi masyarakat akan pentingnya penyelamatan dan pelestarian ekosistem gambut dalam rangka meningkatkan ekonomi masyarakat serta untuk generasi mendatang.
                Pembelajaran masih terus dilakukan, tantangan yang ada diatasi bersama melalui diskusi dan pertemuan berkala. Bila proses tersebut dilakukan, upaya pelestarian, perlindungan dan
                pemanfaatan ekosistem gambut yang berkelanjutan niscaya bisa dilakukan. Selain itu, usaha juga mendukung pembangunan secara berkelanjutan, serta upaya mitigasi dan adaptasi terhadap
                perubahan iklim.
              </p>
              <p>Size: 14.8 x 21cm</p>
              <p>Weight: 450gr</p>
              <p>Cover: Soft Cover</p>
              <p>Author(s): Boy Anggiat Silaban, Didik Fitrianto, Susan Lusiana, Anderi Satya</p>
              <p>ISBN: xxx</p>
              <Button className='tombol-buku'>Baca</Button>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
};

export default Buku;
