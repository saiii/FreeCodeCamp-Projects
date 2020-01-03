import React from 'react';
import Editor from './containers/editor';
import Preview from './components/preview';
import './App.css';

function App() {
  return (
    <div className="App">
      <Editor />
      <Preview />
    </div>
  );
}

export default App;
