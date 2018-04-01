import React from 'react';
import { Link } from 'react-router-dom'

import './styles.css';

const Skills = () => (
  <div id ="skillsContainer">
       <h2>Skills</h2>
       <div className="innerText">
      
      
         
        <div class="pills"><br/>
        <h3>
        languages
        </h3>
       
       <span class="pill">javascript</span> <span class="pill">c#</span> <span class="pill">java</span> <span class="pill">html5</span> <span class="pill">css3</span>
    
       <h3>
        frameworks
      </h3>
       <span class="pill">react.js</span> <span class="pill">react native</span> <span class="pill">bootstrap</span> <span class="pill">jquery</span> <span class="pill">velocity.js</span> <span class="pill">processing.js</span>
      <h3>
        design tools
      </h3>
     <span class="pill">photoshop</span> <span class="pill">indesign</span> <span class="pill">illustrator</span> <span class="pill">gimp</span> <span class="pill">inkscape</span> <span class="pill">scribus</span>
       </div>
     
       {/* <p> <i class="fab fa-react"></i>
       <i class="fab fa-js-square"></i>
       <i class="fab fa-css3"></i>
       <i class="fab fa-git-square"></i>
       <i class="fab fa-html5"></i></p> */}
       </div>
      </div>
      
)

export default Skills