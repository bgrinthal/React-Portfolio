import React from 'react';

const styles = {
  img: {
    maxWidth: '500px',
    width: '100%',
    height: '200px',
  },
  text: {
    textAlign: 'center'
  }
};

export default function Projects() {
  return (
    <div className='container'>
      <div className='row text-center'>
        <div className='col-sm mt-5'>
          <h1>Projects</h1>
        </div>
      </div>
      <div className='row text-center'>
        <div className='col-sm-6'>
          <a href='https://bgrinthal.github.io/Password-Generator/'>
            <img src={require("../assets/images/password.jpg")} alt="Password Generator" style={styles.img} className='mt-5'></img>
            {/* <p style={styles.text}>WORDS</p> */}
          </a>
        </div>
        <div className='col-sm-6'>
          <a href='https://bgrinthal.github.io/Weather-Tracker/'>
            <img src={require("../assets/images/weather.jpg")} alt="Weather Tracker" style={styles.img} className='mt-5'></img>
          </a>
        </div>
      </div>
      <div className='row text-center'>
        <div className='col-sm-6'>
          <a href='https://employee-tracker-bg22.herokuapp.com/'>
            <img src={require("../assets/images/employee.jpg")} alt="Employee Tracker" style={styles.img} className='mt-5'></img>
          </a>
        </div>
        <div className='col-sm-6'>
          <a href='https://note-taker-bg22.herokuapp.com/'>
            <img src={require("../assets/images/notes.jpg")} alt="Note Taker" style={styles.img} className='mt-5'></img>
          </a>
        </div>
      </div>
      <div className='row text-center mb-5'>
        <div className='col-sm-6'>
          <a href='https://movie-review-site-bg22.herokuapp.com/'>
            <img src={require("../assets/images/movie.jpg")} alt="Movie Review Site" style={styles.img} className='mt-5'></img>
          </a>
        </div>
        <div className='col-sm-6'>
          <a href='#'>
            <img src={require("../assets/images/coding.jpeg")} alt="Coming Soon!" style={styles.img} className='mt-5'></img>
          </a>
        </div>
      </div>
    </div>
  );
}
