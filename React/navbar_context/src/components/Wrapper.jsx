import React, {useState} from 'react';
import MyContext from '../context/MyContext';

const  Wrapper = ({children}) => {
    const [userName, setUserName] = useState("");

    return <MyContext.Provider value={{ userName, setUserName}}>
            {children}
        </MyContext.Provider>
    }
export default Wrapper;

