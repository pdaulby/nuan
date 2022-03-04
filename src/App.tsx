import React from 'react';
import Topic from './components/topic/Topic'
import './App.css';
import store from './store/Store';
import PointList from './components/pointList/PointList';

const App: React.FC = () => {
  return (
    <div className="App">
      <Topic />
      <div className='discussion-display'>
        <PointList points={store.visiblePoints[0]} />
           </div>
    </div>
  );
}

export default App;
