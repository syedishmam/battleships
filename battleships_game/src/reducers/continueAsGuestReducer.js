export default (state = {guest: false}, action) => {
    if(action.type === 'CONTINUE_GUEST') {
        return {...state, guest: action.payload}
    }
}