import React from 'react';
import './App.css';
import Quotes from './Quotes/Quotes';

function App() {
  document.body.style.backgroundColor = 'red';
  return (
    <div className="App">
      <div>
        <Quotes />
      </div>
    </div>
  );
}

export default App;
