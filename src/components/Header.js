import React from 'react';

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const Header = () => {
  return (
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
  );
};

export default Header;
