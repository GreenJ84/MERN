import React, {useContext} from 'react';
import MyContext from '../context/MyContext';

const navStyle ={
    height: '50px',
    background: 'lightblue',
    marginBottom: '10px',
    textAlign: 'right',
    padding: '2px 25px 2px'
}

const Navbar = () => {
    const {userName} = useContext(MyContext);
    

    return (
        <div style={ navStyle}>
            <p>Hello, { userName }!</p>
        </div>
    )
}
export default Navbar;