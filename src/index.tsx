import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store/Store';
import Point from './models/Point';
import { Observer } from 'mobx-react';


store.addPoint(new Point('tit1', "des1"));
store.addPoint(new Point('tit2', "des2"));
store.addPoint(new Point('couter1', "dddd", 2));
console.log(store.visiblePoints[0]);

ReactDOM.render(
  <React.StrictMode>
    <Observer>{() => <App />}</Observer>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
