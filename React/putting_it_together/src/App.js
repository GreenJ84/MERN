import React from 'react';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName={ "Jesse" } lastName = { "Greenough" } age={ 24 } hairColor={ "Blonde" } />
      <PersonCard firstName={ "Danika" } lastName = { "Kraft" } age={ 22 } hairColor={ "Red" } />
      <PersonCard firstName={ "Lydia" } lastName = { "Leigh" } age={ 3 } hairColor={ "Balck" } />
      <PersonCard firstName={ "Rose" } lastName = { "Greenough" } age={ 61 } hairColor={ "Black" } />

    </div>
  );
}

export default App;
