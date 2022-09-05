import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

const Form = () => {
    const {userName, setUserName} = useContext(MyContext);

    const handleChange = (nameToDisplay) => {
        setUserName(nameToDisplay);
    }

    return (
        <form>
            <label>Your Name: </label>
            <input type="text" placeholder="(i.e Bob Smith)" value={ userName } onChange={(e) => handleChange(e.target.value) }/>
        </form>
    )
}
export default Form;