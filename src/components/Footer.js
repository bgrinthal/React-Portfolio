import React from 'react';

import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="w-100 mt-auto text-dark p-4 border-top mt-5">
            <div className="container text-center mb-5">
                <a href='https://github.com/bgrinthal' target="_blank"><i className='fa fa-github footer'></i></a>
                <a href='https://www.linkedin.com/in/benjamin-grinthal-b05003122/' target="_blank"><i className="fa fa-linkedin-square footer"></i></a>
                <a href="mailto:bgrinthal@gmail.com" target="_blank" rel="noopener noreferrer" ><i className="fa fa-envelope footer" aria-hidden="true"></i></a>
                <a href={require("./assets/images/resume.pdf")} download="BenjaminGrinthalResume.pdf"><i className='fa fa-file footer'></i></a>
            </div>
        </footer >
    );
};

export default Footer;