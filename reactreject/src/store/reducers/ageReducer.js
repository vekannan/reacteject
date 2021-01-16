
const initState = {
    age: 30,
    isChangeInAge: false,
}

const reducer = (state = initState, action) => {

    const newState = {...state}

    if(action.type === 'ageUpAction') {
        newState.age++;
    }
    
    if(action.type === 'ageDownAction'){
        newState.age--
    }

    if(action.type === 'changeInAge'){
        newState.isChangeInAge = !newState.isChangeInAge;
    }

    return newState;
}

export default reducer;