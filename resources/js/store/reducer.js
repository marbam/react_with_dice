
const initialState = {
    dc: [
        {value: 1},
        {value: 2},
        {value: 3}
    ],
    tt: 6
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
            dc: dice,
            tt: total
        })
    }

    if (action.type === "REROLL") {
        let dice = state.dc;

        let original = dice[action.index].value;
        let newVal = (Math.floor(Math.random() * Math.floor(6)))+1;
        let difference = newVal - original;

        dice[action.index] = {value: newVal};
        let newTotal = state.tt + difference;

        return ({
            dc:dice,
            tt: newTotal
        });
    }

    if (action.type === "REROLLALL") {
        let dice = [];
        let total = 0;
        state.dc.map((die, key) => {
            let value = (Math.floor(Math.random() * Math.floor(6)))+1;
            dice[key] = {value: value};
            total = total + value;
        });
        return ({
            dc:dice,
            tt: total
        });
    }

    return state;
}

export default reducer;