// about.js

import React, { useRef, useEffect } from 'react';
import '../styles/About.css';

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const aboutElement = aboutRef.current;

    const handleScroll = () => {
      const { top } = aboutElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (top < windowHeight * 0.75) {
        aboutElement.classList.add('fade-in');
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={aboutRef} className="container-about">
      <div id="about" className="AboutTitle">
        <p className="about-text">

        </p>
      </div>
    </div>
  );
};

export default About;


