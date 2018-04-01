import React, { Component } from 'react';
import logo from '../images/logo.svg';
import './App.css';

class Contact extends Component {
  render() {
    return (
      <div className="fullPageContainer">
        
      <h2>get in touch</h2>  
        <div className="innerText">
        <div className="contact">
        <form method="POST" action="https://formspree.io/epiphany.compton@gmail.com">

  <input type="email" name="email" placeholder="Your email"/>
  <textarea name="message" placeholder="Your message"></textarea>
  <button type="submit">Send</button>
</form>
</div>
      </div>
      </div>
    );
  }
}

export default Contact;
