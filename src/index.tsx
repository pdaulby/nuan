import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store/Store';
import Point from './models/Point';


store.addPoint(new Point('title', 'descr', ''), -1);
store.addPoint(new Point('title2', 'descr2', ''), -1);
store.addPoint(new Point('response', 'descr', ''), 0);

ReactDOM.render(
  <React.StrictMode>
     <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
