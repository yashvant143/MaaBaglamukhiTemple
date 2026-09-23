import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import PanditDirectory from './pages/PanditDirectory';
import GalleryPage from './pages/GalleryPage';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col justify-between bg-devotional-cream text-gray-900 selection:bg-saffron-500 selection:text-white">
        <div>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/pandits" element={<PanditDirectory />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
