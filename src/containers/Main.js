import { HashRouter, Route, Switch } from 'react-router-dom';
import React from 'react';

import App from '../containers/App.js';
// import Error from '../containers/404.js';
import Resume from '../containers/Resume.js';
import Contact from '../containers/Contact.js';
import Home from '../containers/Home.js'

const Main = () => (
  <HashRouter>
    <Switch>
        <Route exact path ="/" component = {Home} />
        <Route path ="/404" component = {Error}/> 
        <Route path ="/resume" component = {Resume}/>
        <Route path ="/contact" component = {Contact}/> 
    </Switch>
  </HashRouter>
)

export default Main