import React from 'react';
import { Link } from 'react-router-dom'
import '../styles.css';
import cycler from '../../images/cycler.png'
import cycler2 from '../../images/evologo.png'

const ProjectContainer = () => (
  <div id="projectContainer">
       <h2>Projects</h2>
       <div className = "imageHolder">
       <div className ="squareImageContainer" id="imageLeft">
       <img src={cycler} className='squareImage'/>
       </div>
       
       <div className ="squareImageContainer" id="imageRight">
         
       <img src={cycler2} className='squareImage'/>
       </div>
       
       </div>
      </div>
      
)

export default ProjectContainer