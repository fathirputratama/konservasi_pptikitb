import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Main from './components/Main';
import KerjaKami from './components/KerjaKami';
import KerjaSama from './components/KerjaSama';
import VisiMisi from './components/VisiMisi';
import Galeri from './components/Galeri';
import Jurnal from './components/Jurnal';
import Poster from './components/Poster';
import Cerita from './components/Cerita';
import Footer from './components/Footer';
import './style/main.css';

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/kerja-kami" element={<KerjaKami />} />
          <Route path="/kerja-sama" element={<KerjaSama />} />
          <Route path="/visi-misi" element={<VisiMisi />} />
          <Route path="/galeri" element={<Galeri />} />
          <Route path="/jurnal" element={<Jurnal />} />
          <Route path="/poster" element={<Poster />} />
          <Route path="/cerita" element={<Cerita />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
