import React from 'react';

import '../styles/NavBar.css'

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-sm'>
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a
                href="#about"
                onClick={() => handlePageChange('About')}
                // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
              >
                01. About Me
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#projects"
                onClick={() => handlePageChange('Projects')}
                // This is a conditional (ternary) operator that checks to see if the current page is "Home"
                // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
              >
                02. Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#resume"
                onClick={() => handlePageChange('Resume')}
                // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
              >
                03. My Resume
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                onClick={() => handlePageChange('Contact')}
                // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
              >
                04. Contact Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavTabs;
