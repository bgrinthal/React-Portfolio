import React from 'react';

import '../../styles/Project.css';

export default function Projects() {
  return (
    <div class="container text-center">
      <div class="row mt-2">
        <div class="col-md-12">
          <h1 className='title'>Projects</h1>
          <p>Below is a list of a few projects I have completed using many different languages and technologies.  Click on the box to view the deployed applications or click on the GitHub icon to view the repository.  For a full list of projects, feel free to visit my GitHub page found at the bottom of the page or under the "Contact Me" tab!</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 mt-2">
          <div className="card card-size relative">
            <a href='https://bgrinthal.github.io/Password-Generator/' target="_blank" rel="noreferrer" className='hover'>
              <img src={require("../assets/images/password.jpg")} className="card-img-top img-size" alt="Password Generator" />
              <h4 className='projectTitle'>Password Generator
                <a href='https://github.com/bgrinthal/Password-Generator' target="_blank" rel="noreferrer"><i className='fa fa-github gitIcon'></i></a></h4>
            </a>
            <div className="card-body">
              <p className="card-text">Generate an entirely random password string given user character and length input.  A mostly JavaScript application that displays using HTML and styling in CSS.</p>
            </div>
          </div>
        </div>
        <div class="col-md-6 mt-2">
          <div className="card card-size relative">
            <a href='https://bgrinthal.github.io/Weather-Tracker/' target="_blank" rel="noreferrer" className='hover'>
              <img src={require("../assets/images/weather.jpg")} className="card-img-top img-size" alt="Weather Tracker" />
              <h4 className='projectTitle'>Weather Forecast API
                <a href='https://github.com/bgrinthal/Weather-Tracker' target="_blank" rel="noreferrer"><i className='fa fa-github gitIcon'></i></a></h4>
            </a>
            <div className="card-body">
              <p className="card-text">Application that displays local weather and 5 day forecast when user searches for city.  Uses Javascript to fetch API data and display relevant info to user.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-2">
        <div class="col-md-6  mt-2">
          <div className="card card-size relative">
            <a href='https://employee-tracker-bg22.herokuapp.com/' target="_blank" rel="noreferrer" className='hover'>
              <img src={require("../assets/images/employee.jpg")} className="card-img-top img-size" alt="Employee Tracker" />
              <h4 className='projectTitle'>Employee Tracker
                <a href='https://github.com/bgrinthal/Employee-Tracker' target="_blank" rel="noreferrer"><i className='fa fa-github gitIcon'></i></a></h4>
            </a>
            <div className="card-body">
              <p className="card-text">Business tracking applications that allows user to add and view deparments, roles, employees, and more.  Uses node.js and MySQL to display and manage data.</p>
            </div>
          </div>
        </div>
        <div class="col-md-6  mt-2">
          <div className="card card-size relative">
            <a href='https://note-taker-bg22.herokuapp.com/' target="_blank" rel="noreferrer" className='hover'>
              <img src={require("../assets/images/notes.jpg")} className="card-img-top img-size" alt="Note Taker" />
              <h4 className='projectTitle'>Note Taker
                <a href='https://github.com/bgrinthal/Note-Taker' target="_blank" rel="noreferrer"><i className='fa fa-github gitIcon'></i></a></h4>
            </a>
            <div className="card-body">
              <p className="card-text">Note taking applications that allows the user to record a note title and body.  This note is saved in local storage to be brought up again after the user closes and repoens the page.  Uses node.js, JavaScript and express for routing.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-2">
        <div class="col-md-6  mt-2">
          <div className="card card-size relative">
            <a href='https://react-fitness-2022.herokuapp.com/' target="_blank" rel="noreferrer" className='hover'>
              <img src={require("../assets/images/workout.jpg")} className="card-img-top img-size" alt="IMDMe Movie Review" />
              <h4 className='projectTitle'>React Fitness
                <a href='https://github.com/bgrinthal/react-fitness' target="_blank" rel="noreferrer"><i className='fa fa-github gitIcon'></i></a></h4>
            </a>
            <div className="card-body">
              <p className="card-text">React Fitness is a MERN stack application that allows users, once an account is created, to manage their daily workout routine. Users can select a number of different exercises from five main muscle groups and incorporate those exercises into their daily routine.</p>
            </div>
          </div>
        </div>
        <div class="col-md-6  mt-2">
          <div className="card card-size relative">
            <a href='https://bgrinthal.github.io/Work-Day-Planner/' target="_blank" rel="noreferrer" className='hover'>
              <img src={require("../assets/images/planner.jpg")} className="card-img-top img-size" alt="Work Day Planner" />
              <h4 className='projectTitle'>Work Day Planner
                <a href='https://github.com/bgrinthal/Work-Day-Planner' target="_blank" rel="noreferrer"><i className='fa fa-github gitIcon'></i></a></h4>
            </a>
            <div className="card-body">
              <p className="card-text">User can input important meetings or "to-do's" into hour timeblocks to be saved in local storage while the application tracks the time and provides visual alerts for upcoming items.  Uses HTML, CSS, JavaSvript, and moment.js to keep time.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
