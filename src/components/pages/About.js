import React from 'react';

import '../../styles/About.css';



export default function About() {
  return (
    <div className='container mb-5'>
      <div className='row'>
        <div className='col-sm-3'>
          <img src={require("../assets/images/headshot.jpg")} alt="Professional Headshot" className='mt-5 headshot'></img>
        </div>
        <div className='col-sm-9 mt-5'>
          <h2 className='title typewriter mb-4'>Hello World!  I am Ben Grinthal, Full Stack Dev.</h2>
          <p>
            I am a Rutgers University graduate with a bachelors degree in mechanical engineering and a
            certificate in aerospace engineering. Over the last 10 years I have gained experience in different
            engineering fields from manufacturing to quality control to design, learning the ins and outs of
            the engineering profession. Through this time, I discovered a growing interest in coding, teaching myself some and
            eventually enrolling in a Rutgers Coding Bootcamp course.  During this intensive bootcamp, I learned bany different 
            languages and technologies shown on my resume and demonstrated in my projects.
            <br></br>
            <br></br>
            I am a team player, dependable, and enjoy learning new skills and technologies.  My goal is to take my years of 
            professional experience and problem soling skills aquired from my previous engineering positions, along with the 
            knowledge I am gaining from this course, to kickstart my career in coding.  
            </p>
        </div>
      </div>
    </div>
  );
}
