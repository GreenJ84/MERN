import React, { useState} from 'react';
import './App.css';
import Display from './components/DisplayForm'
import Planets from './components/Planets';
import People from './components/People';
import Films from './components/Films';
import Starships from './components/Starships';
import Species from './components/Species';
import Vehicles from './components/Vehicles';
import { Routes, Route, Link } from 'react-router-dom';
import MyContext from './components/context/MyContext';

function App() {
  const [results, setResults] = useState({});


  return (
    <div className="App">
      <h1>Luke Skywalker API</h1>
      <MyContext.Provider value={{results, setResults}}>
          <Routes>
            <Route path="/" element={<Display/>}/>
            <Route path="/planets" element={<Planets/>}/>
            <Route path="/people" element={<People/>}/>
            <Route path="/films" element={<Films/>}/>
            <Route path="/species" element={<Species/>}/>
            <Route path="/vehicles" element={<Vehicles/>}/>
            <Route path="/starships" element={<Starships/>}/>
          </Routes>
      </MyContext.Provider>
    </div>
  );
}

export default App;
