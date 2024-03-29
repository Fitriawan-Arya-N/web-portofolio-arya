// journal.js

import React, { useRef, useEffect } from 'react';
import '../styles/Journal.css';

const Journal = () => {
  const journalRef = useRef(null);

  useEffect(() => {
    const journalElement = journalRef.current;

    const handleScroll = () => {
      const { top } = journalElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (top < windowHeight * 0.75) {
        journalElement.classList.add('fade-in');
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={journalRef} className="container-journal">
      <div id="journal" className="JournalTitle">
        <h2>Journal</h2>
        <p className="journal-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
            <div className='container-item'>
                <div className='item-journal'>
                  <h3 className='title-journal'>Percobaan 1</h3>
                  <p className='journal-info'>January 28, 2023 - 8 min read</p>
                  <p className="journal-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                  <p className='journal-read'>Read More</p>
                </div>

                <div className='item-journal'>
                  <h3 className='title-journal'>Percobaan 2</h3>
                  <p className='journal-info'>January 29, 2023 - 4 min read</p>
                  <p className="journal-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                  <p className='journal-read'>Read More</p>
                </div>

                <div className='item-journal'>
                  <h3 className='title-journal'>Percobaan 3</h3>
                  <p className='journal-info'>January 30, 2023 - 2 min read</p>
                  <p className="journal-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                  <p className='journal-read'>Read More</p>
                </div>
            </div>
    </div>
  );
};

export default Journal;


