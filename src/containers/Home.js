import React from 'react';
import { Link } from 'react-router-dom';
import Splash from '../components/Splash.js';
import About from '../containers/About.js';
import Skills from '../containers/Skills.js';
import ProjectContainer from '../containers/projects/ProjectContainer.js';

const Home = () => (
    <div >
         <Splash/>
         <About/>
         <Skills/>
         {/* <ProjectContainer/> */}
        
    </div>

      
)

export default Home