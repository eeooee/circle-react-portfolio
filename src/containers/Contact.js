import React, { Component } from 'react';
import logo from '../images/logo.svg';
import './App.css';

class Contact extends Component {
  render() {
    return (
      <div className="fullPageContainer">
        
      <h2>get in touch</h2>  
        <div className="innerText">
        <form method="POST" action="https://formspree.io/epiphany.compton@gmail.com">

        <label for="email">email address</label>
  <input className="contactInput" type="email" name="email" placeholder="yourname@email.com"/>
  
  <label for="message">message</label>
  <textarea className="contactText" name="message" placeholder="Hi!  Just wanted to say hello. "></textarea>
  <button className="contactButton" type="submit">Send</button>
</form>
      </div>
      </div>
    );
  }
}

export default Contact;
