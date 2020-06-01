import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Die from './Die/Die'

class App extends Component {

    constructor () {
        super();
        this.state = {
            dice: []
        }
        this.get1to6 = this.get1to6.bind(this);
        this.rerollDice = this.rerollDice.bind(this);
    }

    componentDidMount() {
        let numberOfDice = this.get1to6();
        let dice = [];
        for (let i = 0; i < numberOfDice; i++) {
            dice.push({value: this.get1to6()})
        }
        this.setState({
            dice: dice
        })
    }

    get1to6() {
        return (Math.floor(Math.random() * Math.floor(6)))+1;
    }

    rerollDice(key) {
        let dice = this.state.dice;
        dice[key] = {value: this.get1to6()};
        this.setState({dice:dice});
    }

    render() {
        let dice = this.state.dice.map((die, key) =>
            <Die key={key} index={key} value={die.value} reroll={this.rerollDice}></Die>
        );
        return dice;
    }
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
