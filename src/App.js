

import React from 'react';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Journal from './pages/Journal';
import Project from './pages/Project';
import Footer from './components/Footer';
import Contact from './pages/Contact';

const App = () => {
  return (

      <div>
        <Header />
        <HomePage /> {/* Tampilkan halaman Home */}
        <Journal /> {/* Tampilkan halaman Journal */}
        <Project /> {/* Tampilkan halaman Project */}
        <About /> {/* Tampilkan halaman About */}
        <Contact />
        <Footer />
      </div>
  );
};

export default App;

