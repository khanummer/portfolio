import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        
        <div className="NavBar-name">"UMMER KHAN PORTFOLIO"</div>
       
        <div className="NavBar-buttons">
        <a className="a-tag" href="#Projects"><div>PROJECTS</div></a>&nbsp;&nbsp;&nbsp;
        <a className="a-tag" href="#Education"><div>EDUCATION</div></a>&nbsp;&nbsp;&nbsp;
        <a className="a-tag" href="#Contact"><div>CONTACT</div></a>&nbsp;&nbsp;&nbsp;
        </div>

      </div>
    );
  }
}

export default NavBar;