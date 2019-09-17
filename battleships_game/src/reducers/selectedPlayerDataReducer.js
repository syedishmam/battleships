export default (state = {
    selectedPlayer: null
}, action) => {
    switch(action.type) {
        case 'STORE_SELECTED_PLAYER_STATS':
            return {...state, selectedPlayer: action.payload};

        default:
            return state;
    }
}