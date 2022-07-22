import React from 'react';

import '../../styles/Resume.css';

export default function Resume() {
  return (
    <div className='container'>
      <div className='row text-center'>
        <div className='col-sm mt-5'>
          <h1 className='text-center title'>Benjamin Grinthal</h1>
          <p>Address: 9206 Mount Laurel NJ, 08054  -  Phone: 732-616-8142  -  Email: bgrithal@gmail.com</p>
        </div>
      </div>
      <div className='row'>
        <div className='col-sm-3 mt-5 mb-5'>
          <h3 className='title'>SKILLS</h3>
          <ul>
            <li>Computer-Aided Design (CAD)</li>
            <li>MATLAB</li>
            <li>SolidWorks / AutoCAD</li>
            <li>Microsoft Visio</li>
            <li>Management and delegation</li>
            <li>3D Modeling/ Design</li>
            <li>Product Development</li>
            <li>Mechanical Design</li>
            <li>Teamwork/ Collaboration</li>
            <li>Manufacturing Process</li>
            <li>JavaScript,HTML5,CSS</li>
            <li>Bootstrap</li>
            <li>JQuery</li>
            <li>Express.js,Node.js</li>
            <li>Git,Heroku</li>
            <li>Object Oriented Programming</li>
            <li>MySQL</li>
            <li>React</li>
          </ul>
        </div>
        <div className='col-sm-9 mt-5 mb-5'>
          <h3 className='title'>PROFESSIONAL SUMMARY</h3>
          Determined mechanical engineering with over 6 years of experience. Seeking to use proven design, problem-solving, and management skills to excel any position. Collaborative team player with track record of delivering multiple, concurrent projects in fast-paced environments.
          <h3 className='title'>RELEVANT EXPERIENCE</h3>
          <h4>Rutgers Coding Bootcamp Certification, 05/2022 to 08/2022</h4>
          <ul>
            <li>3 month intensive course in a variety of programming languages and technologies</li>
            <li>Created a diverse portfolio in group and solo projects to design reactive front and back end
              applications deployed on GitHub</li>
            <li>Some examples include: </li>
            <ul>
              <li>Password Generator: JavaScript application to take user input of desired characters to
                be used and returns randomized sequence of the selected characters</li>
              <li>Weather Tracker: Uses API's and takes in city names to display popular weather infor-
                mation in a the area for the coming week</li>
              <li>Team Profile Generator: A Node.js command line application to build then display a
                professional team using object oriented programing</li>
            </ul>
          </ul>
          <h3 className='title'>WORK HISTORY</h3>
          <h4>OSP Engineer 11/2021 to 04/2022 </h4>
          <h4>Verizon - Mount Laurel, NJ</h4>
          <ul>
            <li>Managed the damage, upgrade, and installation of Verizon’s facilities in designated areas</li>
            <li>Coordinate with construction, power companies, and project managers to ensure work is
              completed in a timely manner</li>
            <li>Work with vendors to increase production and create accurate design for construction to fol-
              low</li>
            <li>Represent Verizon in meetings and surveys to solve problems or to expand the network into
              new locations</li>
          </ul>
          <h4>Design Engineer, 04/2018 to 11/2021</h4>
          <h4>Byers Engineering Company Inc. - Somerset, NJ</h4>
          <ul>
            <li>Design layouts for Verizon's service providing cables through large New York City streets and
              buildings </li>
            <li>Create CAD drawings using Microsoft Visio and AutoCAD to convey manufacturing and pro-
              duction configurations </li>
            <li>Estimate quantities and cost of materials, equipment, and labor to determine project feasibil-
              ity </li>
            <li>Develop proposals for clients outlining project scope and timeline </li>
            <li>Provide technical guidance, peer review, and mentorship to junior engineers engaged in Fios
              building designs </li>
            <li>Read and interpret blueprints, technical drawings, schematics, and computer-generated re-
              ports </li>
            <li>Travels to location to sketch/verify on field information to use for design </li>
          </ul>
          <h4>Design Engineer Intern, 06/2011 to 12/2016 </h4>
          <h4>RotorClip Company - Somerset, NJ</h4>
          <ul>
            <li>Perform tolerance analysis to support success in high-volume heat treatment product manu-
              facturing </li>
            <li>Operate tensile and hardness testing machines to perform spot analysis on products</li>
            <li>Use Solidworks to design tools for creating company retaining rings</li>
            <li>Design retaining rings meeting company and customer tolerance and material standards</li>
            <li>Document drawing edits using Engineering Change Notices (ECN)</li>
          </ul>
          <h3>EDUCATION</h3>
          <h4>Bachelor of Science : Mechanical Engineering, 05/2016</h4>
          Rutgers, The State University of New Jersey - New Brunswick, NJ Aerospace Engineering Certificate
        </div>
      </div>
    </div>
  );
}
