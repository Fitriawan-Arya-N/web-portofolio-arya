// HomePage.js

import React, { useRef, useEffect } from 'react';
import '../styles/HomePage.css';

const HomePage = () => {
  const homeRef = useRef(null);

  useEffect(() => {
    const homeElement = homeRef.current;

    const handleScroll = () => {
      const { top } = homeElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (top < windowHeight * 0.75) {
        homeElement.classList.add('fade-in');
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={homeRef} className="container-home">
      <div id="home" className="HomeTitle">

        <p className="home-text">
            
        </p>
      </div>
    </div>
  );
};


export default HomePage;
