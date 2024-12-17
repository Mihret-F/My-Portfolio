import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated import
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Footer from './Component/Footer/Footer';
import Certaficate from './Component/Certaficate/Certaficate';
import Project from './Component/Project/Project';
import Contact from './Component/Contact/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes> {/* Replaced Switch with Routes */}
          <Route exact path="/" element={<Home />} /> {/* Replaced component with element */}
          <Route path="/about" element={<About />} /> {/* Replaced component with element */}
          <Route path="/project" element={<Project />} /> {/* Replaced component with element */}
          <Route path="/certificate" element={<Certaficate />} /> {/* Replaced component with element */}
          <Route path="/contact" element={<Contact />} /> {/* Replaced component with element */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
