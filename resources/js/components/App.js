import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Die from './Die/Die'

class App extends Component {

    constructor () {
        super();
        this.state = {
            dice: [],
            total: 0
        }
        this.get1to6 = this.get1to6.bind(this);
        this.rerollDie = this.rerollDie.bind(this);
        this.rerollAll = this.rerollAll.bind(this);
    }

    componentDidMount() {
        let numberOfDice = this.get1to6();
        let dice = [];
        let total = 0;
        for (let i = 0; i < numberOfDice; i++) {
            let value = this.get1to6();
            dice.push({value: value});
            total = total + value;
        }
        this.setState({
            dice: dice,
            total: total
        })
    }

    get1to6() {
        return (Math.floor(Math.random() * Math.floor(6)))+1;
    }

    rerollDie(key) {
        let dice = this.state.dice;

        let original = dice[key].value;
        let newVal = this.get1to6();
        let difference = newVal - original;

        dice[key] = {value: newVal};
        let newTotal = this.state.total + difference;

        this.setState({
            dice:dice,
            total: newTotal
        });
    }

    rerollAll()
    {
        let dice = [];
        this.state.dice.map((die, key) => {
            dice[key] = {value: this.get1to6()}
        });
        this.setState({dice:dice});
    }

    render() {
        let dice = this.state.dice.map((die, key) =>
            <Die key={key} index={key} value={die.value} reroll={this.rerollDie}></Die>
        );
        return (
            <div>
                {dice}
                <p>Total: {this.state.total}</p>
                <button onClick={this.rerollAll}>Reroll All</button>
            </div>
        );

    }
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
