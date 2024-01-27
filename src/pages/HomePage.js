import React from 'react';
import '../styles/HomePage.css';

const HomePage = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* Header */}
      <header>
        <nav>
          <ul>
            <li><button onClick={() => scrollToSection("home")}>Home</button></li>
            <li><button onClick={() => scrollToSection("about")}>About</button></li>
            <li><button onClick={() => scrollToSection("journal")}>Journal</button></li>
            <li><button onClick={() => scrollToSection("project")}>Project</button></li>
          </ul>
        </nav>
      </header>

      {/* Content */}
      <div id="home" className="content-section">
        <h2>Home</h2>
        {/* Isi konten untuk halaman Home */}
      </div>

      <div id="about" className="content-section">
        <h2>About</h2>
        {/* Isi konten untuk halaman About */}
      </div>

      <div id="journal" className="content-section">
        <h2>Journal</h2>
        {/* Isi konten untuk halaman Journal */}
      </div>

      <div id="project" className="content-section">
        <h2>Project</h2>
        {/* Isi konten untuk halaman Project */}
      </div>
    </div>
  );
};

export default HomePage;
