import React from 'react';
import Header from './components/Header'; // Impor komponen Header
import HomePage from './pages/HomePage'; // Impor halaman Home
import About from './pages/About'; // Impor halaman About
import Journal from './pages/Journal'; // Impor halaman Journal
import Project from './pages/Project'; // Impor halaman Project
import Footer from './components/Footer';


const App = () => {
  return (
    <div>
      <Header /> {/* Tampilkan komponen Header */}
      <HomePage /> {/* Tampilkan halaman Home */}
      <Journal /> {/* Tampilkan halaman Journal */}
      <Project /> {/* Tampilkan halaman Project */}
      <About /> {/* Tampilkan halaman About */}
      <Footer />
    </div>
  );
};


export default App;
