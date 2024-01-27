import React from 'react';
import "../styles/Header.css";

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    const headerHeight = document.querySelector('.header').offsetHeight;
    const yOffset = -headerHeight; // Adjust this value if needed
    const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><button onClick={() => scrollToSection("home")}>Home</button></li>
          <li><button onClick={() => scrollToSection("about")}>About</button></li>
          <li><button onClick={() => scrollToSection("journal")}>Journal</button></li>
          <li><button onClick={() => scrollToSection("project")}>Project</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
