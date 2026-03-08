import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import TawkChat from './components/TawkChat';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-chai text-gray-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <TawkChat />
      </div>
    </Router>
  );
}

export default App;