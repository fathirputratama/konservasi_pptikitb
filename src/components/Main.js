import React from 'react';
import { Container, Row, Col, Image, Button, Form } from 'react-bootstrap';
import main from '../assets/images/main.jpg';
import tentang from '../assets/images/tentang.jpeg';
import release1 from '../assets/images/release1.jpg';
import release2 from '../assets/images/release2.jpg';

const Main = () => {
  return (
    <div>
      <Image src={main} alt="foto" fluid style={{ width: '100%', height: 'auto' }} />
      <div style={{ backgroundColor: '#EAF9FF', height: '100px' }}></div>
      <Container>
        <Row>
          <Col>
            <div className="tentang">
              <h5>TENTANG KAMI</h5>
              <h1 className="judul-section">KONSERVASI INDONESIA</h1>
            </div>
            <div>
              <Image className="main-foto" src={tentang} alt="foto" />
              <p style={{ marginTop: '75px' }}>
                Merupakan yayasan nasional yang bertujuan mendukung pembangunan berkelanjutan dan pelestarian lingkungan di Indonesia. Kami percaya akan pentingnya kemitraan multipihak yang bersifat
                lintas sektor dan yurisdiksi untuk mendukung pelestarian lingkungan di Indonesia. Bermitra dengan Pemerintah dan para mitra, kami merancang dan menghadirkan solusi inovatif
                berbasis-alam serta pendekatan strategi pengelolaan bentang alam dan bentang laut yang terintegrasi dan berkelanjutan untuk menghasilkan dampak positif dalam jangka panjang bagi
                masyarakat dan alam Indonesia.
              </p>
            </div>

            <a href="#" className="tombol" style={{ width: '285px', height: '70px' }}>
              Selengkapnya Tentang Kami
            </a>
          </Col>
        </Row>
        <Row>
          <Col className="pt-5">
            <iframe width="100%" height="500" src="https://www.youtube.com/embed/VV7tXVYz088" title="YouTube Video" frameBorder="0" allowFullScreen></iframe>
          </Col>
        </Row>
        <Row style={{ paddingTop: '100px', paddingBottom: '50px' }}>
          <Col md={6}>
            <div>
              <h5>KERJA KAMI</h5>
              <h1 className="judul-section">KERJA KAMI</h1>
            </div>
          </Col>
          <Col md={6}>
            <p style={{ marginTop: '40px' }}>
              Konservasi Indonesia mendukung pembangunan berkelanjutan dan pelestarian lingkungan di Indonesia. Kami bekerja bersama Pemerintah Indonesia dan para pihak untuk mendukung pencapaian
              Tujuan Pembangunan Berkelanjutan/TPB (Sustainable Development Goals 2030). Dukungan dalam pencapaian TPB dimaksud dalam hal ini adalah termasuk namun tidak terbatas pada TPB 1 (Tanpa
              Kemiskinan), TPB 5 (Kesetaraan Gender), TPB 12 (Produksi dan Konsumsi yang Bertanggungjawab), TPB 13 (Penanganan Perubahan Iklim), TPB 14 (Ekosistem Lautan), TPB 15 (Ekosistem Daratan),
              dan TPB 17 (Kemitraan untuk Mencapai Tujuan).
            </p>
            <a href="#" className="tombol">
              Selengkapnya
            </a>
          </Col>
        </Row>
        <Row className="bg-color">
          <Col>
            <div>
              <h3>LOKASI KERJA KAMI</h3>
              <p>
                Konservasi Indonesia bekerja pada tiga wilayah geografis di Indonesia, yakni Sundaland, Sunda-Banda, dan Sahul Papua dengan melakukan kegiatan pada sejumlah provinsi maupun kabupaten
                yang ada pada setiap wilayah tersebut. Selain di tingkat provinsi dan kabupaten, kami juga melakukan kegiatan dan sejumlah inisiatif program di tingkat nasional, utamanya dalam rangka
                mendukung pencapaian target Pemerintah Indonesia dengan lokasi percontohan (pilot site) di sejumlah provinsi/kabupaten.
              </p>
              <a href="#" className="tombol">
                Selengkapnya
              </a>
              <iframe style={{paddingTop: '25px'}} width="100%" height="500" src="https://maphub.net/embed_h/l80jFWgYaSPBisdj?panel=1&panel_closed=1" frameborder="0"></iframe>
            </div>
          </Col>
        </Row>
        <Row>
          <div style={{ paddingTop: '50px' }}>
            <h5>PUBLIKASI</h5>
            <h1 className="judul-section">PRESS RELEASE</h1>
          </div>
          <Col md={4}>
            <Image src={release1} alt="release1" fluid />
          </Col>
          <Col md={8}>
            <div>
              <h3>Konservasi Indonesia Kukuhkan Jejaring Sasi Bentang Laut Kepala Burung Papua</h3>
              <p style={{ fontSize: '14px' }}>
                JAKARTA, 15 DESEMBER 2023 – COP28 UNFCCC menyoroti pentingnya perjanjian global yang yang bertujuan mengatasi krisis iklim yang mendesak. Konservasi Indonesia (KI) mendukung beragam
                inisiatif Pemerintah Indonesia yang bertujuan untuk memitigasi perubahan iklim dan melindungi alam untuk penghidupan masyarakat melalui pengembangan kemitraan kolaboratif dengan
                berbagai pemangku kepentingan. Salah satunya, kemitraan yang akan membawa dampak besar, yang telah terjalin dengan OceanX, sebuah organisasi global untuk eksplorasi laut. Kesepakatan
                penting ini diresmikan pada side event COP28 dan disaksikan secara resmi oleh Deputi Bidang Koordinasi Sumber Daya Maritim Kementerian Koordinator Bidang Kemaritiman dan Investasi
                (Kemenko Marves RI), M Firman Hidayat.
              </p>
              <a href="#" style={{ fontSize: '14px', textDecoration: 'none', paddingBottom: '10px' }}>
                Read More →
              </a>
            </div>
          </Col>
          </Row>
          <Row className='py-3'>
          <Col md={4}>
            <Image src={release2} alt="" fluid />
          </Col>
          <Col md={8}>
            <div className="text-container">
              <h3>Konservasi Indonesia Kolaborasi dengan OceanX Untuk Dukung Program Blue Halo S</h3>
              <p style={{ fontSize: '14px' }}>
                JAKARTA, 15 DESEMBER 2023 – COP28 UNFCCC menyoroti pentingnya perjanjian global yang yang bertujuan mengatasi krisis iklim yang mendesak. Konservasi Indonesia (KI) mendukung beragam
                inisiatif Pemerintah Indonesia yang bertujuan untuk memitigasi perubahan iklim dan melindungi alam untuk penghidupan masyarakat melalui pengembangan kemitraan kolaboratif dengan
                berbagai pemangku kepentingan. Salah satunya, kemitraan yang akan membawa dampak besar, yang telah terjalin dengan OceanX, sebuah organisasi global untuk eksplorasi laut. Kesepakatan
                penting ini diresmikan pada side event COP28 dan disaksikan secara resmi oleh Deputi Bidang Koordinasi Sumber Daya Maritim Kementerian Koordinator Bidang Kemaritiman dan Investasi
                (Kemenko Marves RI), M Firman Hidayat.
              </p>
              <a href="" style={{ fontSize: '14px', textDecoration: 'none' }}>
                Read More →
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="regist-foto">
        <Container>
          <Row>
            <Col>
              <p>Silahkan mendaftar untuk mendapatkan informasi terbaru kami</p>
            </Col>
          </Row>
          <Form>
            <Row>
              <Col sm={6} md={7}  style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Form.Control className='form' type="text" placeholder="Masukkan alamat email" />
              </Col>
              <Col sm={6} md={5}>
                <Button className="button-regist" style={{ width: '200px', display: 'block' }}>
                  Dapatkan Informasi
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>
      
    </div>
  );
};

export default Main;
