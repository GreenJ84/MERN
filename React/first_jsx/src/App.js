import React from 'react';
import './App.css';
import PersonCard from './components/PersonCard';

import SomeClassComponent from './components/SomeClassComponent';

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
      <SomeClassComponent someText={"Hello World,"}/>
      <hr/>
      <PersonCard firstName={"Jane"} lastName ={"Doe"} age={45} hairColor={"black"}/>
      <PersonCard firstName={"John"} lastName ={"Smith"} age={88} hairColor={"brown"}/>
      <PersonCard firstName={"Millard"} lastName ={"Fillmore"} age={50} hairColor={"blonde"}/>
      <PersonCard firstName={"Maria"} lastName ={"Smith"} age={62} hairColor={"gray"}/>

      </>
    </div>
  );
}

export default App;
