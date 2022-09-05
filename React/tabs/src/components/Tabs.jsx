import React, {useState} from 'react';
import Tab from './Tab';
import tabStyle from './tabStyle.css'

const array =[];
let Tab1 = new Tab("Tab 1", "This is Tab 1 content showing!");
let Tab2 = new Tab("Tab 2", "This is Tab 2 content showing!");
let Tab3 = new Tab("Tab 3", "This is Tab 3 content showing!");
array.push(Tab1, Tab2, Tab3)

const listStyle = {
    display: 'inline-block',
    background: 'lightgrey',
    margin: '10px 5px 0px'
}
const chosen = {
    display: 'inline-block',
    background: 'grey',
    margin: '10px 5px 0px'
}

const divStyle = {
    width: '80%',
    height: '400px',
    margin: '10px 10%',
    background: 'lightgray',
    display: 'flex',
    alignItems: 'end',
    justifyContent: 'center'
}

const messageStyle={
    width: '120px',
    height: '50px',
    position: 'relative',
    textAlign: 'center'
}




const Tabs = () => {
    const [message, setMessage] = useState("Welcome In");
    const tabs = array;

    const tabChange = (e, item) => {
        e.style = {chosen};
        setMessage(item.message);
    }

    const moveMe = () => {
        var elem = document.getElementById("message");
        
        var pos = 0;
        var id = setInterval(frame, 5);
        function frame() {
        if (pos === -250) {
            clearInterval(id);
        } else {
            console.log("here");
            pos--;
            elem.style.top = pos + 'px';

            
        }
        }
    }

    return ( <div>
        { tabs.map((item, i) => <li style={ listStyle } key={ i } onClick={ (e) => [tabChange(e, item), moveMe()] }>{ item.tabName }</li>)}
        <div style={ divStyle }id="myContainer">
        <p id='message' style={ messageStyle } onClick={ (e) => moveMe() } >{ message }</p>
        </div>
    </div>)
}
export default Tabs;