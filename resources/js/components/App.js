import React from 'react';
import ReactDOM from 'react-dom';
import Die from './Die/Die'

function App() {
    return (
        <div className="container">
            <Die></Die>
        </div>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
