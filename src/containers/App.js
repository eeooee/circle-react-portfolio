import React, { Component } from 'react';
import logo from '../images/logo.svg';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import './App.css';
import Splash from '../components/Splash.js';

import Main from '../containers/Main.js';
import Skills from '../containers/Skills.js';
import About from '../containers/About.js';
import ProjectContainer from '../containers/projects/ProjectContainer.js';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Main />
        <Footer/>
      </div>
    );
  }
}

export default App;
