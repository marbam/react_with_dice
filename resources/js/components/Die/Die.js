import React from 'react';
import ReactDOM from 'react-dom';

function Die(props) {
    return (
        <p>I'm a d6 with a value of {props.value}.<button onClick={() => props.reroll(props.index)}>Reroll</button></p>
    );
}
export default Die;