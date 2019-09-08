export default (state = {value: false}, action) => {
    switch(action.type) {
        case 'CONTINUE_GUEST':
            return {...state, value: action.payload}

        default: 
            return state
    }
}