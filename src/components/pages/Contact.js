import React from 'react';

export default function Contact() {
  return (
    <div className='container'>
      <div className='row text-center'>
        <div className='col-sm mt-5'>
          <h1 className='text-center'>Contact Me</h1>
        </div>
      </div>
      <div className='row text-center'>
        <div className='col-sm mt-5'>

            <p>Phone: 732-616-8142</p>
            <p> Email: <a class="c-links" href="mailto:bgrinthal@gmail.com" target="_blank"
              rel="noopener noreferrer"> bgrinthal@gmail.com</a></p>
            <p> Github: <a class="c-links" href="https://github.com/bgrinthal" target="_blank"> bgrinthal</a></p>
            <p> Linkedin: <a class="c-links" href="https://www.linkedin.com/in/benjamin-grinthal-b05003122/"
              target="_blank"> Benjamin Grinthal</a></p>

        </div>
      </div>
    </div>
  );
}
