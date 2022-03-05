import React from 'react';
import Topic from './components/topic/Topic'
import './App.css';
import store from './store/Store';
import PointList from './components/pointList/PointList';
import { observer } from 'mobx-react';

const App: React.FC = observer(() => {
  store.visiblePoints.map((points, index) => {
    return 1;
  });
  return (
    <div className="App">
      <Topic />
      <div className='discussion-display'>        
      {store.visiblePoints.map((points, index) => {
          console.log(index);
          return <PointList 
            points={points} 
            responseDepth={index} 
            highlighted={store.selected[index]} />}
        )}
        <div/>
      </div>
    </div>
  );
})


export default App;
