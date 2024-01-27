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
        <h2>About</h2>
        <p className="about-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
    </div>
  );
};

export default About;


