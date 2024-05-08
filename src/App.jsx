import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Fund from './pages/Fund';
import Donation from './pages/Donation';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Login from './pages/Login';
import Register from './pages/Register';



function App() {
  return (
    <Router>
        <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/fund" element={<Fund />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
