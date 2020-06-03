import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Die from './Die/Die';
import { connect } from 'react-redux';

class App extends Component {

    constructor () {
        super();
        // Most of this moves to redux :/
        // this.state = {
        //     dice: [],
        //     total: 0
        // }
        // this.get1to6 = this.get1to6.bind(this);
        // this.rerollDie = this.rerollDie.bind(this);
        // this.rerollAll = this.rerollAll.bind(this);
    }

    // This is now in redux?
    // componentDidMount() {
        // let numberOfDice = this.get1to6();
        // let dice = [];
        // let total = 0;
        // for (let i = 0; i < numberOfDice; i++) {
        //     let value = this.get1to6();
        //     dice.push({value: value});
        //     total = total + value;
        // }
        // this.setState({
        //     dice: dice,
        //     total: total
        // })
    // }

    // No longer to be used - Redux now?
    // get1to6() {
    //     return (Math.floor(Math.random() * Math.floor(6)))+1;
    // }

    // rerollDie(key) {
    //     let dice = this.state.dice;

    //     let original = dice[key].value;
    //     let newVal = this.get1to6();
    //     let difference = newVal - original;

    //     dice[key] = {value: newVal};
    //     let newTotal = this.state.total + difference;

    //     this.setState({
    //         dice:dice,
    //         total: newTotal
    //     });
    // }

    // Moving to redux?
    // rerollAll()
    // {
    //     let dice = [];
    //     this.state.dice.map((die, key) => {
    //         dice[key] = {value: this.get1to6()}
    //     });
    //     this.setState({dice:dice});
    // }

    render() {
        let dice = this.props.dice.map((die, key) =>
            <Die key={key} index={key} value={die.value} reroll={() => this.props.reroll(key)}></Die>
        );
        return (
            <div>
                <button onClick={this.props.setupDice}>Setup Dice</button>
                {dice}
                <p>Total: {this.props.total}</p>
                <button onClick={this.props.rerollAll}>Reroll All</button>
            </div>
        );

    }
}

const mapStateToProps = state => {
    return {
        dice: state.dice,
        total: state.total
    };
}

const mapDispatchToProps = dispatch => {
    return {
        setupDice: () => dispatch({type: 'SETUP'}),
        reroll: (key) => dispatch({type: 'REROLL', index:key}),
        rerollAll: (key) => dispatch({type: 'REROLLALL'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);