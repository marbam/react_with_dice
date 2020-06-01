import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Die extends Component {
    constructor () {
        super();
        this.state = {
            value: 1
        }
        this.roll = this.roll.bind(this);
    }

    componentDidMount() {
        this.roll();
    }

    roll() {
        this.setState({
            value: (Math.floor(Math.random() * Math.floor(6)))+1
        });
    }

    render() {
        return (
            <p>I'm a dice with a value of {this.state.value}.<button onClick={this.roll}>Reroll</button></p>
        );
    }
}
export default Die;