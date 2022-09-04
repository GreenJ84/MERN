import React, {useState} from 'react';
import BoxStyle from "./Box";

const theseColors =[];
const addColor = (color) => {
    if (color.length > 2 && isColor(color)){
    theseColors.push(color);
    }
}

function isColor(strColor){
    return CSS.supports('color', strColor);
}

const divStyle = {
    display: 'flex',
    margin: '0px 10px'
}
const list ={
    listStyleType: 'none'
}

const BoxGenerator = (props) => {
    const colors = theseColors;
    const [color, setColor] = useState("");

    return (
        <div> 
        <form onSubmit={(e) => {e.preventDefault();  addColor(color); setColor("");}}>
            <label>
                Choose a color box of box <br/>you would like to add:
            </label><br/>
            <input type="text" placeholder="Any Color" onChange={(e) => setColor(e.target.value)} value={color}>
            </input><br/>
            <input type="submit" value="Create"></input>
        </form>
        <div style={ divStyle }>
            { colors.map((item, i) => 
            <li style={ list } key={i}><BoxStyle color={item}/></li>
            )}
        </div>
            
        </div>
    )
}

export default BoxGenerator;