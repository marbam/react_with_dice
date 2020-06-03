
const initialState = {
    dice: [
        {value: 1},
        {value: 2},
        {value: 3}
    ],
    total: 6
}

const reducer = (state = initialState, action) => {

    if (action.type === "SETUP") {
        let numberOfDice = (Math.floor(Math.random() * Math.floor(6)))+1;
        let dice = [];
        let total = 0;
        for (let i = 0; i < numberOfDice; i++) {
            let value = (Math.floor(Math.random() * Math.floor(6)))+1;
            dice.push({value: value});
            total = total + value;
        }
        return ({
            dice: dice,
            total: total
        })
    }

    if (action.type === "REROLL") {
        let dice = state.dice;

        let original = dice[action.index].value;
        let newVal = (Math.floor(Math.random() * Math.floor(6)))+1;
        let difference = newVal - original;

        dice[action.index] = {value: newVal};
        let newTotal = state.total + difference;

        return ({
            dice:dice,
            total: newTotal
        });
    }

    if (action.type === "REROLLALL") {
        let dice = [];
        let total = 0;
        state.dice.map((die, key) => {
            let value = (Math.floor(Math.random() * Math.floor(6)))+1;
            dice[key] = {value: value};
            total = total + value;
        });
        return ({
            dice:dice,
            total: total
        });
    }

    return state;
}

export default reducer;