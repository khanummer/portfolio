import React, { Component } from 'react';
import './Education.css';

class Education extends Component {
  render() {
    return (
      <div className="Education" id="Education">

          <div className="Education-title">
            EDUCATION
          </div>

          <div className="General-Assembly">
            <div><a href="https://generalassemb.ly/"><img className="ga-img"src="../../imgs/ga-logo.png" alt="1"/></a></div>
          </div>
            <div className="ga-text">
              <ul>
                <li className="Education-li">600+ hours of instruction in Web Development.</li>
                <li className="Education-li">Created 5 fully functioning apps in one week sessions.</li>
                <li className="Education-li">Worked with other students in a team environment by helping, getting help, and working on projects together.</li>
                <li className="Education-li">Worked With a UX Design Team conversing prototype ideas and code implementation.</li>
              </ul>
            </div>
        
      </div>
    );
  }
}

export default Education;