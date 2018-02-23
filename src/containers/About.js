import React, { Component } from 'react';
import logo from '../images/logo.svg';
import './App.css';
import './styles.css';

class About extends Component {

  
  render() {
    return (
      <div id='aboutContainer'>
        <h2>Hello </h2>
        <div className='innerText'>
       <p >I'm an artist turned web developer here to solve all your problems. With a wide skill set spanning print and digital design, web development, and mobile development, I'm sure I'll be able to help you. </p>
       </div>
      </div>
    );
  }
}

export default About;
