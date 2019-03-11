import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar/NavBar';
import Projects from './Projects/Projects';
import AboutMe from './AboutMe/AboutMe';
import Education from './Education/Education';
import Contact from './Contact/Contact';
class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar/>
      <AboutMe/>
      <Projects/>
      <Education/>
      <Contact/>
      </div>
    )
  }
}

export default App;
