import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import  { Prov } from './context/Context';
import { Router } from 'react-router-dom';

ReactDOM.render(
  <Prov>
    <App />
  </Prov>,
  document.getElementById('root')
);

