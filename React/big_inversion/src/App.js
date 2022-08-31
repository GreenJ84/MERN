import React from 'react';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName="Jesse" lastName="Greenough" age={25} hairColor="Blonde" />
    </div>
  );
}

export default App;
