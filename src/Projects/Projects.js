import React, { Component } from 'react';
import './Projects.css';

class Projects extends Component {
  render() {
    return (
      <div className="Projects" id="Projects">
        
        <div className="project-title">PROJECTS</div>

          <div className="project-1-name">CONNECT FOUR</div>
          <img className="project-1-img" alt="1" src="../../imgs/connect-four-big-img.png"/>
          <div className="project-1-buttons">
            <a href="https://github.com/khanummer/ConnectFour"><button className="project-buttons">GITHUB</button></a>
            <a href="https://khanummer.github.io/ConnectFour/"><button className="project-buttons">DEPLOYED LINK</button></a>
          </div>
          <div className="project-1-text">Connect Four is a game where two players compete to create a sequence of four discs in a row either horizontally, vertically, or diagonally. I styled this game with a Takashi Murakami theme in mind from the background, the font, and the game pieces. Click on the "Change Arena" button near the bottom for a suprise.</div>
          <div className="project-1-technologies">TECHNOLOGIES USED: HTML | CSS | JAVASCRIPT | NODEJS | MONGODB | MONGOOSE | EXPRESS | HEROKU</div>
        

          <div className="project-2-name">FITTY</div>
          <img className="project-2-img" alt="2" src="../../imgs/fitty-big-img.png"/>
          <div className="project-2-buttons">
            <a href="https://github.com/khanummer/FITTY"><button className="project-buttons">GITHUB</button></a>
            <a href="https://fittyapp.herokuapp.com"><button className="project-buttons">DEPLOYED LINK</button></a>
          </div>
          <div className="project-2-text">FITTY is a social media app designed for people into fashion / streetwear culture to post pieces they enjoy and comment on others posts. I themed this app in a minimalistic and hand drawn / messy look. </div>
          <div className="project-3-technologies">TECHNOLOGIES USED: HTML5 | CSS | JAVASCRIPT | EXPRESS | EXPRESS-SESSION | MONGO | MONGOOSE | REACT | REACT-ROUTER | AXIOS | DOTENV | BCRYPT | CORS | LASTFM API | GIPHY API | HEROKU | MLAB</div>        
        
          <div className="project-3-name">RELOACTER</div>
          <img className="project-3-img" alt="3" src="../../imgs/relocater-big-img.png"/>
          <div className="project-3-buttons">
            <a href="https://github.com/khanummer/relocater"><button className="project-buttons">GITHUB</button></a>
            <a href="https://relocater.herokuapp.com"><button className="project-buttons">DEPLOYED LINK</button></a>
          </div>
          <div className="project-3-text">Relocater is a living wage app for the state of california. For each county, a chart of the median income needed to live there is shown as well as some other statistics.</div>
          <div className="project-3-technologies">TECHNOLOGIES USED: HTML | CSS | JAVASCRIPT | NODEJS | MONGODB | MONGOOSE | EXPRESS | REACT | BEM | AXIOS | SOCRATA API | D3-GEO | TOPO-JSON-CLIENT | RECHARTS | PASSPORT | GOOGLE OAUTH2 | SOCKETS | BCRYPT | HEROKU </div>        

          <div className="project-5-name">VISUAL MP5</div>
          <img className="project-5-img" alt="4" src="../../imgs/visualmp5-img.png"/>
          <div className="project-5-buttons">
            <a href="https://github.com/khanummer/visualmp5-express"><button className="project-buttons">EXPRESS GITHUB</button></a>
            <a href="https://github.com/khanummer/visualmp5-react"><button className="project-buttons">REACT GITHUB</button></a>
            <a href="https://visual-mp5.herokuapp.com"><button className="project-buttons">DEPLOYED LINK</button></a>
          </div>
          <div className="project-5-text">V/SUALMP5 is an application for users to create 'mashups' of visuals and audio that go together well. Users can create there own mashups of Songs and GIFS and post for others to see.</div>
          <div className="project-5-technologies">  HTML | CSS | JAVASCRIPT | PYTHON | FLASK | REACT | PEEWEE | SQLITE | GUNICORN</div>        
      

      </div>
    );
  }
}

export default Projects;