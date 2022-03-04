import React from 'react';
import Topic from './components/topic/Topic'
import './App.css';
import PointDisplay from './components/point/PointDisplay';
import Point from './models/Point';

const App: React.FC = () => {
  return (
    <div className="App">
      <Topic />
      <PointDisplay index={0} point={new Point('','')}  />
    </div>
  );
}

export default App;
