import React from 'react';
import { Link } from 'react-router-dom'

import './styles.css';

const Skills = () => (
  <div id ="skillsContainer">
       <h2>Skills</h2>
       <div className="innerText">
      
       <p>
        languages: javascript, c#, java, html5, css3
        <br/>
        frameworks: react.js, react native, bootstrap, jquery, velocity.js, processing.js
        
        <br/>
        design tools: adobe photoshop, indesign, illustrator, and open source equivalents Gimp, Inkscape, Scribus. 
       </p>
       <p> <i class="fab fa-react"></i>
       <i class="fab fa-js-square"></i>
       <i class="fab fa-css3"></i>
       <i class="fab fa-git-square"></i>
       <i class="fab fa-html5"></i></p>
       </div>
      </div>
      
)

export default Skills