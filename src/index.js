import React from 'react'
import { render } from 'react-dom'
import { HashRouter } from 'react-router-dom'
import App from './containers/App';
import 'normalize.css';

render((
  <HashRouter>
    <App />
  </HashRouter>
), document.getElementById('root'));
