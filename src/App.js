import React from 'react';
import logo from './logo.svg';
import './App.css';
import JokeList from './components/JokeList';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
<h1>React Redux App</h1>
      </header> */}
      <JokeList/>
    </div>
  );
}

export default App;
