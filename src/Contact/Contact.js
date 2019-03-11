import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <div className="Contact" id="Contact">
        <div className="Contact-title">CONTACT</div>
        
        <div className="Contact-info">
            <div className="Contact-single-info">UMMERNKHAN@GMAIL.COM</div>
            <div className="Contact-single-info">(909)-200-5668</div>
            <a className="a-tag" href="https://www.linkedin.com/in/khanummer/"><div className="Contact-single-info-link">LINKEDIN</div></a>
            <a className="a-tag" href="https://github.com/khanummer"><div className="Contact-single-info-link">GITHUB</div></a>
        </div>

      </div>
    );
  }
}

export default Contact;