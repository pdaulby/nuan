import React from 'react';
import './App.css';
import store from './store/Store';
import PointList from './components/pointList/PointList';
import { observer } from 'mobx-react';
import Header from './header/Header';

const App: React.FC = observer(() => {
  return (
    <div className="App">
      <Header />
      <div className='discussion-display'>        
      {store.visiblePoints.map((responses, index) => {
          return <PointList key={index}
            responses={responses} 
            responseDepth={index} />}
        )}
        <div/>
      </div>
    </div>
  );
})


export default App;
