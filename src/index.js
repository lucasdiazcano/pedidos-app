import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.scss';
import Routes from './routes';
import './utils/styles/global.scss'

ReactDOM.render(
  <React.StrictMode>
    <Routes/>
  </React.StrictMode>,
  document.getElementById('root')
);


