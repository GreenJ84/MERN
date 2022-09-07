import React from 'react';
import { Routes, Route, useParams } from "react-router-dom";
import './App.css';

const Welcome = () => {
  return (<h1>Welcome!</h1>);
}

const Display = (props) => {
  const {item} = useParams();

  if (Number.isNaN(+item)){
    return (
    <h2>The Word is: {item}!</h2>);
  } else{
    return (
      <h2>The Number is: {item}!</h2>);
  }
  
}

const Style = (props) => {
  const {item, text, bgc} = useParams();
  const styleStyle ={
    background: bgc,
    color: text
  }
  return (
    <h2 style={ styleStyle }>The Word is: {item}!</h2>);
}


function App() {
  return (
    <div className="App">
      <h1>Routing Example</h1>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/:item" element={<Display />} />
        <Route path="/:item/:text/:bgc" element={<Style />} />
      </Routes>
    </div>
  );
}

export default App;
