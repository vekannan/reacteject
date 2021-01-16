
export const ageUpActionAsync = () => {
    return {type: 'ageUpAction'}
}

export const ageUpAction = () => {
    return dispatch => {
        dispatch(changeInAge())
        setTimeout(() => {
            dispatch(changeInAge())
            dispatch(ageUpActionAsync())

        },3000);
    }
}

export const changeInAge = () => {
    return {type: 'changeInAge'}
}

export const ageDownAction = () => {
    return {type: 'ageDownAction'}
}