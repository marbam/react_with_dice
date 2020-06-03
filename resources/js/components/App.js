import React from 'react';
import ReactDOM from 'react-dom';
import Die from './Die/Die';
import { connect } from 'react-redux';

function App(props) {

    let dice = props.dice.map((die, key) =>
        <Die key={key} index={key} value={die.value} reroll={() => props.reroll(key)}></Die>
    );
    return (
        <div>
            <button onClick={props.setupDice}>Setup Dice</button>
            {dice}
            <p>Total: {props.total}</p>
            <button onClick={props.rerollAll}>Reroll All</button>
        </div>
    );
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