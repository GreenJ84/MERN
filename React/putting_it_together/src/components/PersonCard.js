import React, {Component} from 'react';

class PersonCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            age: this.props.age
        };
    }
    render() {
        return <div>
            <h1>{this.props.firstName} {this.props.lastName}</h1>
            <p>Age: { this.state.age }</p>
            <p>Hair Color: {this.props.hairColor}</p>
            <button onClick={ this.ageUser }>Birthday Button for {this.props.firstName} {this.props.lastName}</button>
        </div>
    }

    ageUser = () => {
        console.log("you here");
        console.log(this.state.age);
        let newAge = this.state.age + 1;
        this.setState({age: newAge});
    }
}
    
export default PersonCard;