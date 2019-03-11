import React, { Component } from 'react';
import './Projects.css';

class Projects extends Component {
  render() {
    return (
      <div className="Projects" id="Projects">
        
        <div className="project-title">PROJECTS</div>

          <div className="project-1-name">CONNECT FOUR</div>
          <img className="project-1-img" src="../../imgs/connect-four-big-img.png"/>
          <div className="project-1-buttons">
            <a href="https://github.com/khanummer/ConnectFour"><button className="project-buttons">GITHUB</button></a>
            <a href="https://khanummer.github.io/ConnectFour/"><button className="project-buttons">DEPLOYED LINK</button></a>
          </div>
          <div className="project-1-text">Connect Four is a game where two players compete to create a sequence of four discs in a row either horizontally, vertically, or diagonally. I styled this game with a Takashi Murakami theme in mind from the background, the font, and the game pieces. Click on the "Change Arena" button near the bottom for a suprise.</div>
          <div className="project-1-technologies">TECHNOLOGIES USED: HTML | CSS | JAVASCRIPT </div>
        

        
          <div className="project-2-name">FITTY</div>
          <img className="project-2-img" src="../../imgs/fitty-big-img.png"/>
          <div className="project-2-buttons">
            <a href="https://github.com/khanummer/FITTY"><button className="project-buttons">GITHUB</button></a>
            <a href="https://fittyapp.herokuapp.com"><button className="project-buttons">DEPLOYED LINK</button></a>
          </div>
          <div className="project-2-text">FITTY is a social media app designed for people into fashion / streetwear culture to post pieces they enjoy and comment on others posts. I themed this app in a minimalistic and hand drawn / messy look. </div>
          <div className="project-3-technologies">TECHNOLOGIES USED: HTML | CSS | JAVASCRIPT | NODEJS | MONGODB | MONGOOSE | EXPRESS | HEROKU </div>        
        
          <div className="project-3-name">RELOACTER</div>
          <img className="project-3-img" src="../../imgs/relocater-big-img.png"/>
          <div className="project-3-buttons">
            <a href="https://github.com/khanummer/relocater"><button className="project-buttons">GITHUB</button></a>
            <a href="https://relocater.herokuapp.com"><button className="project-buttons">DEPLOYED LINK</button></a>
          </div>
          <div className="project-3-text">Relocater is a living wage app for the state of california. For each county, a chart of the median income needed to live there is shown as well as some other statistics.</div>
          <div className="project-3-technologies">TECHNOLOGIES USED: HTML | CSS | JAVASCRIPT | NODEJS | MONGODB | MONGOOSE | EXPRESS | REACT | BEM | AXIOS | SOCRATA API | D3-GEO | TOPO-JSON-CLIENT | RECHARTS | PASSPORT | GOOGLE OAUTH2 | SOCKETS | BCRYPT | HEROKU </div>        

        
          <div className="project-4-name">MEMESCHEME</div>
          <img className="project-4-img" src="../../imgs/memescheme-img.png"/>
          <div className="project-4-buttons">
            <a href="https://github.com/khanummer/memescheme-flask"><button className="project-buttons">FLASK GITHUB</button></a>
            <a href="https://github.com/khanummer/memescheme-react"><button className="project-buttons">REACT GITHUB</button></a>
            <a href="https://memescheme.herokuapp.com"><button className="project-buttons">DEPLOYED LINK</button></a>
          </div>
          <div className="project-4-text">MemeScheme is a meme generator website. The website is styled to be a meme itself, from the font to the wacky colors everywhere.</div>
          <div className="project-4-technologies">TECHNOLOGIES USED: HTML | CSS | JAVASCRIPT | PYTHON | FLASK | REACT | PEEWEE | SQLITE | GUNICORN </div>  


          <div className="project-5-name">VISUAL MP5</div>
          <img className="project-5-img" src="../../imgs/visualmp5-img.png"/>
          <div className="project-5-buttons">
            <a href="https://github.com/khanummer/visualmp5-express"><button className="project-buttons">EXPRESS GITHUB</button></a>
            <a href="https://github.com/khanummer/visualmp5-react"><button className="project-buttons">REACT GITHUB</button></a>
            <a href="#"><button className="project-buttons">DEPLOYED LINK</button></a>
          </div>
          <div className="project-5-text">VISUAL MP5 is a app for finding visuals to look at while listening to your favorite music. Users can search through Spotify for songs and a Youtube Video with interesting visuals to match that song will appear. Users can also create their own 'mashups' and vote on how good they are.</div>
          <div className="project-5-technologies">TECHNOLOGIES USED: HTML | CSS | JAVASCRIPT </div>        
      

      </div>
    );
  }
}

export default Projects;