import React from 'react';

import '../../styles/Project.css';

export default function Projects() {
  return (
    <div className='container'>
      <div className='row text-center'>
        <div className='col-sm mt-5'>
          <h1>Projects</h1>
        </div>
      </div>
      <div className='row text-center'>
        <div className='col-sm-6 relative'>
          <a href='https://bgrinthal.github.io/Password-Generator/'>
            <img src={require("../assets/images/password.jpg")} alt="Password Generator" className='mt-5 img'></img>
            <h4 className='projectTitle'>Password Generator</h4>
          </a>
          <p>Generate an entirely random password string given user character and length input.  A mostly JavaScript application that displays using HTML and styling in CSS.</p>
        </div>
        <div className='col-sm-6 relative'>
          <a href='https://bgrinthal.github.io/Weather-Tracker/'>
            <img src={require("../assets/images/weather.jpg")} alt="Weather Tracker" className='mt-5 img'></img>
            <h4 className='projectTitle'>Weather Forecast API</h4>
          </a>
          <p>Application that displays local weather and 5 day forecast when user searches for city.  Uses Javascript to fetch API data and display relevant info to user.</p>
        </div>
      </div>
      <div className='row text-center'>
        <div className='col-sm-6 relative'>
          <a href='https://employee-tracker-bg22.herokuapp.com/'>
            <img src={require("../assets/images/employee.jpg")} alt="Employee Tracker" className='mt-5 img'></img>
            <h4 className='projectTitle'>Employee Tracker</h4>
          </a>
          <p>Business tracking applications that allows user to add and view deparments, roles, employees, and more.  Uses node.js and MySQL to display and manage data.</p>
        </div>
        <div className='col-sm-6'>
          <a href='https://note-taker-bg22.herokuapp.com/'>
            <img src={require("../assets/images/notes.jpg")} alt="Note Taker" className='mt-5 img'></img>
          </a>
        </div>
      </div>
      <div className='row text-center mb-5'>
        <div className='col-sm-6'>
          <a href='https://movie-review-site-bg22.herokuapp.com/'>
            <img src={require("../assets/images/movie.jpg")} alt="Movie Review Site" className='mt-5 img'></img>
          </a>
        </div>
        <div className='col-sm-6'>
          <a href='#'>
            <img src={require("../assets/images/coding.jpeg")} alt="Coming Soon!" className='mt-5 img'></img>
          </a>
        </div>
      </div>
    </div>
  );
}
