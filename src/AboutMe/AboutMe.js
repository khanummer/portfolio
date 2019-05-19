import React, { Component } from 'react';
import './AboutMe.css';

class AboutMe extends Component {
  render() {
    return (
      <div className="AboutMe">
        <img src="../../imgs/animated.GIF" alt="1" className="AboutMe-pic"/>
        <div className="AboutMe-title">HEY THERE</div>
        <div className="AboutMe-text">
        <div>Welcome to my portfolio, I am a junior web developer / software engineer who specializes in the MERN Stack. I am a creative at heart who enjoys all mediums.</div>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        


        <div>
        TECHNICAL SKILLS :
        HTML | CSS | Javascript | ReactJS | NodeJS | Python | Express | MongoDB | Mongoose | Flask | GraphQL | FlexBox | CSS Grid | Git | GitHub | jQuery | Terminal | Nano | Heroku | Postman | Axios | API's |  Microsoft Office | Google Suite | 
        </div>

        </div>

      </div>
    );
  }
}

export default AboutMe;