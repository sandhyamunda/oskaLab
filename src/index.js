import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
 import App from './App';
 //import Login from './Register/Login';
//import Signup from './Register/Signup';
// import Research from './research/Research';
//import Publication from './research/Publication';
//import Router from './routerpage/Router';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <App/> 
    {/* <Login /> */}
    {/* <Signup /> */}
    {/* <Research /> */}
    {/* <Publication/> */}
    {/* <Router/> */}
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
