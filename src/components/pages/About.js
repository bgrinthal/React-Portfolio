import React from 'react';

import '../../styles/About.css';



export default function About() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-sm-3'>
          <img src={require("../assets/images/headshot.jpg")} alt="Professional Headshot" className='mt-5 headshot'></img>
        </div>
        <div className='col-sm-9 mt-5'>
          <h1 className='title'>Benjamin Grinthal</h1>
          <p>
            I am a Rutgers University graduate with a bachelors degree in mechanical engineering and a
            certificate in aerospace engineering. Over the last 10 years I have gained experience in different
            engineering fields from manufacturing to quality control to design, learning the ins and outs of
            each job. Through this time, I discovered a growing interest in coding, teaching myself some and
            eventually enrolling in a Rutgers Coding Bootcamp course. My goal is to take the professional
            experience aquired from my previous position, along with the knowledge I am gaining from this
            course, to kickstart my career in coding.
          </p>
        </div>
      </div>
    </div>
  );
}
