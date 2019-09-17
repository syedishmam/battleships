export default (state = {
}, action) => {
    switch(action.type) {
        case 'STORE_SELECTED_PLAYER_DATA':
            return {...state, player: action.payload};

        default:
            return state;
    }
}