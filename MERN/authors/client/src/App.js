import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Display from './views/Display';
import './App.css';
import Update from './views/Update';
import Create from './views/Create';


function App() {

  return (
    <div className="App">
      <h1>Favorite Authors</h1>
      <Routes>

        <Route element={<Display />} path='/'/>

        <Route element={<Create  />} path='/author/new'/>

        <Route element={<Update />} path='/author/edit/:id' />

      </Routes>
    </div>
  );
}

export default App;
