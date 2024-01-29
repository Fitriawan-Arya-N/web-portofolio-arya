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
        <h2>Holaa!!, <br/>Your smile could literally <br/>melt my existance </h2>
        <p className="home-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
    </div>
  );
};


export default HomePage;
