import React, { useState} from 'react';
import './App.css';
import Display from './components/DisplayForm'
import Planets from './components/Planets';
import People from './components/People';
import Films from './components/Films';
import Starships from './components/Starships';
import Species from './components/Species';
import Vehicles from './components/Vehicles';
import { Routes, Route} from 'react-router-dom';
import MyContext from './context/MyContext';
import ErrorPage from './components/ErrorPage'

function App() {
  const [results, setResults] = useState({});


  return (
    <div className="App">
      <h1>Luke Skywalker API</h1>
      <hr/>
      <MyContext.Provider value={{results, setResults}}>
          <Routes>
            <Route path="/" element={<Display/>}/>
            <Route path="/planets/:id" element={<Planets/>}/>
            <Route path="/people/:id" element={<People/>}/>
            <Route path="/films/:id" element={<Films/>}/>
            <Route path="/species/:id" element={<Species/>}/>
            <Route path="/vehicles/:id" element={<Vehicles/>}/>
            <Route path="/starships/:id" element={<Starships/>}/>
            <Route path="/errors" element={<ErrorPage />}/>
          </Routes>
      </MyContext.Provider>
    </div>
  );
}

export default App;
