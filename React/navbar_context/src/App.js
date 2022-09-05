import React, {useState} from 'react';
import './App.css';
import FormWrapper from './components/FormWrapper';
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';
import MyContext from './context/MyContext';


function App() {
  const [userName, setUserName] = useState("");

  return (
    <div className="App">
      <MyContext.Provider value={{userName, setUserName}}>
        <Wrapper>
          <Navbar/>
          <FormWrapper/>
        </Wrapper>
      </MyContext.Provider>
    </div>
  );
}

export default App;
