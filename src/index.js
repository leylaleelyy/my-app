import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyApp from './MyApp';
import Load from './pages/load'
import Loadable from 'react-loadable';


ReactDOM.render( < MyApp / > , document.getElementById('root'));
// Loadable.preloadReady().then(() => {
//   ReactDOM.hydrate( < App / > , document.getElementById('root'));
// })