import React from 'react';
import './App.css';
import SomeClassComponent from './components/SomeClassComponent';
import PersonCard from './components/PersonCard';



function App() {
  return (
    <div className="App">
      <>
        <h1>Hello Dojo</h1>
      <table>
        <tr><th>Things I need to do: </th></tr>
        <tr>
          <ul>
            <li>Learn React</li>
            <li>Climb Mt. Everest</li>
            <li>Run a marathon</li>
            <li>Feed the dogs</li>
          </ul>
        </tr>
      </table>
      <PersonCard firstName={ "Jesse" } lastName={"Green"} age={25} hairColor={"Brown"} />
      <SomeClassComponent />
      </>
    </div>
  );
}

export default App;
