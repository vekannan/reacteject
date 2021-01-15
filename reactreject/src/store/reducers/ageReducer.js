
const initState = {
    age: 30
}

const reducer = (state = initState, action) => {

    const newState = {...state}

    if(action.type === 'ageUpAction') {
        newState.age++;
    }

    if(action.type === 'ageDownAction'){
        newState.age--
    }

    return newState;
}

export default reducer;