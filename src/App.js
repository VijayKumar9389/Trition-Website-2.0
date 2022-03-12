import './App.css';
import { useState, useEffect } from 'react';
import aos from 'aos'
import 'aos/dist/aos.css';
import { Route, Router, Routes } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

function App() {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    aos.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <div className="App">
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={ <Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
