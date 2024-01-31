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
        <div className="avatar-container">
            <img src="https://png.pngtree.com/png-clipart/20221207/ourmid/pngtree-business-man-avatar-png-image_6514640.png" alt="Avatar" className="avatar" />
        </div>
        <h2>Arya Nugraha</h2>
        <p className='home-text'>📍 Currently in Semarang, Central of Java</p>
        <p className='home-text'>
          Indonesian who currently has an interest in becoming a DevOps engineer and previously had experience as a front-end engineer. 
          I am a person who wants to develop and has a passion for learning new things. 
          You can explore more deeply with this web if you want to know more about me and you can contact me for any collaboration.
        </p>
        <button className='contact-btn'>Contact Me</button>
      </div>
    </div>
  );
};

export default HomePage;
