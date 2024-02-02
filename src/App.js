import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Main from './components/Main';
import KerjaKami from './components/KerjaKami';
import KerjaSama from './components/KerjaSama';
import VisiMisi from './components/VisiMisi';
import LaporanTahunan from './components/LaporanTahunan';
import Poster from './components/Poster';
import Buku from './components/Buku';
import Cerita from './components/Cerita';
import Footer from './components/Footer';
import './style/main.css';

function App() {
  return (
    <div>
    <Router>
    <Navigation/>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/kerja" element={<KerjaKami/>} />
        <Route path="/kerja-sama" element={<KerjaSama/>} />
        <Route path="/visi-misi" element={<VisiMisi/>} />
        <Route path="/laporan-tahunan" element={<LaporanTahunan/>} />
        <Route path="/buku" element={<Buku/>} />
        <Route path="/poster" element={<Poster/>} />
        <Route path="/cerita" element={<Cerita/>} />
      </Routes>
      <Footer/>
      </Router>
      </div>
  );
}

export default App;
