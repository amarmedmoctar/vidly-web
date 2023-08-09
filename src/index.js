import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'font-awesome/css/font-awesome.css';
import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.min.js';

ReactDOM.render (
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById ('root')
);
registerServiceWorker ();
